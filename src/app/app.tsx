import { createRouter, RouterProvider } from "@tanstack/react-router"

import { useAuth } from "@/features/auth/hooks/use-auth"
import { routeTree } from "@/routeTree.gen"

import AppProvider from "./provider"

const router = createRouter({ routeTree, context: { auth: undefined! } })

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router
  }
}

const InnerApp = () => {
  const auth = useAuth()
  return <RouterProvider router={router} context={{ auth }} />
}

export default function App() {
  return (
    <AppProvider>
      <InnerApp />
    </AppProvider>
  )
}
