import { useQueryClient } from "@tanstack/react-query"
import { useState } from "react"

import type { ChildrenProp } from "@/types/types"

import { login as loginUser, refreshTokens } from "../api/api"
import { AuthContext } from "../context/auth-context"
import type { User } from "../types/types"

const AUTH_STORAGE_KEY = "auth-user"

export default function AuthProvider({ children }: ChildrenProp) {
  const client = useQueryClient()

  const [user, setUser] = useState<User | null>(() => {
    const persistedUser = localStorage.getItem(AUTH_STORAGE_KEY)
    return persistedUser ? JSON.parse(persistedUser) : null
  })

  const login = async (username: string, password: string) => {
    const user = await loginUser(username, password)
    setUser(user)
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user))
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem(AUTH_STORAGE_KEY)
    client.invalidateQueries()
  }

  const refresh = async () => {
    if (!user) {
      throw new Error("User is not logged in")
    }

    const tokens = await refreshTokens(user.refreshToken)
    const refreshedUser = { ...user, ...tokens }
    setUser(refreshedUser)
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(refreshedUser))

    return tokens
  }

  return (
    <AuthContext value={{ user, login, logout, refresh }}>
      {children}
    </AuthContext>
  )
}
