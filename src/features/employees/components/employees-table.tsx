import { useEmployees } from "../hooks/use-employees"

export default function EmployeesTable() {
  const { data: employees } = useEmployees()

  return <pre>{JSON.stringify(employees, null, 2)}</pre>
}
