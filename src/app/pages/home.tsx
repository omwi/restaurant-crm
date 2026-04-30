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
      <h1 className="text-center text-5xl font-bold">Restaurant CRM</h1>
      <div className="flex flex-col gap-2">
        <p className="text-center text-pretty">
          Manage tables, orders, staff, and reservations effortlessly.
        </p>
        <div className="flex flex-row justify-center gap-2">
          {!auth.user && (
            <>
              <Button className="max-w-32 flex-1" onClick={handleClick}>
                Login
              </Button>
              <Button
                className="max-w-32 flex-1"
                variant="outline"
                onClick={handleClick}
              >
                Sign up
              </Button>
            </>
          )}
        </div>
      </div>
    </Container>
  )
}
