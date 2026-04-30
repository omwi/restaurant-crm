import TitledRow from "@/components/common/titled-row"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { stampToDate } from "@/utils/date"

import type { Employee } from "../types/types"
import BonusActions from "./bonus-actions"
import EmployeeIdentityCard from "./employee-identity-card"
import ShiftBadge from "./shift-badge"

export default function EmployeeCard({
  employee,
  checked,
  toggle,
}: {
  employee: Employee
  checked: boolean
  toggle: () => void
}) {
  return (
    <Card>
      <CardHeader>
        <EmployeeIdentityCard employee={employee} />
      </CardHeader>
      <Separator />
      <CardContent className="flex flex-col gap-2">
        <TitledRow title="Employment Date">
          <span>{stampToDate(employee.employmentDate)}</span>
        </TitledRow>
        <TitledRow title="Billing Date">
          <span>{stampToDate(employee.billingDate)}</span>
        </TitledRow>
        <TitledRow title="Shift">
          <ShiftBadge shift={employee.shift} />
        </TitledRow>
      </CardContent>
      <CardFooter className="justify-end gap-4">
        <Checkbox
          checked={checked}
          onCheckedChange={toggle}
          className="size-6"
          aria-label={`Select ${employee.lastName} ${employee.firstName}`}
        />
        <BonusActions />
      </CardFooter>
    </Card>
  )
}
