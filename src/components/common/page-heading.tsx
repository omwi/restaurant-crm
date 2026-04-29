import { cn } from "@/lib/utils"

export default function PageHeading({
  title,
  className,
}: {
  title: string
  className?: string
}) {
  return <h1 className={cn("text-xl font-semibold", className)}>{title}</h1>
}
