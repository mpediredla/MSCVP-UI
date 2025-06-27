import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardStats } from "@/components/dashboard-stats"
import { RecentActivity } from "@/components/recent-activity"
import { SystemStatus } from "@/components/system-status"

export default function Dashboard() {
  return (
    <div className="flex flex-col min-h-screen">
      <DashboardHeader />
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        </div>
        <div className="space-y-4">
          <DashboardStats />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <RecentActivity />
            <SystemStatus />
          </div>
        </div>
      </div>
    </div>
  )
}
