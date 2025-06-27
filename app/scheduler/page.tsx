import { DashboardHeader } from "@/components/dashboard-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Play, Pause, Plus } from "lucide-react"

export default function Scheduler() {
  return (
    <div className="flex flex-col min-h-screen">
      <DashboardHeader />
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Scheduler</h2>
          <div className="flex items-center space-x-2">
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              New Task
            </Button>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Scheduled Tasks</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">47</div>
              <p className="text-xs text-muted-foreground">Total scheduled tasks</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Running Tasks</CardTitle>
              <Play className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-muted-foreground">Currently executing</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Completed Today</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">23</div>
              <p className="text-xs text-muted-foreground">Tasks completed today</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Failed Tasks</CardTitle>
              <Pause className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2</div>
              <p className="text-xs text-muted-foreground">Require attention</p>
            </CardContent>
          </Card>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Scheduled Tasks</CardTitle>
            <CardDescription>Manage your automated tasks and schedules</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  name: "Daily Backup",
                  schedule: "Every day at 2:00 AM",
                  status: "Running",
                  nextRun: "Tomorrow 2:00 AM",
                  type: "Backup",
                },
                {
                  name: "Weekly Report",
                  schedule: "Every Monday at 9:00 AM",
                  status: "Scheduled",
                  nextRun: "Monday 9:00 AM",
                  type: "Report",
                },
                {
                  name: "Data Sync",
                  schedule: "Every 4 hours",
                  status: "Completed",
                  nextRun: "In 2 hours",
                  type: "Sync",
                },
                {
                  name: "System Cleanup",
                  schedule: "Every Sunday at 3:00 AM",
                  status: "Failed",
                  nextRun: "Sunday 3:00 AM",
                  type: "Maintenance",
                },
                {
                  name: "File Archive",
                  schedule: "Every day at 11:00 PM",
                  status: "Scheduled",
                  nextRun: "Today 11:00 PM",
                  type: "Archive",
                },
              ].map((task, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center justify-center w-10 h-10 bg-muted rounded-lg">
                      <Clock className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="font-medium">{task.name}</p>
                      <p className="text-sm text-muted-foreground">{task.schedule}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline">{task.type}</Badge>
                    <Badge
                      variant={
                        task.status === "Running"
                          ? "default"
                          : task.status === "Completed"
                            ? "secondary"
                            : task.status === "Failed"
                              ? "destructive"
                              : "outline"
                      }
                    >
                      {task.status}
                    </Badge>
                    <p className="text-sm text-muted-foreground">{task.nextRun}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
