import { createFileRoute } from "@tanstack/react-router"

import EmployeesPage from "@/app/pages/employees"

export const Route = createFileRoute("/employees")({
  component: EmployeesPage,
})
