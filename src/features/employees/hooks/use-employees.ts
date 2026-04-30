import { useState } from "react"

import type { Employee } from "../types/types"
import { useEmployeesQuery } from "./use-employees-query"

export function useEmployees() {
  const { data: employees, ...rest } = useEmployeesQuery()
  const [selectedIds, setSelectedIds] = useState<number[]>([])
  const [isToggledAll, setIsToggledAll] = useState(false)
  const [filterText, setFilterText] = useState("")

  const filteredEmployees = employees.filter(satisfiesFilter)

  function toggleAll() {
    if (isToggledAll) {
      setSelectedIds([])
      setIsToggledAll(false)
    } else {
      setSelectedIds(filteredEmployees.map((employee) => employee.id))
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

  function satisfiesFilter(employee: Employee) {
    if (filterText === "") return true
    return (
      employee.firstName.toLowerCase().includes(filterText.toLowerCase()) ||
      employee.lastName.toLowerCase().includes(filterText.toLowerCase()) ||
      employee.email.toLowerCase().includes(filterText.toLowerCase())
    )
  }

  return {
    employees: filteredEmployees,
    selectedIds,
    isToggledAll,
    toggleAll,
    toggleEmployee,
    isSelected,
    filterText,
    setFilterText,
    ...rest,
  }
}
