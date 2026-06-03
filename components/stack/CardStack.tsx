"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { StackCard } from "@/components/stack/types";
import FlippableCard from "@/components/stack/FlippableCard";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useDragControls,
} from "motion/react";

type Swiped = { card: StackCard; dir: 1 | -1; fromX: number; wasFlipped: boolean; version: number };

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];
const DECK_TWEEN = { type: "tween" as const, duration: 0.42, ease: EASE };
const SNAP_BACK = {
  type: "spring" as const,
  stiffness: 420,
  damping: 44,
  mass: 1.0,
  bounce: 0,
};
const EXIT_TWEEN = { type: "tween" as const, duration: 0.4, ease: EASE };
const ENTER_TWEEN = { type: "tween" as const, duration: 0.5, ease: EASE };
const SWIPE_OFFSET_PX = 140,
  SWIPE_VELOCITY = 900,
  TAP_MOVE_GUARD_PX = 10;

export default function CardStack({
  cards,
  maxVisible = 5,
  activeIndex,
  onActiveIndexChange,
}: {
  cards: StackCard[];
  maxVisible?: number;
  activeIndex?: number;
  onActiveIndexChange?: (index: number) => void;
}) {
  const [order, setOrder] = useState<StackCard[]>(cards);
  const [flipped, setFlipped] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [swiped, setSwiped] = useState<Swiped | null>(null);
  const [stage, setStage] = useState<"exit" | "enter" | null>(null);
  const [freezeDeck, setFreezeDeck] = useState(false);
  const movedRef = useRef(false);
  const startPtRef = useRef<{ x: number; y: number } | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const swipedRef = useRef<Swiped | null>(null);
  const swipeVersionRef = useRef(0);
  const [frameW, setFrameW] = useState(1000);
  const prevActiveIndex = useRef<number | undefined>(undefined);

  const navigateToCard = useCallback((index: number) => {
    const targetCard = cards[index];
    if (!targetCard) return;
    const after = cards.slice(index + 1);
    const before = cards.slice(0, index);
    setOrder([targetCard, ...after, ...before]);
    setFlipped(false);
  }, [cards]);

  // Listen for dock navigation events from DockNavigation component
  useEffect(() => {
    const handleDockNavigate = (e: CustomEvent<{ index: number }>) => {
      navigateToCard(e.detail.index);
    };

    window.addEventListener(
      "dockNavigate",
      handleDockNavigate as EventListener,
    );
    return () =>
      window.removeEventListener(
        "dockNavigate",
        handleDockNavigate as EventListener,
      );
  }, [navigateToCard]);

  // Handle external activeIndex changes from dock navigation
  useEffect(() => {
    if (activeIndex === undefined || activeIndex === prevActiveIndex.current)
      return;
    prevActiveIndex.current = activeIndex;
    navigateToCard(activeIndex);
    onActiveIndexChange?.(activeIndex);
  }, [activeIndex, navigateToCard, onActiveIndexChange]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const update = () => setFrameW(el.getBoundingClientRect().width);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const visible = useMemo(
    () => order.slice(0, maxVisible),
    [order, maxVisible],
  );
  const PEEK_Y = 18,
    PEEK_X = 0,
    SCALE_STEP = 0.01,
    OPACITY_STEP = 0.08;
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-220, 0, 220], [-10, 0, 10]);
  const SWIPE_X = Math.max(240, frameW * 0.58);

  const dragControls = useDragControls();

  const startSwipe = (dir: 1 | -1, wasFlipped: boolean) => {
    const top = order[0];
    if (!top) return;

    swipeVersionRef.current += 1;
    const fromX = x.get();

    if (swipedRef.current) {
      const old = swipedRef.current;
      setOrder((prev) => {
        const withoutOld = prev.filter((c) => c.id !== old.card.id);
        return [...withoutOld, old.card];
      });
    }

    setOrder((prev) => prev.slice(1));

    const next = { card: top, dir, fromX, wasFlipped, version: swipeVersionRef.current };
    swipedRef.current = next;
    setSwiped(next);
    setStage("exit");
    setFlipped(false);
    setIsDragging(false);
    x.set(0);
  };

  const finishEnter = () => {
    const card = swipedRef.current;
    if (!card || card.version !== swipeVersionRef.current) return;

    setFreezeDeck(true);
    setOrder((prev) => {
      const id = card.card.id;
      const without = prev.filter((c) => c.id !== id);
      return [...without, card.card];
    });

    setStage(null);
    setSwiped(null);
    swipedRef.current = null;

    requestAnimationFrame(() => setFreezeDeck(false));
  };

  const targetIndex = maxVisible;
  const targetY = targetIndex * PEEK_Y;
  const targetXOffset = targetIndex * PEEK_X;
  const targetScale = 1 - targetIndex * SCALE_STEP;
  const targetZ = 50 - targetIndex;

  return (
    <div ref={containerRef} className="relative w-full h-full overflow-visible">
      {visible
        .map((card, index) => {
          const isTop = index === 0;

          const y = index * PEEK_Y;
          const xOffset = index * PEEK_X;
          const scale = 1 - index * SCALE_STEP;
          const opacity = Math.max(0.35, 1 - index * OPACITY_STEP);
          const zIndex = 50 - index;

          const Front = card.Front;
          const Back = card.Back;

          return (
            <motion.div
              key={card.id}
              className="absolute inset-0"
              style={{
                zIndex,
                x: isTop ? x : 0,
                rotate: isTop ? rotate : 0,
                touchAction: "pan-y",
              }}
              initial={{ y, scale, opacity }}
              animate={{ y, scale, opacity }}
              transition={freezeDeck ? { duration: 0 } : DECK_TWEEN}
              drag={isTop ? "x" : false}
              dragControls={dragControls}
              dragListener={false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.5}
              onPointerDown={(e) => {
                if (!isTop) return;
                startPtRef.current = { x: e.clientX, y: e.clientY };
                movedRef.current = false;
                dragControls.start(e);
              }}
              onPointerMove={(e) => {
                const s = startPtRef.current;
                if (!s) return;
                const dx = Math.abs(e.clientX - s.x);
                const dy = Math.abs(e.clientY - s.y);
                if (dx > TAP_MOVE_GUARD_PX || dy > TAP_MOVE_GUARD_PX)
                  movedRef.current = true;
              }}
              onPointerUp={() => {
                startPtRef.current = null;
              }}
              onPointerCancel={() => {
                startPtRef.current = null;
                movedRef.current = false;
              }}
              onLostPointerCapture={() => {
                startPtRef.current = null;
              }}
              onDragStart={() => setIsDragging(true)}
              onDragEnd={(_, info) => {
                setIsDragging(false);
                startPtRef.current = null;

                if (!isTop) return;

                const offsetX = info.offset.x;
                const velocityX = info.velocity.x;
                const shouldSwipe =
                  Math.abs(offsetX) > SWIPE_OFFSET_PX ||
                  Math.abs(velocityX) > SWIPE_VELOCITY;

                if (shouldSwipe) {
                  startSwipe(offsetX >= 0 ? 1 : -1, flipped);
                } else {
                  animate(x, 0, SNAP_BACK);
                }
              }}
            >
              <div
                className="w-full h-full"
                style={{
                  pointerEvents: isTop ? "auto" : "none",
                  transform: !isTop ? `translateX(${xOffset}px)` : undefined,
                }}
              >
                {isTop && Back ? (
                  <FlippableCard
                    flipped={flipped}
                    onToggle={() => {
                      if (movedRef.current) return;
                      setFlipped((v) => !v);
                    }}
                    enabled={!isDragging}
                    front={<Front />}
                    back={<Back />}
                    className="w-full h-full"
                  />
                ) : (
                  <Front />
                )}
              </div>
            </motion.div>
          );
        })
        .reverse()}

      {swiped && stage === "exit"
        ? (() => {
            const SwipeFace = swiped.wasFlipped && swiped.card.Back ? swiped.card.Back : swiped.card.Front;
            return (
              <motion.div
                key={`${swiped.card.id}-exit`}
                className="absolute inset-0"
                style={{ zIndex: 999, pointerEvents: "none" }}
                initial={{
                  x: swiped.fromX,
                  y: 0,
                  rotate: swiped.fromX / 26,
                  opacity: 1,
                  scale: 1,
                }}
                animate={{
                  x: swiped.dir * SWIPE_X,
                  rotate: swiped.dir * 10,
                  opacity: 0,
                }}
                transition={EXIT_TWEEN}
                onAnimationComplete={() => {
                  if (swipedRef.current?.version === swipeVersionRef.current) {
                    setStage("enter");
                  }
                }}
              >
                <SwipeFace />
              </motion.div>
            );
          })()
        : null}

      {swiped && stage === "enter"
        ? (() => {
            const SwipeFace = swiped.wasFlipped && swiped.card.Back ? swiped.card.Back : swiped.card.Front;
            return (
              <motion.div
                key={`${swiped.card.id}-enter`}
                className="absolute inset-0"
                style={{
                  zIndex: targetZ,
                  pointerEvents: "none",
                  transform: `translateX(${targetXOffset}px)`,
                }}
                initial={{
                  x: swiped.dir * SWIPE_X,
                  y: targetY,
                  rotate: swiped.dir * 5,
                  opacity: 1,
                  scale: targetScale,
                }}
                animate={{
                  x: 0,
                  y: targetY,
                  rotate: 0,
                  opacity: 0,
                  scale: targetScale,
                }}
                transition={{
                  x: ENTER_TWEEN,
                  y: ENTER_TWEEN,
                  rotate: ENTER_TWEEN,
                  scale: ENTER_TWEEN,
                  opacity: { duration: 1, delay: 0.3, ease: EASE },
                }}
                onAnimationComplete={finishEnter}
              >
                <SwipeFace />
              </motion.div>
            );
          })()
        : null}
    </div>
  );
}
