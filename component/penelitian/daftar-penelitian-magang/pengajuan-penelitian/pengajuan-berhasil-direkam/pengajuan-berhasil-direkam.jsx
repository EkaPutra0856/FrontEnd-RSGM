"use client"

import { CheckCircle } from "lucide-react"
import { useRouter } from "next/navigation"

const ComponentPengajuanBerhasil =() =>{
  const router = useRouter()

  const handleCheckApplication = () => {
    // Navigate to the application progress page
    router.push("/application-progress")
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="border border-gray-200 rounded-lg p-8 shadow-sm">
        <div className="flex flex-col items-center mb-6">
          <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
          <h1 className="text-3xl font-bold text-[#0360d9] text-center">Pengajuan Penelitian Anda Berhasil di rekam</h1>
        </div>

        <p className="text-lg text-center mb-8">
          Untuk Melihat Progres pengajuan Penelitian anda silahkan tekan tombol dibawha ini
        </p>

        <div className="flex justify-center">
          <button
            onClick={handleCheckApplication}
            className="px-6 py-3 bg-[#0360d9] text-white rounded font-medium hover:bg-blue-700 transition-colors"
          >
            Periksa Pengajuan
          </button>
        </div>
      </div>
    </div>
  )
}

export default ComponentPengajuanBerhasil