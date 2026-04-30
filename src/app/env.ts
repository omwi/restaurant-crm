import * as z from "zod"

function createEnv() {
  const envSchema = z.object({
    API_URL: z.url(),
    LOGIN_PATH: z.string(),
    REFRESH_PATH: z.string(),
    USERS_PATH: z.string(),
    SOCKET_URL: z.url(),
  })

  const envVars = Object.entries(import.meta.env).reduce(
    (acc: Record<string, string>, [key, value]: readonly [string, string]) => {
      acc[key.replace("VITE_", "")] = value
      return acc
    },
    {}
  )

  const parsedEnv = envSchema.safeParse(envVars)

  if (!parsedEnv.success) {
    throw new Error(`Invalid env provided: ${parsedEnv.error.message}`)
  }

  return parsedEnv.data
}

export const env = createEnv()
