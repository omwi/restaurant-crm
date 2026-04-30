import { cn } from "@/lib/utils"

import type { Shift } from "../types/types"

export default function ShiftBadge({ shift }: { shift: Shift }) {
  return (
    <span
      className={cn(
        "flex size-8 items-center justify-center rounded-full text-white",
        {
          "bg-green-400": shift === "A",
          "bg-sky-400": shift === "B",
        }
      )}
    >
      {shift}
    </span>
  )
}
