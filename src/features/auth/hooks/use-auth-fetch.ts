import { useAuth } from "./use-auth"

export function useAuthFetch() {
  const { refresh, user } = useAuth()

  async function fetchWithAuth(url: string, init?: RequestInit) {
    if (!user) {
      return fetch(url, init)
    }

    const response = await fetch(url, withToken(user.accessToken, init))

    if (response.status === 401) {
      const refreshedTokens = await refresh()
      return fetch(url, withToken(refreshedTokens.accessToken, init))
    }

    return response
  }

  return fetchWithAuth
}

function withToken(accessToken: string, init?: RequestInit): RequestInit {
  const headers = new Headers(init?.headers)
  headers.set("Authorization", `Bearer ${accessToken}`)

  return {
    ...init,
    headers,
  }
}
