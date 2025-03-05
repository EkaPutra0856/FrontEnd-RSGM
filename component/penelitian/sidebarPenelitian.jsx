'use client'
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const SidebarPenelitian = () => {
    const [isOpen, setOpen] = useState([false, false, false, false, false, false, false])
    const handleToggleSidebar = (target) => {
        setOpen(isOpen.map((item, index) => index === target ? !item : item));
    };

    return (
        <aside className="w-64 border-r hidden lg:block">
            <nav className="p-2">
                <div className="border-b pb-2">
                    <div onClick={() => handleToggleSidebar(0)} className="flex items-center justify-between p-2 cursor-pointer">
                        <div className="flex items-center gap-2">
                            <span className="text-[#171717]">Pendidikan dan Penelitian</span>
                        </div>
                        <ChevronDown className="w-4 h-4" />
                    </div>
                    <div className={`ml-4 mt-1 transition-all duration-1000 ease-in-out ${isOpen[0] ? 'opacity-100 max-h-screen' : 'opacity-0 max-h-0 overflow-hidden'}`}>
                        <div className="p-2 hover:bg-[#e1eeff] cursor-pointer">Tata Cara dab Pengajuan Izin Penelitian</div>
                        <div className="p-2 hover:bg-[#e1eeff] cursor-pointer">Jenis dan Dokumen Penelitian</div>
                        <div className="p-2 hover:bg-[#e1eeff] cursor-pointer">Penelitian Klinis</div>
                        <div className="p-2 hover:bg-[#e1eeff] cursor-pointer">Penelitian Non Klinis</div>
                    </div>
                </div>

                <div className="border-b py-2">
                    <div onClick={() => handleToggleSidebar(1)} className="flex items-center justify-between p-2 cursor-pointer">
                        <div className="flex items-center gap-2">
                            <span className="text-[#171717]">Mahasiswa Magang</span>
                        </div>
                        <ChevronDown className="w-4 h-4" />
                    </div>
                    <div className={`ml-4 mt-1 transition-all duration-1000 ease-in-out ${isOpen[1] ? 'opacity-100 max-h-screen' : 'opacity-0 max-h-0 overflow-hidden'}`}>
                        <div className="p-2 hover:bg-[#e1eeff] cursor-pointer">Data Mahasiswa Magang</div>
                        <div className="p-2 hover:bg-[#e1eeff] cursor-pointer">Evaluasi dan Laporan Magang</div>
                        <div className="p-2 hover:bg-[#e1eeff] cursor-pointer">Surat Izin Magang</div>
                    </div>
                </div>

                <div className="border-b py-2">
                    <div onClick={() => handleToggleSidebar(2)} className="flex items-center justify-between p-2 cursor-pointer">
                        <div className="flex items-center gap-2">
                            <span className="text-[#171717]">Daftar Penelitian dan Magang</span>
                        </div>
                        <ChevronDown className="w-4 h-4" />
                    </div>
                    <div className={`ml-4 mt-1 transition-all duration-1000 ease-in-out ${isOpen[2] ? 'opacity-100 max-h-screen' : 'opacity-0 max-h-0 overflow-hidden'}`}>
                        <div className="p-2 hover:bg-[#e1eeff] cursor-pointer">Pengajuan Penelitian</div>
                        <div className="p-2 hover:bg-[#e1eeff] cursor-pointer">Pengajuan Magang</div>
                        <div className="p-2 hover:bg-[#e1eeff] cursor-pointer">Proses Pengajuan</div>
                        <div className="p-2 hover:bg-[#e1eeff] cursor-pointer">Berkas Laporan Penelitian</div>
                    </div>
                </div>

                <div className="border-b py-2">
                    <div onClick={() => handleToggleSidebar(3)} className="flex items-center justify-between p-2 cursor-pointer">
                        <div className="flex items-center gap-2">
                            <span className="text-[#171717]">Profil Pribadi</span>
                        </div>
                        <ChevronDown className="w-4 h-4" />
                    </div>
                    <div className={`ml-4 mt-1 transition-all duration-1000 ease-in-out ${isOpen[3] ? 'opacity-100 max-h-screen' : 'opacity-0 max-h-0 overflow-hidden'}`}>
                        <div className="p-2 hover:bg-[#e1eeff] cursor-pointer">Profil</div>
                        <div className="p-2 hover:bg-[#e1eeff] cursor-pointer">Ubah Biodata</div>
                        <div className="p-2 hover:bg-[#e1eeff] cursor-pointer">Ganti Kata Sandi</div>
                        <div className="p-2 hover:bg-[#e1eeff] cursor-pointer">Keluar Akun</div>
                    </div>
                </div>

                
            </nav>
        </aside>
    );
}

export default SidebarPenelitian;