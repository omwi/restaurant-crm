import { Checkbox } from "@/components/ui/checkbox"
import { Field, FieldLabel } from "@/components/ui/field"

import type { Employee } from "../types/types"
import EmployeeCard from "./employee-card"

export default function EmployeeCardsContainer({
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
    <div className="flex w-full flex-col gap-2">
      <div className="w-fit self-end">
        <Field orientation="horizontal">
          <Checkbox
            id="toggle-all"
            checked={isToggledAll}
            onCheckedChange={toggleAll}
          />
          <FieldLabel htmlFor="toggle-all">Toggle Everyone</FieldLabel>
        </Field>
      </div>

      <div className="grid w-full grid-cols-1 gap-2 sm:grid-cols-2">
        {employees.map((employee) => (
          <EmployeeCard
            key={employee.id}
            employee={employee}
            checked={isSelected(employee.id)}
            toggle={() => toggleEmployee(employee.id)}
          />
        ))}
      </div>
    </div>
  )
}
