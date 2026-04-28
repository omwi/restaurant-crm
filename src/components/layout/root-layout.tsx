import { Outlet } from "@tanstack/react-router"
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools"

import Header from "./header"
import SideNav from "./side-nav"

export default function RootLayout() {
  return (
    <div className="flex h-screen w-screen flex-row">
      <SideNav />
      <main className="flex h-full w-full flex-col">
        <Header />
        <Outlet />
      </main>
      <TanStackRouterDevtools />
    </div>
  )
}
