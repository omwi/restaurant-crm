import Container from "@/components/common/container"
import PageHeading from "@/components/common/page-heading"
import EmployeesStats from "@/features/employees/components/employees-stats"
import EmployeesTable from "@/features/employees/components/employees-table"

export default function EmployeesPage() {
  return (
    <Container className="items-start gap-6">
      <PageHeading title="Employees" />
      <EmployeesStats />
      <EmployeesTable />
    </Container>
  )
}
