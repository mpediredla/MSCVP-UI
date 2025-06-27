import { DashboardHeader } from "@/components/dashboard-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FileText, Send, ReceiptIcon as Receive, Clock } from "lucide-react"

export default function SterlingFileGateway() {
  return (
    <div className="flex flex-col min-h-screen">
      <DashboardHeader />
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Sterling File Gateway</h2>
          <div className="flex items-center space-x-2">
            <Button>
              <Send className="mr-2 h-4 w-4" />
              Send File
            </Button>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Files Sent</CardTitle>
              <Send className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,247</div>
              <p className="text-xs text-muted-foreground">+12% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Files Received</CardTitle>
              <Receive className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">892</div>
              <p className="text-xs text-muted-foreground">+8% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Transfers</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">23</div>
              <p className="text-xs text-muted-foreground">In queue</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Gateway Status</CardTitle>
              <div className="h-2 w-2 bg-green-500 rounded-full" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Online</div>
              <p className="text-xs text-muted-foreground">All connections active</p>
            </CardContent>
          </Card>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Recent File Transfers</CardTitle>
            <CardDescription>Latest file transfer activities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "invoice_2024_001.pdf", status: "Completed", time: "2 minutes ago", type: "Sent" },
                { name: "customer_data.xlsx", status: "In Progress", time: "5 minutes ago", type: "Received" },
                { name: "report_q4.docx", status: "Completed", time: "10 minutes ago", type: "Sent" },
                { name: "backup_files.zip", status: "Failed", time: "15 minutes ago", type: "Sent" },
              ].map((transfer, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-4">
                    <FileText className="h-8 w-8 text-muted-foreground" />
                    <div>
                      <p className="font-medium">{transfer.name}</p>
                      <p className="text-sm text-muted-foreground">{transfer.time}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant={transfer.type === "Sent" ? "default" : "secondary"}>{transfer.type}</Badge>
                    <Badge
                      variant={
                        transfer.status === "Completed"
                          ? "default"
                          : transfer.status === "In Progress"
                            ? "secondary"
                            : "destructive"
                      }
                    >
                      {transfer.status}
                    </Badge>
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
