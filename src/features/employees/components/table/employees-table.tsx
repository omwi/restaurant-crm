import { Table, TableBody, TableHeader } from "@/components/ui/table"

import { useEmployees } from "../../hooks/use-employees"
import EmployeeRow from "./employee-row"
import EmployeesTableHeader from "./employeed-table-header"

export default function EmployeesTable() {
  const { employees, isToggledAll, toggleAll, toggleEmployee, isSelected } =
    useEmployees()

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
