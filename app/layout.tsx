// app/layout.tsx (DO NOT use "use client" here)
import { Inter } from "next/font/google"
import "./globals.css"
import type { Metadata } from "next"
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import ThemeInitializer from "@/components/ui/theme-initializer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MSCVP",
  description: "MSCVP Dashboard Application",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <div className="bg-[black] text-white p-4 rounded shadow">
          This background color changes every refresh
        </div> */}
        <SidebarProvider>
          <AppSidebar />
          <main className="flex-1 overflow-auto bg-background text-text p-4">
            {children}
          </main>
        </SidebarProvider>
      </body>
    </html>
  )
}