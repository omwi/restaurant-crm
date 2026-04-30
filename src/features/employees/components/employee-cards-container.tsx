import { Checkbox } from "@/components/ui/checkbox"
import { Field, FieldLabel } from "@/components/ui/field"

import { useEmployees } from "../hooks/use-employees"
import EmployeeCard from "./employee-card"

export default function EmployeeCardsContainer() {
  const { employees, toggleAll, isToggledAll, toggleEmployee, isSelected } =
    useEmployees()

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
