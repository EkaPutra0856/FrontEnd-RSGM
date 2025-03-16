'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Animasi Umum
const fadeIn = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const scaleUp = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
};

const ComponentLandingpage = () => {
  return (
    <motion.div initial="hidden" animate="visible" className="min-h-screen flex flex-col">
      {/* Header */}
      <motion.header className="bg-transparent fixed top-0 w-full z-50 backdrop-blur-sm" variants={fadeIn} initial="hidden" animate="visible">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-3">
            {/* Mobile Menu Button */}
            <motion.button className="text-white md:hidden" {...scaleUp}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </motion.button>

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 hover:scale-105 transition-transform duration-300">
              <Image src="/logo.svg" alt="RSGM Soelastri Logo" width={40} height={40} className="rounded-full bg-[#0360d9] p-1" />
              <div>
                <h1 className="font-bold text-lg md:text-xl text-white">RSGM SOELASTRI</h1>
                <p className="text-xs md:text-sm text-gray-200">Sejahtera - Maju - Islami - Loyal - Empati</p>
              </div>
            </Link>
          </div>

          {/* Navigation */}
          <div className="md:flex items-center gap-8">
            <nav className="flex gap-6">
              <Link href="/penelitian" className="hidden md:block font-medium text-white hover:text-[#0360d9] transition-colors">
                Penelitian
              </Link>
              <Link href="/magang" className="hidden md:block font-medium text-white hover:text-[#0360d9] transition-colors">
                Magang
              </Link>
            </nav>
            <motion.div {...scaleUp}>
              <Link href="/login" className="bg-white text-black px-6 py-2 rounded-full font-medium border border-gray-200 hover:bg-gray-100 transition-colors">
                Login
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
<motion.section 
  className="relative h-[500px] md:h-[800px] w-full"
  initial="hidden"
  animate="visible"
  variants={fadeIn}
>
  <div className="relative h-full w-full border border-red-500">
    <Image
      src="/images/landing1.png"
      alt="Dental professional working"
      fill
      className="object-cover opacity-60 z-5"
      priority
    />
  </div>

  <div className="absolute inset-0 bg-black bg-opacity-0">
    <div className="container mx-auto px-4 h-full flex flex-col justify-center">
      <motion.div 
        className="max-w-2xl text-white z-6"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <motion.h1 
          className="text-4xl md:text-6xl font-bold mb-4"
          variants={scaleUp}
          whileHover="whileHover"
        >
          Advancing Dental Excellence Through Innovation and Research
        </motion.h1>

        <motion.p 
          className="text-lg md:text-2xl mb-8"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          Membentuk masa depan kesehatan gigi melalui penelitian inovatif dan pengalaman praktis yang bermakna
        </motion.p>

        <motion.div variants={scaleUp} whileHover="whileHover" whileTap="whileTap">
          <Link
            href="/about"
            className="inline-block bg-[#0360d9] text-white text-xl md:text-2xl px-8 py-4 rounded font-medium hover:bg-blue-700 transition-transform"
          >
            Jelajahi lebih lanjut
          </Link>
        </motion.div>
      </motion.div>
    </div>
  </div>
</motion.section>


      {/* Education Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <motion.div className="md:w-1/2" variants={slideInLeft} initial="hidden" whileInView="visible">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Tentang Pendidikan, Penelitian, dan Magang</h2>
              <p className="text-lg md:text-xl text-gray-700 mb-4">
                RSGM berperan sebagai pusat penelitian dan pengembangan keilmuan di bidang kesehatan gigi dan mulut.
                Kami mendukung penelitian inovatif serta menyediakan program magang bagi mahasiswa dan tenaga medis
                untuk mendapatkan pengalaman langsung di lingkungan klinis.
              </p>
            </motion.div>
            <motion.div className="w-full md:w-3/4 lg:w-1/2 mx-auto" variants={slideInRight} initial="hidden" whileInView="visible" whileHover={{ scale: 1.05 }}>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                <Image src="/images/about2.png" alt="Dental Education" fill className="object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>



      {/* Research Opportunities */}
      <section className="py-16 bg-blue-600 text-white">
        <motion.div className="container mx-auto px-4">
          <motion.h2 className="text-2xl md:text-3xl font-bold mb-4" initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            Jelajahi peluang penelitian dan magang bersama kami untuk berkontribusi dalam kemajuan dunia kedokteran gigi!
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6">
            {['Penelitian Klinis', 'Penelitian Non Klinis', 'Magang'].map((title, index) => (
              <motion.div key={index} className="bg-white text-gray-800 p-6 rounded-lg" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: index * 0.2 }} whileHover={{ scale: 1.05 }}>
                <h3 className="font-bold text-lg mb-2">{title}</h3>
                <p className="text-gray-600">
                  {title === 'Penelitian Klinis' ? 'Berfokus pada diagnosis, pencegahan, terapi, atau rehabilitasi, dengan data pasien langsung.' : title === 'Penelitian Non Klinis' ? 'Dilakukan di ruangan selain ruang eksaminasi langsung dengan pasien, seperti laboratorium.' : 'Kesempatan belajar langsung di lingkungan RSGM untuk meningkatkan keterampilan dan pengalaman profesional.'}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Research Opportunities */}
      <section className="py-16 bg-blue-600 text-white">
        <motion.div className="container mx-auto px-4">
          <motion.h2 className="text-2xl md:text-3xl font-bold mb-4" initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            Jelajahi peluang penelitian dan magang bersama kami untuk berkontribusi dalam kemajuan dunia kedokteran gigi!
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6">
            {['Penelitian Klinis', 'Penelitian Non Klinis', 'Magang'].map((title, index) => (
              <motion.div key={index} className="bg-white text-gray-800 p-6 rounded-lg shadow-lg" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: index * 0.2 }} whileHover={{ scale: 1.05 }}>
                <h3 className="font-bold text-lg mb-2">{title}</h3>
                <p className="text-gray-600">
                  {title === 'Penelitian Klinis' ? 'Berfokus pada diagnosis, pencegahan, terapi, atau rehabilitasi, dengan data pasien langsung.' : title === 'Penelitian Non Klinis' ? 'Dilakukan di ruangan selain ruang eksaminasi langsung dengan pasien, seperti laboratorium.' : 'Kesempatan belajar langsung di lingkungan RSGM untuk meningkatkan keterampilan dan pengalaman profesional.'}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <motion.div className="container mx-auto px-4">
          <motion.h2 className="text-5xl font-bold mb-10" initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            Keuntungan Bergabung di RSGM
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 space-y-10">
                {['Akses Fasilitas Medis Modern', 'Bimbingan dari Profesional', 'Peluang Berkontribusi'].map((benefit, index) => (
                  <motion.div key={index} className="bg-white p-12 rounded-lg shadow-sm border" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                    <h3 className="font-bold text-3xl mb-6">{benefit}</h3>
                    <p className="text-gray-600 text-xl">
                      {benefit === 'Akses Fasilitas Medis Modern' ? 'Gunakan peralatan terlengkap di lingkungan rumah sakit dengan teknologi terkini.' : benefit === 'Bimbingan dari Profesional' ? 'Dibimbing oleh tenaga ahli dan praktisi berpengalaman di bidangnya.' : 'Berperan dalam penelitian dan praktik yang berdampak nyata pada dunia.'}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div className="grid grid-cols-1 gap-4" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                <Image src="/images/keuntungan.png" alt="Dental Professionals" width={250} height={250} className="rounded-lg object-cover w-full h-full" />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <motion.section className="py-24 bg-cover bg-center text-white" style={{ backgroundImage: "url('/images/siapmenjadi.png')" }} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: 'easeOut' }}>
        <motion.div className="container mx-auto px-4 text-left">
          <motion.h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-8 drop-shadow-lg" initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ duration: 0.8 }}>
            Siap menjadi bagian dari inovasi dan pengembangan keilmuan di RSGM?
            <br className="hidden md:block" /> Jelajahi lebih lanjut dan daftar sekarang!
          </motion.h2>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.2 }}>
            <Link href="/daftar" className="inline-block bg-white text-blue-700 text-lg md:text-2xl font-semibold px-10 py-4 rounded-lg hover:bg-gray-100 transition-transform transform shadow-md">
              Daftar Sekarang
            </Link>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Footer */}
      <motion.footer className="bg-[#0360d9] text-white p-6 mt-auto" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <motion.div className="flex items-center gap-3 mb-4 md:mb-0">
            <Image src="/logo.svg" alt="RSGM Soelastri Logo" width={50} height={50} className="rounded-full bg-white p-1" />
            <div>
              <h2 className="font-bold text-xl">RSGM SOELASTRI</h2>
              <p className="text-sm">Sejahtera - Maju - Islami - Loyal - Empati</p>
            </div>
          </motion.div>
        </div>
      </motion.footer>

    </motion.div>
  );
};

export default ComponentLandingpage;
