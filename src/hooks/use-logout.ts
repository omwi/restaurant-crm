import { useQueryClient } from "@tanstack/react-query"
import { useNavigate, useRouter } from "@tanstack/react-router"

import { useAuth } from "@/features/auth/hooks/use-auth"

export function useLogout() {
  const queryClient = useQueryClient()
  const router = useRouter()
  const navigate = useNavigate()

  const { logout } = useAuth()

  async function handleLogout() {
    logout()
    await Promise.allSettled([
      queryClient.invalidateQueries(),
      router.invalidate(),
    ])
    navigate({ to: "/" })
  }

  return { handleLogout }
}
