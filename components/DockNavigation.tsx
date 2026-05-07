"use client"

import { Dock, DockIcon } from "@/components/ui/dock"
import { buttonVariants } from "@/components/ui/button"

const NAV_ITEMS = [
  { icon: "home", label: "Home", index: 0 },
  { icon: "work", label: "Experience", index: 1 },
  { icon: "folder", label: "Projects", index: 4 },
  { icon: "neurology", label: "Skills", index: 7 },
]

export default function DockNavigation() {
  const navigateTo = (index: number) => {
    window.dispatchEvent(new CustomEvent('dockNavigate', { detail: { index } }))
  }

  return (
    <div className="fixed bottom-20 left-0 right-0 flex justify-center pointer-events-auto z-50">
      <Dock direction="middle">
        {NAV_ITEMS.map((item) => (
          <DockIcon key={item.label}>
            <button
              onClick={() => navigateTo(item.index)}
              className={buttonVariants({ variant: "ghost", size: "icon" }) + " size-12 rounded-full"}
              aria-label={item.label}
            >
              <span className="material-symbols-rounded text-xl">{item.icon}</span>
            </button>
          </DockIcon>
        ))}
      </Dock>
    </div>
  )
}