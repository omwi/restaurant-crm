import UserActions from "../common/user-actions"
import { SidebarTrigger } from "../ui/sidebar"

export default function Header() {
  return (
    <header className="flex flex-row items-center justify-between bg-card p-2">
      <SidebarTrigger className="hover:brightness-80" />
      <UserActions />
    </header>
  )
}
