import { Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function BonusActions() {
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
        <DropdownMenuItem>Coffee</DropdownMenuItem>
        <DropdownMenuItem>Snickers</DropdownMenuItem>
        <DropdownMenuItem>Fire</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
