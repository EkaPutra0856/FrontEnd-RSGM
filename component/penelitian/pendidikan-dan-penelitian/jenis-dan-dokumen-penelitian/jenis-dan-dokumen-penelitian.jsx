import { Stethoscope } from "lucide-react"

const  ComponentJenisDanDokumenPenelitian= () =>{
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-center text-[#0360d9] mb-10">Jenis dan Dokumen Penelitian</h1>

      {/* Research Types */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-bold text-[#0360d9]">Penelitian Klinis</h2>
            <Stethoscope className="h-12 w-12 text-[#0360d9]" />
          </div>
          <p className="text-gray-700 leading-relaxed">
            Penelitian yang dilakukan di rumah sakit dengan atau tanpa subjek manusia yang berfokus pada diagnosa,
            pencegahan, terapi, atau rehabilitasi
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-bold text-[#0360d9]">Penelitian Non-Klinis</h2>
            <Stethoscope className="h-12 w-12 text-[#0360d9]" />
          </div>
          <p className="text-gray-700 leading-relaxed">
            Penelitian yang dilakukan di rumah sakit dengan atau tanpa subjek manusia, namun tidak terkait dengan
            diagnosa, terapi, atau rehabilitasi
          </p>
        </div>
      </div>

      {/* Research Services */}
      <h2 className="text-3xl font-bold text-center text-[#0360d9] mb-8">Pelayanan Penelitian</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Research Flow */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex flex-col items-center">
            {/* Step 1 */}
            <div className="border border-gray-300 p-3 w-64 text-center mb-2">
              <p className="font-medium">Mahasiswa</p>
            </div>
            <div className="h-8 w-0.5 bg-gray-300"></div>

            {/* Step 2 */}
            <div className="border border-gray-300 p-3 w-80 text-left mb-2">
              <p className="font-medium">Penyerahan Dokumen ke Bag. Diklit RSGM Soelastri berupa:</p>
              <ol className="list-decimal pl-5 text-sm mt-1">
                <li>Surat permohonan penelitian</li>
                <li>Proposal penelitian</li>
                <li>Ethical clearance</li>
                <li>Curriculum Vitae Peneliti</li>
              </ol>
            </div>
            <div className="h-8 w-0.5 bg-gray-300"></div>

            {/* Step 3 */}
            <div className="border border-gray-300 p-3 w-64 text-center mb-2">
              <p className="font-medium">Verifikasi dokumen</p>
            </div>
            <div className="h-8 w-0.5 bg-gray-300"></div>

            {/* Step 4 */}
            <div className="border border-gray-300 p-3 w-80 text-center mb-2">
              <p className="font-medium">Pembayaran Biaya Penelitian ke Bag. Keuangan</p>
            </div>
            <div className="h-8 w-0.5 bg-gray-300"></div>

            {/* Step 5 */}
            <div className="border border-gray-300 p-3 w-80 text-center mb-2">
              <p className="font-medium">Surat izin penelitian dari Bag. Diklit</p>
            </div>
            <div className="h-8 w-0.5 bg-gray-300"></div>

            {/* Step 6 */}
            <div className="border border-gray-300 p-3 w-64 text-center mb-2">
              <p className="font-medium">Penelitian di unit</p>
            </div>
            <div className="h-8 w-0.5 bg-gray-300"></div>

            {/* Step 7 */}
            <div className="border border-gray-300 p-3 w-64 text-center mb-2">
              <p className="font-medium">Penelitian selesai</p>
            </div>
            <div className="h-8 w-0.5 bg-gray-300"></div>

            {/* Step 8 */}
            <div className="border border-gray-300 p-3 w-80 text-center">
              <p className="font-medium">Penyerahan hasil penelitian ke Bag. Diklit</p>
            </div>
          </div>
        </div>

        {/* Research Standards */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h3 className="text-center font-bold mb-4">
            STANDAR PENELITIAN
            <br />
            DI RSGM SOELASTRI
          </h3>

          <div className="space-y-4">
            <div>
              <p className="font-bold">1. Performance</p>
              <ol className="list-[lower-latin] pl-5 text-sm space-y-1">
                <li>wajib berpakaian rapi, sopan, dan tidak menggunakan perhiasan berlebihan.</li>
                <li>menggunakan jas almamater.</li>
                <li>menggunakan ID Card penelitian yang telah diberikan Bag Diklit RSGM Soelastri.</li>
              </ol>
            </div>

            <div>
              <p className="font-bold">2. Etika Penelitian</p>
              <ol className="list-[lower-latin] pl-5 text-sm space-y-1">
                <li>
                  Mahasiswa peneliti diperkenankan memulai penelitian setelah mendapatkan surat izin penelitian dari Bag
                  Diklit RSGM Soelastri.
                </li>
                <li>
                  Melakukan kontak perkenalan/izin kepada penanggung jawab unit setiap kali akan melakukan penelitian.
                </li>
                <li>Bersikap sopan dengan mengawali dengan salam-sapa-senyum setiap bertemu responden.</li>
              </ol>
            </div>

            <div>
              <p className="font-bold">3. Keselamatan Pasien</p>
              <ol className="list-[lower-latin] pl-5 text-sm space-y-1">
                <li>
                  Mahasiswa harus sudah memahami peraturan RSGM Soelastri dan menandatangani surat pernyataan
                  persetujuan.
                </li>
                <li>
                  Mahasiswa peneliti harus memberikan penjelasan ringkas tentang penelitian yang dilakukan, risiko
                  penelitian, hak responden bila dirugikan serta memberikan informed consent kepada responden.
                </li>
                <li>Biaya yang ditimbulkan akibat penelitian merupakan tanggung jawab peneliti.</li>
                <li>
                  Mahasiswa penelitian tidak diperkenankan membawa sarana penelitian sebelum mendapat izin dari
                  penanggung jawab unit.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ComponentJenisDanDokumenPenelitian

