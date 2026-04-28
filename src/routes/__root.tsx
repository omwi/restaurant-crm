import { createRootRouteWithContext } from "@tanstack/react-router"

import RootLayout from "@/components/layout/root-layout"
import type { AuthContext } from "@/features/auth/context/auth-context"

type RouterContext = {
  auth: AuthContext
}

export const Route = createRootRouteWithContext<RouterContext>()({
  component: RootLayout,
})
