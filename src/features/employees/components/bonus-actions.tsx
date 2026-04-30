import { Plus } from "lucide-react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import type { Employee } from "../types/types"

export default function BonusActions({ employee }: { employee: Employee }) {
  const fullName = `${employee.firstName} ${employee.lastName}`

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="secondary"
          className="size-8 rounded-full bg-accent"
          aria-label="Show bonus actions"
        >
          <Plus />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => toast(`Coffee for ${fullName}`)}>
          Coffee
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => toast(`Snickers for ${fullName}`)}>
          Snickers
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => toast(`Fired ${fullName}`)}>
          Fire
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
