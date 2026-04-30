import type { Shift } from "../types/types"
import { useEmployeesQuery } from "./use-employees-query"

export function useEmployeesStats() {
  const { data: employees } = useEmployeesQuery()

  const currentShift: Shift = "A"

  const total = employees.length
  const active = employees.filter(
    (employee) => employee.shift === currentShift
  ).length
  const idle = total - active

  return { total, active, idle }
}
