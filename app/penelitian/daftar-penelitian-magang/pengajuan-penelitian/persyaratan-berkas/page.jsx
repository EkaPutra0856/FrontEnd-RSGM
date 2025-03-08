'use client'
import Image from "next/image"



import SidebarPenelitian from "@/component/penelitian/sidebarPenelitian"

import { useState } from "react";
import Header from "@/component/penelitian/header";
import Footer from "@/component/footer";
import ComponentPersyaratanBerkas from "@/component/penelitian/daftar-penelitian-magang/pengajuan-penelitian/persyaratan-berkas/persyaratan-berkas-penelitian";

const PagePersyaratanBerkas =()=>{

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header toggleSidebar={toggleSidebar} />


      {/* Main Content */}
      <div className="flex flex-1 flex-col md:flex-row">
        {<SidebarPenelitian isSidebarOpen={isSidebarOpen} />}
        <main className="flex-1 p-4 md:p-6">
          <ComponentPersyaratanBerkas />
        </main>
      </div>
      <Footer/>



      
    </div>
  )
}

export default PagePersyaratanBerkas
