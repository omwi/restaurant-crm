import { cn } from "@/lib/utils"

import type { Shift } from "../types/types"

export default function ShiftBadge({ shift }: { shift: Shift }) {
  return (
    <span
      className={cn("flex size-8 items-center justify-center rounded-full", {
        "bg-green-300": shift === "A",
        "bg-sky-300": shift === "B",
      })}
    >
      {shift}
    </span>
  )
}
