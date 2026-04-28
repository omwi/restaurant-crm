import type { AuthTokens, User } from "../types/types"

export async function login(username: string, password: string): Promise<User> {
  const res = await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  })
  const json = await res.json()

  if (!res.ok) {
    throw new Error(json.message || "Unknown error")
  }

  return {
    id: json.id,
    username: json.username,
    avatarUrl: json.image,
    accessToken: json.accessToken,
    refreshToken: json.refreshToken,
    firstName: json.firstName,
    lastName: json.lastName,
  }
}

export async function refreshTokens(refreshToken: string): Promise<AuthTokens> {
  const res = await fetch("https://dummyjson.com/auth/refresh", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ refreshToken: refreshToken }),
  })
  const json = await res.json()

  return {
    accessToken: json.accessToken,
    refreshToken: json.refreshToken,
  }
}
