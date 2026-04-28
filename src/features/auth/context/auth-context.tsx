import { createContext } from "react"

import type { AuthTokens, User } from "../types/types"

export type AuthContext = {
  user: User | null
  login: (username: string, password: string) => Promise<void>
  logout: () => void
  refresh: () => Promise<AuthTokens>
}

export const AuthContext = createContext<AuthContext | null>(null)
