import { useNavigate } from "@tanstack/react-router"

import defaultAvatar from "@/assets/default-avatar.png"
import { useAuth } from "@/features/auth/hooks/use-auth"

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Button } from "../ui/button"

export default function UserActions() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  function handleLogout() {
    logout()
    navigate({ to: "/" })
  }

  return (
    <div className="flex flex-row items-center gap-2">
      {user && <Button onClick={handleLogout}>Logout</Button>}

      <Avatar>
        <AvatarImage src={user?.avatarUrl} alt="" />
        <AvatarFallback>
          <img
            src={defaultAvatar}
            alt=""
            className="h-full w-full object-cover p-2"
          />
        </AvatarFallback>
      </Avatar>
      {user && (
        <span>
          {user.lastName} {user.firstName}
        </span>
      )}
    </div>
  )
}
