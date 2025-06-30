"use client"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Bell, Search, Subscript, Superscript, X } from "lucide-react"
import { useState } from "react"
import { Input } from "./ui/input"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"

export function DashboardHeader({ headerName }: any) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter(); // Initialize the router

  const handleProfileClick = () => {
    router.push('/profile'); // Navigate to profile page
  };
  return (
    <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4 bg-[#FFFFFF]" style={{ marginLeft: "20px" }}>
      {/* <SidebarTrigger className="-ml-3 bg-[#FFFFFF] z-[100] rounded-[15px] border border-[#E2E8F0]" /> */}
      <h1 className="font-roboto font-semibold text-[22px] leading-[50px] tracking-normal">
        {headerName}
      </h1>
      <div className="flex flex-1 items-center justify-end gap-2">
        <Input
          autoFocus
          placeholder="Search here"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="h-9 w-auto"
        />
        <Button variant="ghost" size="icon">
          <Bell className="h-4 w-4" />
          <span className="sr-only">Notifications</span>
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-8 w-8 rounded-full">
              {/* <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder-user.jpg" alt="User" />
                <AvatarFallback>AD</AvatarFallback>
              </Avatar> */}
              {/* <div className="relative w-[8px] h-[8px] rounded-full"> */}
              <Image
                src="/profilePic.jpg"
                alt="Profile Picture"
                layout="fill"
                objectFit="cover"
                className="relative w-[8px] h-[8px] rounded-full"
              />
              {/* </div> */}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">Admin User</p>
                <p className="text-xs leading-none text-muted-foreground">admin@mscvp.com</p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href="/user/profile" className="w-full">Profile</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
