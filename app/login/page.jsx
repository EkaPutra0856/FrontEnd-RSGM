'use client'

import Image from "next/image"
import Link from "next/link"
import ComponentLogin from "@/component/login/login"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[#0360d9] flex items-center justify-center p-4">
      <div className="bg-white rounded-lg overflow-hidden w-full max-w-6xl flex flex-col md:flex-row shadow-xl">
        {/* Left side - Login Form */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          <div className="max-w-md mx-auto w-full">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">Selamat Datang</h1>
            <p className="text-gray-600 text-center mb-8">di login page RSGM Soelastri</p>

            <ComponentLogin/>

            <div className="mt-6 text-center text-sm">
              <p className="text-gray-600">
                Belum punya akun?{" "}
                <Link href="/register" className="text-[#0360d9] font-medium hover:underline">
                  Buat Akun
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Right side - Hospital Image */}
        <div className="hidden md:block md:w-1/2 relative">
          <Image
            src="/Right Side.svg"
            alt="RSGM Soelastri Building"
            width={800}
            height={900}
            className="object-cover h-full w-full"
            priority
          />
        </div>
      </div>
    </div>
  )
}

