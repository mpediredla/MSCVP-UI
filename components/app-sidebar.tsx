import {
  LayoutDashboard,
  Snowflake,
  FileIcon as FileTransfer,
  Users,
  Calendar,
  Settings2 as Settings,
  Zap,
} from "lucide-react"
import Link from "next/link"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const menuItems = [
  {
    title: "Dashboard",
    url: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Cold Storage",
    url: "/cold-storage",
    icon: Snowflake,
  },
  {
    title: "Sterling File Gateway",
    url: "/sterling-file-gateway",
    icon: FileTransfer,
  },
  {
    title: "User Management",
    url: "/user-management",
    icon: Users,
  },
  {
    title: "Scheduler",
    url: "/scheduler",
    icon: Calendar,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
  {
    title: "Preference",
    url: "/preference",
    icon: Zap,
  },
]

export function AppSidebar() {
  return (
    <Sidebar className="bg-[#121F33]" >
      <SidebarHeader className="bg-[#121F33]">
        <div className="flex items-center justify-center px-4 py-4">
          <span className="font-bold text-2xl text-gray-800">MIRACLE</span>
        </div>
      </SidebarHeader>
      <SidebarContent className="bg-[#121F33]">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="hover:bg-gray-100">
                    <Link href={item.url} className="text-gray-700 bg-[#FFFFFF]">
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}