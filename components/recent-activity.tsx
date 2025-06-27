import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function RecentActivity() {
  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Latest system activities and user actions</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {[
            {
              user: "John Smith",
              action: "uploaded 15 pictures to Cold Storage",
              time: "2 minutes ago",
              avatar: "JS",
            },
            {
              user: "Sarah Johnson",
              action: "completed file transfer via Sterling Gateway",
              time: "5 minutes ago",
              avatar: "SJ",
            },
            {
              user: "Mike Wilson",
              action: "scheduled new backup task",
              time: "10 minutes ago",
              avatar: "MW",
            },
            {
              user: "Emily Davis",
              action: "updated user permissions",
              time: "15 minutes ago",
              avatar: "ED",
            },
            {
              user: "System",
              action: "automated backup completed successfully",
              time: "30 minutes ago",
              avatar: "SY",
            },
          ].map((activity, index) => (
            <div key={index} className="flex items-center">
              <Avatar className="h-9 w-9">
                <AvatarImage src="/placeholder-user.jpg" alt="Avatar" />
                <AvatarFallback>{activity.avatar}</AvatarFallback>
              </Avatar>
              <div className="ml-4 space-y-1">
                <p className="text-sm font-medium leading-none">{activity.user}</p>
                <p className="text-sm text-muted-foreground">{activity.action}</p>
              </div>
              <div className="ml-auto font-medium text-sm text-muted-foreground">{activity.time}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
