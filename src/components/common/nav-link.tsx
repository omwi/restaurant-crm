import { Link, type LinkProps } from "@tanstack/react-router"

import { cn } from "@/lib/utils"

type NavLinkProps = Omit<LinkProps, "className"> & {
  className?: string
  title: string
  icon: React.ReactNode
}

export default function NavLink({
  className,
  title,
  icon,
  ...linkProps
}: NavLinkProps) {
  const classes = cn("flex flex-row items-center gap-2", className)
  return (
    <Link {...linkProps} className={classes}>
      <span>{icon}</span>
      <span>{title}</span>
    </Link>
  )
}
