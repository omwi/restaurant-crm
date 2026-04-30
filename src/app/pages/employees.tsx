import { useMediaQuery } from "react-responsive"

import Container from "@/components/common/container"
import PageHeading from "@/components/common/page-heading"
import EmployeeCardsContainer from "@/features/employees/components/employee-cards-container"
import EmployeesFilter from "@/features/employees/components/employees-filter"
import EmployeesStats from "@/features/employees/components/employees-stats"
import EmployeesTable from "@/features/employees/components/table/employees-table"
import { useEmployees } from "@/features/employees/hooks/use-employees"

export default function EmployeesPage() {
  const isSmallScreen = useMediaQuery({ query: "(width < 768px)" })

  const {
    employees,
    isToggledAll,
    toggleAll,
    toggleEmployee,
    isSelected,
    filterText,
    setFilterText,
  } = useEmployees()

  return (
    <Container className="items-start gap-6">
      <PageHeading title="Employees" />
      <EmployeesStats />
      <EmployeesFilter filterText={filterText} onFilterChange={setFilterText} />
      {isSmallScreen ? (
        <EmployeeCardsContainer
          employees={employees}
          isToggledAll={isToggledAll}
          toggleAll={toggleAll}
          toggleEmployee={toggleEmployee}
          isSelected={isSelected}
        />
      ) : (
        <EmployeesTable
          employees={employees}
          isToggledAll={isToggledAll}
          toggleAll={toggleAll}
          toggleEmployee={toggleEmployee}
          isSelected={isSelected}
        />
      )}
    </Container>
  )
}
