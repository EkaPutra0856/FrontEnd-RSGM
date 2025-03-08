'use client'
import Footer from "@/component/footer";
import Header from "@/component/penelitian/header"
import ComponentGantiKatasandi from "@/component/penelitian/profile/ganti-katasandi";



import SidebarPenelitian from "@/component/penelitian/sidebarPenelitian"


import { useState } from "react";


    const PageGantiKatasandi = () => {

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
                <main className="flex-1 p-4 md:p-6 bg-white">
                    <ComponentGantiKatasandi />
                </main>
            </div>

            <Footer/>


        </div>
    )

}
export default PageGantiKatasandi

