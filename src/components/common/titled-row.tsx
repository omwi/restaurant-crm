import type { ChildrenProp } from "@/types/types"

export default function TitledRow({
  children,
  title,
}: ChildrenProp & { title: string }) {
  return (
    <div className="flex flex-row flex-nowrap items-center justify-between">
      <span className="font-semibold text-muted-foreground">{title}</span>
      {children}
    </div>
  )
}
