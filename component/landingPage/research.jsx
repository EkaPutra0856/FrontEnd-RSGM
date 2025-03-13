import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Youtube, MessageCircle } from "lucide-react"

export default function ResearchOpportunities() {
  return (
    <div className="font-sans">
      {/* Research Opportunities Section */}
      <section className="py-12 bg-[#0360d9] text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
            Jelajahi peluang penelitian dan magang bersama kami untuk berkontribusi dalam kemajuan dunia kedokteran
            gigi!
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white text-black p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-3">Penelitian Klinis</h3>
              <p className="text-gray-800">
                Berfokus pada diagnosis, pencegahan, terapi, atau rehabilitasi, dengan atau tanpa subjek manusia.
              </p>
            </div>

            <div className="bg-white text-black p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-3">Penelitian Non Klinis</h3>
              <p className="text-gray-800">
                Dilakukan di rumah sakit tanpa keterkaitan langsung dengan diagnosis, terapi, atau rehabilitasi.
              </p>
            </div>

            <div className="bg-white text-black p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-3">Magang</h3>
              <p className="text-gray-800">
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
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold mb-8">Keuntungan Bergabung di RSGM</h2>

              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <h3 className="font-bold text-xl mb-2">Akses Fasilitas Medis Modern</h3>
                  <p className="text-gray-700">
                    Dapatkan pengalaman langsung di lingkungan rumah sakit dengan teknologi terbaru.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <h3 className="font-bold text-xl mb-2">Bimbingan dari Profesional</h3>
                  <p className="text-gray-700">Dibimbing oleh tenaga ahli dan praktisi berpengalaman di bidangnya.</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <h3 className="font-bold text-xl mb-2">Peluang Berkontribusi</h3>
                  <p className="text-gray-700">
                    Berperan dalam penelitian dan praktik yang berdampak nyata pada dunia kesehatan.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/web_design_RSGM_Soealastri__Copy_.png-E43VjTyyOs2PNiaRB9hPkZO5camj1b.jpeg"
                  alt="Medical professionals"
                  width={600}
                  height={350}
                  className="rounded-lg object-cover w-full h-auto"
                />
              </div>
              <Image
                src="/placeholder.svg?height=200&width=300"
                alt="Medical consultation"
                width={300}
                height={200}
                className="rounded-lg object-cover w-full h-full"
              />
              <Image
                src="/placeholder.svg?height=200&width=300"
                alt="Medical consultation"
                width={300}
                height={200}
                className="rounded-lg object-cover w-full h-full"
              />
              <Image
                src="/placeholder.svg?height=200&width=300"
                alt="Medical discussion"
                width={300}
                height={200}
                className="rounded-lg object-cover w-full h-full"
              />
              <Image
                src="/placeholder.svg?height=200&width=300"
                alt="Medical discussion"
                width={300}
                height={200}
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#0360d9] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            Siap menjadi bagian dari inovasi dan pengembangan keilmuan di RSGM? Jelajahi lebih lanjut dan daftar
            sekarang!
          </h2>
          <Link
            href="/daftar"
            className="inline-block bg-white text-[#0360d9] px-8 py-3 rounded-md hover:bg-gray-100 transition-colors font-bold text-lg"
          >
            Daftar Sekarang
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0360d9] text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <div className="flex items-center mb-4 md:mb-0">
              <Image
                src="/placeholder.svg?height=60&width=60"
                alt="RSGM Soelastri Logo"
                width={60}
                height={60}
                className="mr-3"
              />
              <div>
                <div className="font-bold text-xl">RSGM SOELASTRI</div>
                <div className="text-sm text-blue-200">Sejahtera - Maju - Islami - Loyal - Empati</div>
              </div>
            </div>
            <div className="flex space-x-4">
              <Link href="#" className="text-white hover:text-blue-200">
                <Facebook size={24} />
              </Link>
              <Link href="#" className="text-white hover:text-blue-200">
                <Instagram size={24} />
              </Link>
              <Link href="#" className="text-white hover:text-blue-200">
                <Youtube size={24} />
              </Link>
              <Link href="#" className="text-white hover:text-blue-200">
                <MessageCircle size={24} />
              </Link>
            </div>
          </div>
          <div className="text-center md:text-right text-sm">
            <p>Jl. Slamet Riyadi NO. 366, Purwosari, Laweyan, Kota Surakarta, Jawa Tengah 57141</p>
            <p className="mt-2">Copyright 2023 - Lembaga dan Bentuk Lainnya RUMAH SAKIT GIGI DAN MULUT SOELASTRI</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

