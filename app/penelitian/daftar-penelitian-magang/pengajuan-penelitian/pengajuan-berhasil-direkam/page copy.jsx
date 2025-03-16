"use client";

import { AppSidebar } from "@/component/app-sidebar";
import ComponentPengajuanBerhasil from "@/component/penelitian/daftar-penelitian-magang/pengajuan-penelitian/pengajuan-berhasil-direkam/pengajuan-berhasil-direkam";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
// import { AppSidebar } from "@/components/app-sidebar2"
import Image from "next/image";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <SidebarProvider>
        <div className="flex flex-col w-full flex-1">
          <header className="bg-black top-0 z-50 flex h-16 items-center border-b bg-background px-4 shadow-sm justify-between">
            <div className="flex items-center gap-4">
              <SidebarTrigger className="mr-2" />
              <div className="flex items-center gap-3 cursor-pointer">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="RSGM Soelastri Logo"
                  width={40}
                  height={40}
                  className="rounded-full bg-white p-1"
                />
                <div>
                  <h1 className="font-bold text-lg md:text-xl">
                    RSGM SOELASTRI
                  </h1>
                  <p className="text-xs md:text-sm">
                    Sejahtera - Maju - Islami - Loyal - Empati
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white text-[#0360d9] rounded-full px-4 py-2">
              <p className="text-sm font-medium">Hello</p>
              <p className="font-bold">Danang Aprianto</p>
            </div>
          </header>

          <div className="flex flex-1">
            <AppSidebar/>
            {/* <AppSidebar className="h-full min-h-screen border-r bg-amber-300 flex flex-col" /> */}
            <SidebarInset className="flex flex-col flex-1 h-full overflow-hidden">
              <div className="flex h-12 items-center border-b px-4">
                <h2 className="text-lg font-medium">Dashboard</h2>
              </div>
              <div className="p-4 flex-1 overflow-auto">
                <ComponentPengajuanBerhasil className="h-full w-full" />
              </div>
            </SidebarInset>
          </div>
        </div>

        <footer className="bg-black flex h-16 items-center border-t  pt-4 shadow-sm justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/placeholder.svg?height=32&width=32"
              alt="RSGM Soelastri Logo"
              width={32}
              height={32}
              className="rounded-full bg-white p-1"
            />
            <div>
              <p className="text-xs md:text-sm font-medium">
                © 2025 RSGM Soelastri
              </p>
              <p className="text-xs text-muted-foreground">
                All rights reserved
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="text-xs md:text-sm hover:text-primary">
              Privacy Policy
            </a>
            <a href="#" className="text-xs md:text-sm hover:text-primary">
              Terms of Service
            </a>
            <a href="#" className="text-xs md:text-sm hover:text-primary">
              Contact
            </a>
          </div>
        </footer>
      </SidebarProvider>
    </div>
  );
}
