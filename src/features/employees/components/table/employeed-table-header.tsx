import { Checkbox } from "@/components/ui/checkbox"
import { TableHead, TableRow } from "@/components/ui/table"

export default function EmployeesTableHeader({
  isToggledAll,
  toggleAll,
}: {
  isToggledAll: boolean
  toggleAll: () => void
}) {
  return (
    <TableRow>
      <TableHead>
        <Checkbox checked={isToggledAll} onCheckedChange={toggleAll} />
      </TableHead>
      <TableHead className="font-semibold text-muted-foreground">
        Employee
      </TableHead>
      <TableHead className="font-semibold text-muted-foreground">
        Shift
      </TableHead>
      <TableHead className="w-40 font-semibold text-muted-foreground">
        Employment Date
      </TableHead>
      <TableHead className="w-40 font-semibold text-muted-foreground">
        Billing Date
      </TableHead>
      <TableHead className="font-semibold text-muted-foreground">
        Bonus
      </TableHead>
    </TableRow>
  )
}
