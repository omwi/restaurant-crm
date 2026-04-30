import { Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { TableCell, TableRow } from "@/components/ui/table"
import { stampToDate } from "@/utils/date"

import type { Employee } from "../../types/types"
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
        <Checkbox checked={checked} onCheckedChange={toggle} />
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
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="secondary"
              className="size-8 rounded-full bg-accent"
            >
              <Plus />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Coffee</DropdownMenuItem>
            <DropdownMenuItem>Snickers</DropdownMenuItem>
            <DropdownMenuItem>Fire</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  )
}
