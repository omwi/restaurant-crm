import { Avatar, AvatarImage } from "@/components/ui/avatar"

import type { Employee } from "../types/types"

export default function EmployeeIdentityCard({
  employee,
}: {
  employee: Employee
}) {
  return (
    <div className="flex flex-row items-center gap-2">
      <Avatar>
        <AvatarImage src={employee.avatarUrl} />
      </Avatar>
      <div className="flex flex-col gap-px">
        <p className="font-semibold">
          {employee.firstName} {employee.lastName}
        </p>
        <p className="text-muted-foreground">{employee.email}</p>
      </div>
    </div>
  )
}
