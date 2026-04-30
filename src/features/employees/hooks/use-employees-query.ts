import { useQuery } from "@tanstack/react-query"

import type { Employee, RawUser, UsersJson } from "../types/types"

const URL = "https://dummyjson.com/users"

export function useEmployeesQuery() {
  const queryResults = useQuery({
    queryKey: ["employees"],
    queryFn: async () => {
      const response = await fetch(URL)
      const json: UsersJson = await response.json()
      if (!response.ok) {
        throw new Error("Failed to fetch employees")
      }
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
