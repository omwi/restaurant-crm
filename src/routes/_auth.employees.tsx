import { createFileRoute } from "@tanstack/react-router"

import EmployeesPage from "@/app/pages/employees"

export const Route = createFileRoute("/_auth/employees")({
  component: EmployeesPage,
})
