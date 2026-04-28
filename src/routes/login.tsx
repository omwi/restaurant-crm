import { createFileRoute, redirect } from "@tanstack/react-router"

import LoginPage from "@/app/pages/login"

export const Route = createFileRoute("/login")({
  validateSearch: (search) => ({
    redirect: (search.redirect as string) || "/",
  }),
  beforeLoad: ({ context, search }) => {
    const { user } = context.auth
    if (user) {
      throw redirect({ to: search.redirect })
    }
  },
  component: LoginPage,
})
