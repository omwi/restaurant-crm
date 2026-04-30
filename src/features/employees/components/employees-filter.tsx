import { Input } from "@/components/ui/input"

export default function EmployeesFilter({
  filterText,
  onFilterChange,
}: {
  filterText: string
  onFilterChange: (text: string) => void
}) {
  return (
    <Input
      placeholder="Filter..."
      value={filterText}
      onChange={(e) => onFilterChange(e.target.value)}
    />
  )
}
