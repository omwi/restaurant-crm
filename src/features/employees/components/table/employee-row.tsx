import { Checkbox } from "@/components/ui/checkbox"
import { TableCell, TableRow } from "@/components/ui/table"
import { stampToDate } from "@/utils/date"

import type { Employee } from "../../types/types"
import BonusActions from "../bonus-actions"
import EmployeeIdentityCard from "../employee-identity-card"
import ShiftBadge from "../shift-badge"

export default function EmployeeRow({
  employee,
  checked,
  toggle,
}: {
  employee: Employee
  checked: boolean
  toggle: () => void
}) {
  return (
    <TableRow>
      <TableCell>
        <Checkbox
          checked={checked}
          onCheckedChange={toggle}
          aria-label={`Select ${employee.lastName} ${employee.firstName}`}
        />
      </TableCell>
      <TableCell>
        <EmployeeIdentityCard employee={employee} />
      </TableCell>
      <TableCell>
        <ShiftBadge shift={employee.shift} />
      </TableCell>
      <TableCell>{stampToDate(employee.employmentDate)}</TableCell>
      <TableCell>{stampToDate(employee.billingDate)}</TableCell>
      <TableCell className="w-max">
        <BonusActions />
      </TableCell>
    </TableRow>
  )
}
