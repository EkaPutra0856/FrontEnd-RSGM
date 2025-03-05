'use client'
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const SidebarKepegawaian = () => {
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
                            <span className="text-[#171717]">Kepegawaian</span>
                        </div>
                        <ChevronDown className="w-4 h-4" />
                    </div>
                    <div className={`ml-4 mt-1 transition-all duration-1000 ease-in-out ${isOpen[0] ? 'opacity-100 max-h-screen' : 'opacity-0 max-h-0 overflow-hidden'}`}>
                        <div className="p-2 hover:bg-[#e1eeff] cursor-pointer">Data Pegawai</div>
                        <div className="p-2 hover:bg-[#e1eeff] cursor-pointer">Pegawai Cuti & Izin</div>
                        <div className="p-2 hover:bg-[#e1eeff] cursor-pointer">Rekapitulasi Presensi</div>
                        <div className="p-2 hover:bg-[#e1eeff] cursor-pointer">Jadwal Kerja & Shift</div>
                    </div>
                </div>

                <div className="border-b py-2">
                    <div onClick={() => handleToggleSidebar(1)} className="flex items-center justify-between p-2 cursor-pointer">
                        <div className="flex items-center gap-2">
                            <span className="text-[#171717]">Dokumen Kepegawaian</span>
                        </div>
                        <ChevronDown className="w-4 h-4" />
                    </div>
                    <div className={`ml-4 mt-1 transition-all duration-1000 ease-in-out ${isOpen[1] ? 'opacity-100 max-h-screen' : 'opacity-0 max-h-0 overflow-hidden'}`}>
                        <div className="p-2 hover:bg-[#e1eeff] cursor-pointer">SK Pegawai, Kontrak Kerja</div>
                        <div className="p-2 hover:bg-[#e1eeff] cursor-pointer">Laporan & Evaluasi Kinerja</div>
                    </div>
                </div>

                <div className="border-b py-2">
                    <div onClick={() => handleToggleSidebar(2)} className="flex items-center justify-between p-2 cursor-pointer">
                        <div className="flex items-center gap-2">
                            <span className="text-[#171717]">Presensi & Absensi</span>
                        </div>
                        <ChevronDown className="w-4 h-4" />
                    </div>
                    <div className={`ml-4 mt-1 transition-all duration-1000 ease-in-out ${isOpen[2] ? 'opacity-100 max-h-screen' : 'opacity-0 max-h-0 overflow-hidden'}`}>
                        <div className="p-2 hover:bg-[#e1eeff] cursor-pointer">Laporan Harian/Mingguan</div>
                        <div className="p-2 hover:bg-[#e1eeff] cursor-pointer">Integrasi RFID</div>
                    </div>
                </div>

                <div className="border-b py-2">
                    <div onClick={() => handleToggleSidebar(3)} className="flex items-center justify-between p-2 cursor-pointer">
                        <div className="flex items-center gap-2">
                            <span className="text-[#171717]">Manajemen Pendidikan & Penelitian</span>
                        </div>
                        <ChevronDown className="w-4 h-4" />
                    </div>
                    <div className={`ml-4 mt-1 transition-all duration-1000 ease-in-out ${isOpen[3] ? 'opacity-100 max-h-screen' : 'opacity-0 max-h-0 overflow-hidden'}`}>
                        <div className="p-2 hover:bg-[#e1eeff] cursor-pointer">Jadwal Pelatihan/Diklat</div>
                        <div className="p-2 hover:bg-[#e1eeff] cursor-pointer">Data Penelitian & Publikasi</div>
                        <div className="p-2 hover:bg-[#e1eeff] cursor-pointer">Sertifikasi Pegawai</div>
                    </div>
                </div>

                <div className="border-b py-2">
                    <div onClick={() => handleToggleSidebar(4)} className="flex items-center justify-between p-2 cursor-pointer">
                        <div className="flex items-center gap-2">
                            <span className="text-[#171717]">Manajemen Mahasiswa Magang</span>
                        </div>
                        <ChevronDown className="w-4 h-4" />
                    </div>
                    <div className={`ml-4 mt-1 transition-all duration-1000 ease-in-out ${isOpen[4] ? 'opacity-100 max-h-screen' : 'opacity-0 max-h-0 overflow-hidden'}`}>
                        <div className="p-2 hover:bg-[#e1eeff] cursor-pointer">Data Mahasiswa Magang</div>
                        <div className="p-2 hover:bg-[#e1eeff] cursor-pointer">Evaluasi & Laporan Magang</div>
                        <div className="p-2 hover:bg-[#e1eeff] cursor-pointer">Surat Izin Magang</div>
                    </div>
                </div>

                <div className="border-b py-2">
                    <div onClick={() => handleToggleSidebar(5)} className="flex items-center justify-between p-2 cursor-pointer">
                        <div className="flex items-center gap-2">
                            <span className="text-[#171717]">Laporan & Statistik</span>
                        </div>
                        <ChevronDown className="w-4 h-4" />
                    </div>
                    <div className={`ml-4 mt-1 transition-all duration-1000 ease-in-out ${isOpen[5] ? 'opacity-100 max-h-screen' : 'opacity-0 max-h-0 overflow-hidden'}`}>
                        <div className="p-2 hover:bg-[#e1eeff] cursor-pointer">Statistik Kepegawaian</div>
                        <div className="p-2 hover:bg-[#e1eeff] cursor-pointer">Statistik Mahasiswa Magang</div>
                        <div className="p-2 hover:bg-[#e1eeff] cursor-pointer">Grafik Performa Pegawai</div>
                    </div>
                </div>

                <div className="py-2">
                    <div onClick={() => handleToggleSidebar(6)} className="flex items-center justify-between p-2 cursor-pointer">
                        <div className="flex items-center gap-2">
                            <span className="text-[#171717]">User Management & Roles</span>
                        </div>
                        <ChevronDown className="w-4 h-4" />
                    </div>
                    <div className={`ml-4 mt-1 transition-all duration-1000 ease-in-out ${isOpen[6] ? 'opacity-100 max-h-screen' : 'opacity-0 max-h-0 overflow-hidden'}`}>
                        <div className="p-2 hover:bg-[#e1eeff] cursor-pointer">Role Setting</div>
                        <div className="p-2 hover:bg-[#e1eeff] cursor-pointer">Data Penelitian & Publikasi</div>
                        <div className="p-2 hover:bg-[#e1eeff] cursor-pointer">Sertifikasi Pegawai</div>
                    </div>
                </div>
            </nav>
        </aside>
    );
}

export default SidebarKepegawaian;