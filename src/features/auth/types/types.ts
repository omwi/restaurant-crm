export type AuthTokens = {
  accessToken: string
  refreshToken: string
}

export type User = AuthTokens & {
  id: number
  username: string
  avatarUrl: string
}
