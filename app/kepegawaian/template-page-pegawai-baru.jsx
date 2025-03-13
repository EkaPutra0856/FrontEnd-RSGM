'use client'


import SidebarKepegawaian from "@/component/kepegawaian/sidebarKepegawaian";
import Header from "@/component/penelitian/header"
import { useState } from "react";


const Kepegawaian = () => {

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
                {<SidebarKepegawaian isSidebarOpen={isSidebarOpen} />}
                <main className="flex-1 p-4 md:p-6">

                </main>
            </div>

            <main className="flex-1 p-4 md:p-6 overflow-x-auto">

            </main>
        </div>



    )
}
export default Kepegawaian