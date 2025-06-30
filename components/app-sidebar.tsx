"use client"

import {
  LayoutDashboard,
  Snowflake,
  FileIcon as FileTransfer,
  Users,
  Calendar,
  Settings2 as Settings,
  Zap,
  ChevronRight,
} from "lucide-react"
import { usePathname, useRouter } from "next/navigation"
import { useEffect, useState } from "react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Separator } from "@radix-ui/react-separator"

const mainMenuItems = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "Cold Storage", url: "/cold-storage", icon: Snowflake },
  { title: "Sterling File Gateway", url: "/sterling-file-gateway", icon: FileTransfer },
  { title: "User Management", url: "/user-management", icon: Users },
  { title: "Scheduler", url: "/scheduler", icon: Calendar },
  { title: "Settings", url: "/settings", icon: Settings },
]

const preferenceMenuItem = {
  title: "Preference",
  url: "/preference",
  icon: Zap
}

export function AppSidebar() {
  const router = useRouter()
  const pathname = usePathname()
  const [currentPath, setCurrentPath] = useState("")

  useEffect(() => {
    setCurrentPath(pathname)
  }, [pathname])

  const renderMenuItem = (item: typeof mainMenuItems[0], showChevron: boolean = true) => {
    const isActive = currentPath === item.url

    return (
      <SidebarMenuItem key={item.title}>
        <SidebarMenuButton asChild>
          <button
            onClick={() => {
              setCurrentPath(item.url)
              router.push(item.url)
            }}
            className={`
              flex items-center justify-between w-full px-4 py-2 rounded-md transition-colors
              font-roboto font-normal text-base leading-[140%]
              ${isActive
                ? "bg-[#FFFFFF] text-[#121F33] hover:text-[#0d2b5c] hover:bg-[#FFFFFF]"
                : "text-[#FFFFFF] hover:bg-[#1E2C4C] hover:text-[#FFFFFF]"
              }
            `}
          >
            <div className="flex items-center gap-3">
              <item.icon className="h-5 w-5" />
              <span>{item.title}</span>
            </div>
            {showChevron && (
              <ChevronRight
                className={`h-4 w-4 ${isActive ? "text-[#121F33]" : "text-[#FFFFFF]"
                  }`}
              />
            )}
          </button>
        </SidebarMenuButton>
      </SidebarMenuItem>
    )
  }

  return (
    <Sidebar className="bg-[#121F33] text-[#FFFFFF] w-[275px] min-h-screen shadow-lg flex flex-col">
      {/* Header */}
      <SidebarHeader className="relative bg-[#121F33] py-2 flex items-center justify-center">
        {/* Centered Logo */}
        <img
          src="/Miracle-White-Logo.png"
          alt="EDI Portal"
          className="w-[145px] h-[56px] object-contain"
        />

        {/* Absolutely Positioned SidebarTrigger on the right */}
        <div className="absolute -right-7 top-1/2 -translate-y-1/2 pr-4">
          <SidebarTrigger className="ml-2 rounded-[15px] border border-[#E2E8F0] bg-[#FFFFFF] text-[#121F33]" />
        </div>
      </SidebarHeader>


      {/* Main Sidebar Content */}
      <SidebarContent className="bg-[#121F33] overflow-y-auto px-2 flex-1">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="mt-4 space-y-1">
              {mainMenuItems.map(item => renderMenuItem(item))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Bottom Preference Menu with Divider */}
      <div className="mt-auto">
        {/* <div className="" style={{ height:"1px", width:"10px", marginLeft:"10px" }}></div> */}
        <Separator className="SeparatorRoot" style={{ margin: "1px 0" }} />
        <SidebarGroup className="bg-[#121F33] px-2 pb-4">
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {renderMenuItem(preferenceMenuItem, false)}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </div>
    </Sidebar>
  )
}