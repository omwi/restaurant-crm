import { useMediaQuery } from "react-responsive"

import Container from "@/components/common/container"
import PageHeading from "@/components/common/page-heading"
import EmployeeCardsContainer from "@/features/employees/components/employee-cards-container"
import EmployeesStats from "@/features/employees/components/employees-stats"
import EmployeesTable from "@/features/employees/components/table/employees-table"

export default function EmployeesPage() {
  const isSmallScreen = useMediaQuery({ query: "(width < 768px)" })

  return (
    <Container className="items-start gap-6">
      <PageHeading title="Employees" />
      <EmployeesStats />
      {isSmallScreen ? <EmployeeCardsContainer /> : <EmployeesTable />}
    </Container>
  )
}
