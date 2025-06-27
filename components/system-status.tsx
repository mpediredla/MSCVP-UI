import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, AlertCircle, XCircle } from "lucide-react"

export function SystemStatus() {
  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle>System Status</CardTitle>
        <CardDescription>Current status of all system components</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {[
            { service: "Cold Storage", status: "Operational", icon: CheckCircle, color: "text-green-500" },
            { service: "Sterling File Gateway", status: "Operational", icon: CheckCircle, color: "text-green-500" },
            { service: "User Management", status: "Operational", icon: CheckCircle, color: "text-green-500" },
            { service: "Scheduler", status: "Warning", icon: AlertCircle, color: "text-yellow-500" },
            { service: "Database", status: "Operational", icon: CheckCircle, color: "text-green-500" },
            { service: "Backup System", status: "Maintenance", icon: XCircle, color: "text-red-500" },
          ].map((service, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <service.icon className={`h-4 w-4 ${service.color}`} />
                <span className="text-sm font-medium">{service.service}</span>
              </div>
              <Badge
                variant={
                  service.status === "Operational"
                    ? "default"
                    : service.status === "Warning"
                      ? "secondary"
                      : "destructive"
                }
              >
                {service.status}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
