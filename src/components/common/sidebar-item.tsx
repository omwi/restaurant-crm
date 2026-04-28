import type { ChildrenProp } from "@/types/types"

import { SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar"

export default function SidebarItem({ children }: ChildrenProp) {
  return (
    <SidebarMenuItem>
      <SidebarMenuButton
        asChild
        className="h-12 bg-sidebar-accent p-4 hover:brightness-110"
      >
        {children}
      </SidebarMenuButton>
    </SidebarMenuItem>
  )
}
