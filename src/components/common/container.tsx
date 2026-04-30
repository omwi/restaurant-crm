import { cn } from "@/lib/utils"
import type { ChildrenProp } from "@/types/types"

export default function Container({
  children,
  className,
}: ChildrenProp & { className?: string }) {
  return (
    <div
      className={cn(
        "flex w-full flex-1 flex-col items-center self-stretch p-2",
        className
      )}
    >
      {children}
    </div>
  )
}
