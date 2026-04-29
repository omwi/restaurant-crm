import { useEmployeesStats } from "../hooks/use-employees-stats"
import StatCard from "./stat-card"

export default function EmployeesStats() {
  const { total, active, idle } = useEmployeesStats()

  return (
    <div className="flex flex-1 flex-row flex-wrap gap-4 self-stretch">
      <StatCard title="Total" count={total} className="flex-1" />
      <StatCard title="Active" count={active} className="flex-1" />
      <StatCard title="Idle" count={idle} className="flex-1" />
    </div>
  )
}
