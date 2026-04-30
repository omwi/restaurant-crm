import { useQuery } from "@tanstack/react-query"

import { env } from "@/app/env"

import type { Employee, RawUser, UsersJson } from "../types/types"

export function useEmployeesQuery() {
  const queryResults = useQuery({
    queryKey: ["employees"],
    queryFn: async () => {
      const response = await fetch(env.API_URL + env.USERS_PATH)
      if (!response.ok) {
        throw new Error("Failed to fetch employees")
      }
      const json: UsersJson = await response.json()
      return json.users.map(mapEmployee)
    },
  })
  return { ...queryResults, data: queryResults.data || [] }
}

function mapEmployee(user: RawUser): Employee {
  return {
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    avatarUrl: user.image,
    shift: user.bloodGroup.endsWith("+") ? "A" : "B",
    employmentDate: new Date(user.birthDate).toISOString(),
    billingDate: new Date().toISOString(),
  }
}
