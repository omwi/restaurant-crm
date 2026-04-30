import { Table, TableBody, TableHeader } from "@/components/ui/table"

import type { Employee } from "../../types/types"
import EmployeeRow from "./employee-row"
import EmployeesTableHeader from "./employeed-table-header"

export default function EmployeesTable({
  employees,
  isToggledAll,
  toggleAll,
  toggleEmployee,
  isSelected,
}: {
  employees: Employee[]
  isToggledAll: boolean
  toggleAll: () => void
  toggleEmployee: (employeeId: number) => void
  isSelected: (employeeId: number) => boolean
}) {
  return (
    <Table>
      <TableHeader>
        <EmployeesTableHeader
          isToggledAll={isToggledAll}
          toggleAll={toggleAll}
        />
      </TableHeader>
      <TableBody>
        {employees.map((employee) => (
          <EmployeeRow
            key={employee.id}
            employee={employee}
            checked={isSelected(employee.id)}
            toggle={() => toggleEmployee(employee.id)}
          />
        ))}
      </TableBody>
    </Table>
  )
}
