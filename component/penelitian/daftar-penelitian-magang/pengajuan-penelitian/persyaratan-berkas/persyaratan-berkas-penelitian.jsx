'use client'

// import type React from "react"

import { useState } from "react"
import { Upload } from "lucide-react"

// interface FileData {
//   file: File | null
//   preview: string | null
// }


const ComponentPersyaratanBerkas = ()=> {
  const [files, setFiles] = useState({
    suratIzin: { file: null, preview: null },
    cvPeneliti: { file: null, preview: null },
    pasFoto: { file: null, preview: null },
    ethicalClearance: { file: null, preview: null },
    proposalPenelitian: { file: null, preview: null },
  })
  

  const handleFileChange = (e, fieldName) => {
    const selectedFile = e.target.files?.[0] || null

    if (selectedFile) {
      // Validate file type
      if (selectedFile.type !== "application/pdf") {
        alert("Hanya file PDF yang diperbolehkan")
        return
      }

      // Validate file size (5MB = 5 * 1024 * 1024 bytes)
      if (selectedFile.size > 5 * 1024 * 1024) {
        alert("Ukuran file maksimal 5MB")
        return
      }

      setFiles((prev) => ({
        ...prev,
        [fieldName]: {
          file: selectedFile,
          preview: URL.createObjectURL(selectedFile),
        },
      }))
    }
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const handleDrop = (e, fieldName) => {
    e.preventDefault()
    e.stopPropagation()

    const droppedFile = e.dataTransfer.files?.[0] || null

    if (droppedFile) {
      // Validate file type
      if (droppedFile.type !== "application/pdf") {
        alert("Hanya file PDF yang diperbolehkan")
        return
      }

      // Validate file size (5MB = 5 * 1024 * 1024 bytes)
      if (droppedFile.size > 5 * 1024 * 1024) {
        alert("Ukuran file maksimal 5MB")
        return
      }

      setFiles((prev) => ({
        ...prev,
        [fieldName]: {
          file: droppedFile,
          preview: URL.createObjectURL(droppedFile),
        },
      }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Check if all required files are uploaded
    const missingFiles = Object.entries(files).filter(([_, data]) => !data.file)

    if (missingFiles.length > 0) {
      alert("Silahkan upload semua file yang diperlukan")
      return
    }

    // Here you would typically send the files to your server
    console.log("Files to upload:", files)
    alert("Berkas berhasil dikirim!")
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-[#0360d9] mb-4">Persyaratan Berkas Penelitian</h1>

      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">C. Penelitian Non Klinis dengan Subjek Manusia</h2>
        <p className="mb-4">Silahkan Input Syarat yang harus dipenuhi di bawah ini:</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Surat Izin Penelitian */}
        <div>
          <label className="block font-medium mb-2">Surat Izin Penelitian dari Instansi atau Universitas</label>
          <div
            className="border border-dashed border-[#0360d9] rounded-md bg-[#f1f4f9] p-6 text-center cursor-pointer"
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, "suratIzin")}
            onClick={() => document.getElementById("suratIzin")?.click()}
          >
            <input
              type="file"
              id="suratIzin"
              accept=".pdf"
              className="hidden"
              onChange={(e) => handleFileChange(e, "suratIzin")}
            />
            <div className="flex flex-col items-center">
              <Upload className="h-10 w-10 text-[#0360d9] mb-2" />
              <p className="text-[#0360d9] font-medium">Tekan untuk memilih file atau tarik file ke sini</p>
              <p className="text-sm text-gray-500 mt-2">File yang diterima adalah .pdf file</p>
              <p className="text-sm text-gray-500">Maksimal ukuran file adalah 5 MB</p>
              {files.suratIzin.file && (
                <div className="mt-2 text-green-600">File dipilih: {files.suratIzin.file.name}</div>
              )}
            </div>
          </div>
        </div>

        {/* CV Peneliti */}
        <div>
          <label className="block font-medium mb-2">CV Peneliti</label>
          <div
            className="border border-dashed border-[#0360d9] rounded-md bg-[#f1f4f9] p-6 text-center cursor-pointer"
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, "cvPeneliti")}
            onClick={() => document.getElementById("cvPeneliti")?.click()}
          >
            <input
              type="file"
              id="cvPeneliti"
              accept=".pdf"
              className="hidden"
              onChange={(e) => handleFileChange(e, "cvPeneliti")}
            />
            <div className="flex flex-col items-center">
              <Upload className="h-10 w-10 text-[#0360d9] mb-2" />
              <p className="text-[#0360d9] font-medium">Tekan untuk memilih file atau tarik file ke sini</p>
              <p className="text-sm text-gray-500 mt-2">File yang diterima adalah .pdf file</p>
              <p className="text-sm text-gray-500">Maksimal ukuran file adalah 5 MB</p>
              {files.cvPeneliti.file && (
                <div className="mt-2 text-green-600">File dipilih: {files.cvPeneliti.file.name}</div>
              )}
            </div>
          </div>
        </div>

        {/* Pas Foto */}
        <div>
          <label className="block font-medium mb-2">Pas Foto</label>
          <div
            className="border border-dashed border-[#0360d9] rounded-md bg-[#f1f4f9] p-6 text-center cursor-pointer"
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, "pasFoto")}
            onClick={() => document.getElementById("pasFoto")?.click()}
          >
            <input
              type="file"
              id="pasFoto"
              accept=".pdf"
              className="hidden"
              onChange={(e) => handleFileChange(e, "pasFoto")}
            />
            <div className="flex flex-col items-center">
              <Upload className="h-10 w-10 text-[#0360d9] mb-2" />
              <p className="text-[#0360d9] font-medium">Tekan untuk memilih file atau tarik file ke sini</p>
              <p className="text-sm text-gray-500 mt-2">File yang diterima adalah .pdf file</p>
              <p className="text-sm text-gray-500">Maksimal ukuran file adalah 5 MB</p>
              {files.pasFoto.file && <div className="mt-2 text-green-600">File dipilih: {files.pasFoto.file.name}</div>}
            </div>
          </div>
        </div>

        {/* Ethical Clearance */}
        <div>
          <label className="block font-medium mb-2">Ethical Clearance</label>
          <div
            className="border border-dashed border-[#0360d9] rounded-md bg-[#f1f4f9] p-6 text-center cursor-pointer"
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, "ethicalClearance")}
            onClick={() => document.getElementById("ethicalClearance")?.click()}
          >
            <input
              type="file"
              id="ethicalClearance"
              accept=".pdf"
              className="hidden"
              onChange={(e) => handleFileChange(e, "ethicalClearance")}
            />
            <div className="flex flex-col items-center">
              <Upload className="h-10 w-10 text-[#0360d9] mb-2" />
              <p className="text-[#0360d9] font-medium">Tekan untuk memilih file atau tarik file ke sini</p>
              <p className="text-sm text-gray-500 mt-2">File yang diterima adalah .pdf file</p>
              <p className="text-sm text-gray-500">Maksimal ukuran file adalah 5 MB</p>
              {files.ethicalClearance.file && (
                <div className="mt-2 text-green-600">File dipilih: {files.ethicalClearance.file.name}</div>
              )}
            </div>
          </div>
        </div>

        {/* Proposal Penelitian */}
        <div>
          <label className="block font-medium mb-2">Proposal Penelitian</label>
          <div
            className="border border-dashed border-[#0360d9] rounded-md bg-[#f1f4f9] p-6 text-center cursor-pointer"
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, "proposalPenelitian")}
            onClick={() => document.getElementById("proposalPenelitian")?.click()}
          >
            <input
              type="file"
              id="proposalPenelitian"
              accept=".pdf"
              className="hidden"
              onChange={(e) => handleFileChange(e, "proposalPenelitian")}
            />
            <div className="flex flex-col items-center">
              <Upload className="h-10 w-10 text-[#0360d9] mb-2" />
              <p className="text-[#0360d9] font-medium">Tekan untuk memilih file atau tarik file ke sini</p>
              <p className="text-sm text-gray-500 mt-2">File yang diterima adalah .pdf file</p>
              <p className="text-sm text-gray-500">Maksimal ukuran file adalah 5 MB</p>
              {files.proposalPenelitian.file && (
                <div className="mt-2 text-green-600">File dipilih: {files.proposalPenelitian.file.name}</div>
              )}
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button type="submit" className="px-6 py-2 bg-[#0360d9] text-white rounded font-medium">
            Kirim
          </button>
        </div>
      </form>
    </div>
  )
}

export default ComponentPersyaratanBerkas