import { useNavigate } from "@tanstack/react-router"

import Container from "@/components/common/container"
import { Button } from "@/components/ui/button"
import { Route } from "@/routes"

export default function HomePage() {
  const { auth } = Route.useRouteContext()

  const navigate = useNavigate()

  function handleClick() {
    navigate({ to: "/login", search: { redirect: "/chat" } })
  }

  // flex h-full w-full flex-col items-center gap-6 pt-24
  return (
    <Container className="flex-1 gap-6 pt-24">
      <h1 className="text-5xl font-bold">Restaurant CRM</h1>
      <div className="flex flex-col gap-2">
        <p>Manage tables, orders, staff, and reservations effortlessly.</p>
        <div className="flex flex-row justify-center gap-2">
          {!auth.user && (
            <>
              <Button className="w-32" onClick={handleClick}>
                Login
              </Button>
              <Button className="w-32" variant="outline" onClick={handleClick}>
                Sign up
              </Button>
            </>
          )}
        </div>
      </div>
    </Container>
  )
}
