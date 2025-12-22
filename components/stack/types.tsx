import type { ComponentType } from "react";

export type StackCard = {
    id: string;
    Front: ComponentType;
    Back?: ComponentType;
}