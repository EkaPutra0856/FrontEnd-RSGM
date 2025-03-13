import Image from "next/image"
import Link from "next/link"
import { Menu } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}


      <main>
        {/* Hero Section */}
        <section className="relative h-screen bg-gray-900 text-white">
          <header className="sticky top-0 z-50 border-2 border-black shadow-sm">
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
              <div className="flex items-center">
                <button className="mr-3 md:hidden">
                  <Menu className="h-6 w-6" />
                </button>
                <Link href="/" className="flex items-center">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt="RSGM Soelastri Logo"
                    width={40}
                    height={40}
                    className="mr-2"
                  />
                  <span className="font-bold text-gray-800 hidden sm:inline-block">RSGM SOELASTRI</span>
                </Link>
              </div>
              <nav className="hidden md:flex items-center space-x-6">
                <Link href="/penelitian" className="text-gray-700 hover:text-blue-600">
                  Penelitian
                </Link>
                <Link href="/magang" className="text-gray-700 hover:text-blue-600">
                  Magang
                </Link>
                <Link
                  href="/login"
                  className="bg-white text-blue-600 border border-blue-600 px-4 py-1 rounded-md hover:bg-blue-50"
                >
                  Login
                </Link>
              </nav>
            </div>
          </header>
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/landing1.png"
              alt="Dental professional working"
              fill
              className="object-cover opacity-60"
              priority
            />
          </div>
          <div className="container flex justify-start items-end h-full mx-auto px-4 py-20 relative z-10">
            <div className="max-w-2xl">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Advancing Dental Excellence Through Innovation and Research
              </h1>
              <p className="text-lg mb-6">
                Membantu masa depan kesehatan gigi melalui penelitian inovatif dan pengembangan praktik yang bermakna
              </p>
              <Link
                href="/jelajahi"
                className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
              >
                Jelajahi lebih lanjut
              </Link>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-4">Tentang Kami, RSGM Soelastri</h2>
                <p className="text-gray-700 mb-4">
                  RSGM Soelastri, atau Rumah Sakit Gigi dan Mulut Soelastri, RSGM adalah pusat kesehatan gigi dan mulut
                  terpadu. Dengan lokasi strategis, fasilitas modern, dan dokter spesialis berpengalaman, kami
                  berkomitmen memberikan layanan terbaik. Sebagai bagian dari UMS, kami juga aktif dalam pendidikan
                  kedokteran gigi.
                </p>
              </div>
              <div className="relative h-64 md:h-80">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="RSGM Soelastri Building"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1 relative h-64 md:h-80">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="Dental Education"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-2xl font-bold mb-4">Tentang Pendidikan Penelitian dan Magang</h2>
                <p className="text-gray-700 mb-4">
                  RSGM berperan sebagai pusat penelitian dan pengembangan keilmuan di bidang kesehatan gigi dan mulut.
                  Kami mendukung penelitian inovatif serta menyediakan program magang bagi mahasiswa dan tenaga medis
                  untuk mendapatkan pengalaman langsung di lingkungan klinis.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Research Opportunities */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Jelajahi peluang penelitian dan magang bersama kami untuk berkontribusi dalam kemajuan dunia kedokteran
                gigi!
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white text-gray-800 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Penelitian Klinis</h3>
                <p className="text-gray-600">
                  Berfokus pada diagnosis, pencegahan, terapi, atau rehabilitasi, dengan data pasien langsung.
                </p>
              </div>

              <div className="bg-white text-gray-800 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Penelitian Non Klinis</h3>
                <p className="text-gray-600">
                  Dilakukan di ruangan selain ruang eksaminasi langsung dengan pasien, seperti laboratorium.
                </p>
              </div>

              <div className="bg-white text-gray-800 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Magang</h3>
                <p className="text-gray-600">
                  Kesempatan belajar langsung di lingkungan RSGM untuk meningkatkan keterampilan dan pengalaman
                  profesional.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">Keuntungan Bergabung di RSGM</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <h3 className="font-bold text-lg mb-2">Akses Fasilitas Medis Modern</h3>
                    <p className="text-gray-600">
                      Gunakan peralatan terlengkap di lingkungan rumah sakit dengan teknologi terkini.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <h3 className="font-bold text-lg mb-2">Bimbingan dari Profesional</h3>
                    <p className="text-gray-600">Dibimbing oleh tenaga ahli dan praktisi berpengalaman di bidangnya.</p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <h3 className="font-bold text-lg mb-2">Peluang Berkontribusi</h3>
                    <p className="text-gray-600">
                      Berperan dalam penelitian dan praktik yang berdampak nyata pada dunia.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Image
                  src="/placeholder.svg?height=250&width=250"
                  alt="Dental Professionals"
                  width={250}
                  height={250}
                  className="rounded-lg object-cover w-full h-full"
                />
                <Image
                  src="/placeholder.svg?height=250&width=250"
                  alt="Dental Professionals"
                  width={250}
                  height={250}
                  className="rounded-lg object-cover w-full h-full"
                />
                <Image
                  src="/placeholder.svg?height=250&width=250"
                  alt="Dental Professionals"
                  width={250}
                  height={250}
                  className="rounded-lg object-cover w-full h-full"
                />
                <Image
                  src="/placeholder.svg?height=250&width=250"
                  alt="Dental Professionals"
                  width={250}
                  height={250}
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Siap menjadi bagian dari inovasi dan pengembangan keilmuan di RSGM? Jelajahi lebih lanjut dan daftar
              sekarang!
            </h2>
            <Link
              href="/daftar"
              className="inline-flex items-center bg-white text-blue-700 px-6 py-3 rounded-md hover:bg-gray-100 transition-colors font-medium"
            >
              Daftar Sekarang
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Image
                src="/placeholder.svg?height=50&width=50"
                alt="RSGM Soelastri Logo"
                width={50}
                height={50}
                className="mr-3"
              />
              <div>
                <div className="font-bold text-lg">RSGM SOELASTRI</div>
                <div className="text-sm text-blue-200">Kesehatan Gigi • Riset • Pendidikan • Pengabdian</div>
              </div>
            </div>
            <div className="text-center md:text-right text-sm">
              <p>Jl. Raden Wijaya NO. 16A, Tegalsari, Surabaya</p>
              <p>Kota Surabaya, Indonesia</p>
              <p className="mt-2">Copyright 2023 - Lembaga Ilmu Bedah Mulut RSGM UMS FAKULTAS KEDOKTERAN</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

