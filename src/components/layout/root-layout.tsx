import { Outlet } from "@tanstack/react-router"
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools"

import SideNav from "./side-nav"

export default function RootLayout() {
  return (
    <div className="flex h-screen flex-row">
      <SideNav />
      <Outlet />
      <TanStackRouterDevtools />
    </div>
  )
}
