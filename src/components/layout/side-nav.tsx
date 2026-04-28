import { Home, MessageSquare, Users } from "lucide-react"

import NavLink from "../common/nav-link"
import SidebarItem from "../common/sidebar-item"
import { Separator } from "../ui/separator"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
} from "../ui/sidebar"

export default function SideNav() {
  return (
    <Sidebar>
      <SidebarHeader>
        <span
          className="py-4 text-center font-bold tracking-widest"
          role="banner"
        >
          RESTAURANT CRM
        </span>
        <Separator />
      </SidebarHeader>

      <SidebarContent className="p-2">
        <SidebarMenu className="gap-2">
          <SidebarItem>
            <NavLink to="/" title="Home" icon={<Home></Home>} />
          </SidebarItem>

          <SidebarItem>
            <NavLink to="/employees" title="Employees" icon={<Users></Users>} />
          </SidebarItem>

          <SidebarItem>
            <NavLink
              to="/chat"
              title="Chat"
              icon={<MessageSquare></MessageSquare>}
            />
          </SidebarItem>
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  )
}
