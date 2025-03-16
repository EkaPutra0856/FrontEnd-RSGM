'use client'
import Image from "next/image";
import Link from "next/link";

const ComponentLandingpage = () => {
  
  return (
    <div className="min-h-screen flex flex-col">
{/* Header */}
<header className="bg-transparent fixed top-0 w-full z-50">
  <div className="container mx-auto px-6 py-4 flex justify-between items-center">
    {/* Logo & Menu Button */}
    <div className="flex items-center gap-4">
      {/* Menu Button */}
      <button className="text-white md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>

      {/* Logo */}
      <Link href="/" className="flex items-center gap-3">
        <Image
          src="/logo.svg"
          alt="RSGM Soelastri Logo"
          width={50}
          height={50}
          className="rounded-full bg-[#0360d9] p-1"
        />
        <div>
          <h1 className="font-bold text-xl text-white">
            RSGM SOELASTRI
          </h1>
          <p className="text-sm text-gray-300">
            Sejahtera - Maju - Islami - Loyal - Empati
          </p>
        </div>
      </Link>
    </div>

    {/* Navigation */}
    <div className="hidden md:flex items-center gap-10">
      <nav className="flex gap-8">
        <Link
          href="/penelitian"
          className="font-medium text-white text-lg hover:text-[#0360d9] transition-colors"
        >
          Penelitian
        </Link>
        <Link
          href="/magang"
          className="font-medium text-white text-lg hover:text-[#0360d9] transition-colors"
        >
          Magang
        </Link>
      </nav>
      <Link
        href="/login"
        className="bg-white text-black px-8 py-3 rounded-full font-medium border border-gray-200 hover:bg-gray-100 transition-colors"
      >
        Login
      </Link>
    </div>
  </div>
</header>

{/* Hero Section */}
<section className="relative h-[700px] md:h-[1400px] w-full">
  <div className="relative h-full w-full border border-red-500">
    <Image
      src="/images/landing1.png"
      alt="Dental professional working"
      fill
      className="object-cover opacity-60 z-5"
      priority
    />
  </div>

  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
    <div className="container mx-auto px-6 h-full flex flex-col justify-center">
      <div className="max-w-4xl text-white text-center md:text-left z-10">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight">
          Advancing Dental Excellence Through Innovation and Research
        </h1>
        <p className="text-2xl md:text-3xl mb-12 leading-relaxed">
          Membentuk masa depan kesehatan gigi melalui penelitian inovatif
          dan pengalaman praktis yang bermakna
        </p>
        <Link
          href="/about"
          className="inline-block bg-[#0360d9] text-white text-lg md:text-2xl px-10 py-4 rounded-full font-semibold hover:bg-blue-700 transition-colors"
        >
          Jelajahi lebih lanjut
        </Link>
      </div>
    </div>
  </div>
</section>



           {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Tentang Kami, RSGM Soelastri
              </h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                RSGM Soelastri, satu-satunya RSGM di Solo Raya, RSGM adalah
                pusat kesehatan gigi dan mulut terpadu. Dengan lokasi strategis,
                fasilitas modern, dan dokter spesialis berpengalaman, kami
                berkomitmen memberikan layanan terbaik. Sebagai bagian dari UMS,
                kami juga aktif dalam pendidikan kedokteran gigi
              </p>
            </div>
            <div className="w-full md:w-3/4 lg:w-1/2 mx-auto">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/about1.png"
                  alt="RSGM Soelastri Building"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
<section className="py-16 bg-gray-50">
  <div className="container mx-auto px-4">
    <div className="flex flex-col md:flex-row items-center gap-8">
      <div className="md:w-1/2 order-1 md:order-2">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Tentang Pendidikan Penelitian dan Magang
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-4">
          RSGM berperan sebagai pusat penelitian dan pengembangan keilmuan di bidang kesehatan gigi dan mulut.
          Kami mendukung penelitian inovatif serta menyediakan program magang bagi mahasiswa dan tenaga medis
          untuk mendapatkan pengalaman langsung di lingkungan klinis.
        </p>
      </div>
      <div className="w-full md:w-3/4 lg:w-1/2 mx-auto order-2 md:order-1">
        <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/images/about2.png"
            alt="Dental Education"
            fill
            className="object-cover"
          />
        </div>
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
          <h2 className="text-5xl font-bold mb-10">Keuntungan Bergabung di RSGM</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 space-y-10">
                <div className="bg-white p-12 rounded-lg shadow-sm border">
                  <h3 className="font-bold text-3xl mb-6">Akses Fasilitas Medis Modern</h3>
                  <p className="text-gray-600 text-xl">
                    Gunakan peralatan terlengkap di lingkungan rumah sakit dengan teknologi terkini.
                  </p>
                </div>

                <div className="bg-white p-12 rounded-lg shadow-sm border">
                  <h3 className="font-bold text-3xl mb-6">Bimbingan dari Profesional</h3>
                  <p className="text-gray-600 text-xl">Dibimbing oleh tenaga ahli dan praktisi berpengalaman di bidangnya.</p>
                </div>

                <div className="bg-white p-12 rounded-lg shadow-sm border">
                  <h3 className="font-bold text-3xl mb-6">Peluang Berkontribusi</h3>
                  <p className="text-gray-600 text-xl">
                    Berperan dalam penelitian dan praktik yang berdampak nyata pada dunia.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div>
                <Image
                  src="/images/keuntungan.png?height=250&width=250"
                  alt="Dental Professionals"
                  width={250}
                  height={250}
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
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
        </div>
      </section>


        {/* CTA Section */}
<section
  className="py-24 bg-cover bg-center text-white"
  style={{ backgroundImage: "url('/images/siapmenjadi.png')" }}
>
  <div className="container mx-auto px-4 text-left">
    <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-8 drop-shadow-lg">
      Siap menjadi bagian dari inovasi dan pengembangan keilmuan di RSGM? 
      <br className="hidden md:block" /> Jelajahi lebih lanjut dan daftar sekarang!
    </h2>
    <Link
      href="/daftar"
      className="inline-block bg-white text-blue-700 text-lg md:text-2xl font-semibold px-10 py-4 rounded-lg hover:bg-gray-100 transition-transform transform hover:scale-105 shadow-md"
    >
      Daftar Sekarang
    </Link>
  </div>
</section>


      {/* Footer */}
      <footer className="bg-[#0360d9] text-white p-6 mt-auto">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-3 mb-4 md:mb-0">
            <Image
              src="/logo.svg"
              alt="RSGM Soelastri Logo"
              width={50}
              height={50}
              className="rounded-full bg-white p-1"
            />
            <div>
              <h2 className="font-bold text-xl">RSGM SOELASTRI</h2>
              <p className="text-sm">
                Sejahtera - Maju - Islami - Loyal - Empati
              </p>
            </div>
          </div>

          <div className="flex gap-4 mb-4 md:mb-0">
            <a
              href="#"
              aria-label="Facebook"
              className="bg-white rounded-full p-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#0360d9"
                className="w-5 h-5"
              >
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="bg-white rounded-full p-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#0360d9"
                className="w-5 h-5"
              >
                <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 1.802c-2.67 0-2.986.01-4.04.059-.976.045-1.505.207-1.858.344-.466.182-.8.398-1.15.748-.35.35-.566.684-.748 1.15-.137.353-.3.882-.344 1.857-.048 1.055-.058 1.37-.058 4.041 0 2.67.01 2.986.058 4.04.045.977.207 1.505.344 1.858.182.466.399.8.748 1.15.35.35.684.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058 2.67 0 2.987-.01 4.04-.058.977-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.684.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041 0-2.67-.01-2.986-.058-4.04-.045-.977-.207-1.505-.344-1.858a3.097 3.097 0 0 0-.748-1.15 3.098 3.098 0 0 0-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.055-.048-1.37-.058-4.041-.058zm0 3.063a5.135 5.135 0 1 1 0 10.27 5.135 5.135 0 0 1 0-10.27zm0 8.468a3.333 3.333 0 1 0 0-6.666 3.333 3.333 0 0 0 0 6.666zm6.538-8.671a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="YouTube"
              className="bg-white rounded-full p-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#0360d9"
                className="w-5 h-5"
              >
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Telegram"
              className="bg-white rounded-full p-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#0360d9"
                className="w-5 h-5"
              >
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
            </a>
          </div>

          <div className="text-center md:text-right text-sm">
            <p>Jl. Slamet Riyadi NO. 366, Purwosari, Laweyan,</p>
            <p>Kota Surakarta, Jawa Tengah 57141</p>
          </div>
        </div>
        <div className="text-center text-xs mt-4">
          Copyright 2025 - Lembaga dan Bentuk Lainnya RUMAH SAKIT GIGI DAN MULUT
          SOELASTRI
        </div>
      </footer>
    </div>
  );
};

export default ComponentLandingpage;
