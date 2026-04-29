import { cn } from "@/lib/utils"
import type { ChildrenProp } from "@/types/types"

export default function Container({
  children,
  className,
}: ChildrenProp & { className?: string }) {
  const classes = cn("container flex flex-col items-center p-4", className)
  return <div className={classes}>{children}</div>
}
