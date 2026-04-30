import { useState } from "react"

import { useEmployeesQuery } from "./use-employees-query"

export function useEmployees() {
  const { data: employees, ...rest } = useEmployeesQuery()
  const [selectedIds, setSelectedIds] = useState<number[]>([])
  const [isToggledAll, setIsToggledAll] = useState(false)

  function toggleAll() {
    if (isToggledAll) {
      setSelectedIds([])
      setIsToggledAll(false)
    } else {
      setSelectedIds(employees.map((employee) => employee.id))
      setIsToggledAll(true)
    }
  }

  function toggleEmployee(employeeId: number) {
    if (selectedIds.includes(employeeId)) {
      setSelectedIds(selectedIds.filter((id) => id !== employeeId))
    } else {
      setSelectedIds([...selectedIds, employeeId])
    }
  }

  function isSelected(employeeId: number) {
    return selectedIds.includes(employeeId)
  }

  return {
    employees,
    selectedIds,
    isToggledAll,
    toggleAll,
    toggleEmployee,
    isSelected,
    ...rest,
  }
}
