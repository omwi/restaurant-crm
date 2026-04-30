import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"

export default function StatCard({
  title,
  count,
  className,
}: {
  title: string
  count: number
  className?: string
}) {
  return (
    <article
      className={cn(
        "flex flex-col gap-4 rounded-xl bg-accent p-4 shadow-sm",
        className
      )}
    >
      <h2 className="text-sm font-semibold text-muted-foreground">{title}</h2>
      <div className="flex flex-row items-center justify-between gap-4">
        <p className="text-4xl font-bold">{count}</p>
        <div className="flex min-w-8 flex-1 flex-col self-stretch">
          <div className="flex-1" />
          <Separator className="bg-muted-foreground" />
          <div className="flex-1" />
        </div>
        <Button variant="outline" onClick={() => toast(`Viewing ${title}`)}>
          View
        </Button>
      </div>
    </article>
  )
}
