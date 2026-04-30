import { Table, TableBody, TableHeader } from "@/components/ui/table"

import { useEmployeesTable } from "../../hooks/use-employees-table"
import EmployeeRow from "./employee-row"
import EmployeesTableHeader from "./employeed-table-header"

export default function EmployeesTable() {
  const { employees, isToggledAll, toggleAll, toggleEmployee, isSelected } =
    useEmployeesTable()

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
