import { FileText } from "lucide-react"

const ComponentKlinis = () => {
  const withHumanSubjectsDocuments = [
    { name: "Surat Izin Penelitian" },
    { name: "Tanda Pengenal Penelitian" },
    { name: "Lembar Kegiatan Penelitian" },
    { name: "Ethical Clearence" },
    { name: "Form Pemberian Informasi Penelitian Tentang Penelitian Klinis" },
    { name: "Surat Persetujuan Subyek Penelitian" },
    { name: "Surat Persetujuan Wali Subyek Penelitian" },
    { name: "Surat Penolakan Subyek Penelitian" },
    { name: "Surat Penolakan Wali Subyek Penelitian" },
    { name: "Form Checklist Pengawasan Penelitian Klinis dengan Subyek Manusia" },
    { name: "Form Pernyataan Selesai Pengambilan Data" },
  ]

  const withoutHumanSubjectsDocuments = [
    { name: "Surat Izin Penelitian" },
    { name: "Tanda Pengenal Penelitian" },
    { name: "Lembar Kegiatan Penelitian" },
    { name: "Ethical Clearence" },
    { name: "Form Checklist Pengawasan Penelitian Klinis dengan Subyek Manusia" },
    { name: "Form Pernyataan Selesai Pengambilan Data" },
  ]

  const renderDocumentList = (documents) => (
    documents.map((doc, index) => (
      <div key={index} className="grid grid-cols-3 md:grid-cols-4 border-t border-gray-200  items-center">
        <div className="p-4  col-span-2 md:col-span-3">{doc.name}</div>
        <div className="p-4 flex justify-center items-center">
          <button className="bg-[#0360d9] text-white px-3 py-1 rounded text-sm flex items-center gap-1">
            <FileText className="h-4 w-4" />
            <span>Buka Dokumen</span>
          </button>
        </div>
      </div>
    ))
  )

  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-10">Penelitian Klinis</h1>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Penelitian Klinis dengan Subyek Manusia</h2>
        <p className="text-gray-700 mb-6">
          Pada penelitian ini, peneliti mengumpulkan data secara langsung bertemu dengan subyek penelitian
          (pasien/keluarga pasien/pengunjung).
        </p>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="grid grid-cols-3 md:grid-cols-4">
            <div className="bg-blue-50 p-4 font-medium col-span-2 md:col-span-3">Kelengkapan yang harus dipenuhi</div>
            <div className="bg-blue-50 p-4 font-mediumflex justify-center items-center">Akses Dokumen</div>
          </div>
          {renderDocumentList(withHumanSubjectsDocuments)}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Penelitian Klinis Tanpa Subyek Manusia</h2>
        <p className="text-gray-700 mb-6">
          Pada penelitian ini, peneliti mengumpulkan data tidak secara langsung bertemu dengan subyek penelitian.
          Peneliti mengumpulkan data melalui catatan medis pasien ataupun dokumen lain yang dibutuhkan, tidak secara
          langsung berasal dari subyek penelitian.
        </p>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="grid grid-cols-3 md:grid-cols-4">
            <div className="bg-blue-50 p-4 font-medium col-span-2 md:col-span-3">Kelengkapan yang harus dipenuhi</div>
            <div className="bg-blue-50 p-4 font-medium flex justify-center items-center">Akses Dokumen</div>
          </div>
          {renderDocumentList(withoutHumanSubjectsDocuments)}
        </div>
      </div>
    </div>
  )
}

export default ComponentKlinis
