"use client"

import React from "react"

import { useState } from "react"
import { FileText, Upload } from "lucide-react"

// interface UploadStatus {
//   status: "idle" | "success" | "error"
//   filename?: string
//   errorMessage?: string
// }

const ComponentSuccessFail = ()=> {
// const [uploadStatus, setUploadStatus] = useState<Record<string, UploadStatus>>({
  const [uploadStatus, setUploadStatus] = useState({
    researchPermit: { status: "error", errorMessage: "File terlalu besar, pastikan ukuran file tidak lebih dari 5MB" },
    cv: { status: "success", filename: "jujuworld.pdf" },
    photo: { status: "success", filename: "jujuworld.pdf" },
    ethicalClearance: { status: "success", filename: "jujuworld.pdf" },
    proposal: { status: "success", filename: "jujuworld.pdf" },
  })

  const handleFileChange = (field, e) => {
    const file = e.target.files?.[0]

    if (file) {
      // Simulate file upload
      if (field === "researchPermit") {
        // Simulate error for the first field
        setUploadStatus((prev) => ({
          ...prev,
          [field]: {
            status: "error",
            errorMessage: "File terlalu besar, pastikan ukuran file tidak lebih dari 5MB",
          },
        }))
      } else {
        // Simulate success for other fields
        setUploadStatus((prev) => ({
          ...prev,
          [field]: {
            status: "success",
            filename: "jujuworld.pdf",
          },
        }))
      }
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted", uploadStatus)
  }

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold text-[#0360d9] mb-6">Persyaratan Berkas Penelitian</h1>

      <div className="mb-6">
        <h2 className="text-lg font-medium mb-2">C. Penelitian Non Klinis dengan Subjek Manusia</h2>
        <p className="text-gray-600 mb-4">Silahkan Input Syarat yang harus dipenuhi di bawah ini:</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Research Permit */}
        <div>
          <label className="block font-medium mb-2">Surat Izin Penelitian dari Instansi atau Universitas</label>
          <div
            className={`relative border rounded-md p-6 flex flex-col items-center justify-center h-40 ${
              uploadStatus.researchPermit.status === "error" ? "bg-red-50" : "bg-blue-50"
            }`}
          >
            {uploadStatus.researchPermit.status === "idle" ? (
              <>
                <Upload className="h-10 w-10 text-gray-400 mb-2" />
                <p className="text-gray-500 text-sm">Klik atau seret file ke sini</p>
                <p className="text-gray-400 text-xs mt-1">PDF, DOC, atau DOCX (Max. 5MB)</p>
              </>
            ) : uploadStatus.researchPermit.status === "error" ? (
              <>
                <FileText className="h-10 w-10 text-red-500 mb-2" />
                <p className="text-red-500 font-medium">File gagal di upload</p>
                <p className="text-red-400 text-xs mt-1">{uploadStatus.researchPermit.errorMessage}</p>
              </>
            ) : (
              <>
                <FileText className="h-10 w-10 text-blue-500 mb-2" />
                <p className="text-blue-500 font-medium">File berhasil di upload</p>
                <p className="text-blue-400 text-xs mt-1">{uploadStatus.researchPermit.filename}</p>
              </>
            )}
            <input
              type="file"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              onChange={(e) => handleFileChange("researchPermit", e)}
              accept=".pdf,.doc,.docx"
            />
          </div>
        </div>

        {/* CV */}
        <div>
          <label className="block font-medium mb-2">CV Peneliti</label>
          <div className="relative border rounded-md p-6 flex flex-col items-center justify-center h-40 bg-blue-50">
            <FileText className="h-10 w-10 text-blue-500 mb-2" />
            <p className="text-blue-500 font-medium">File berhasil di upload</p>
            <p className="text-blue-400 text-xs mt-1">{uploadStatus.cv.filename}</p>
            <input
              type="file"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              onChange={(e) => handleFileChange("cv", e)}
              accept=".pdf,.doc,.docx"
            />
          </div>
        </div>

        {/* Photo */}
        <div>
          <label className="block font-medium mb-2">Pas Foto</label>
          <div className="relative border rounded-md p-6 flex flex-col items-center justify-center h-40 bg-blue-50">
            <FileText className="h-10 w-10 text-blue-500 mb-2" />
            <p className="text-blue-500 font-medium">File berhasil di upload</p>
            <p className="text-blue-400 text-xs mt-1">{uploadStatus.photo.filename}</p>
            <input
              type="file"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              onChange={(e) => handleFileChange("photo", e)}
              accept=".jpg,.jpeg,.png"
            />
          </div>
        </div>

        {/* Ethical Clearance */}
        <div>
          <label className="block font-medium mb-2">Ethical Cleareance</label>
          <div className="relative border rounded-md p-6 flex flex-col items-center justify-center h-40 bg-blue-50">
            <FileText className="h-10 w-10 text-blue-500 mb-2" />
            <p className="text-blue-500 font-medium">File berhasil di upload</p>
            <p className="text-blue-400 text-xs mt-1">{uploadStatus.ethicalClearance.filename}</p>
            <input
              type="file"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              onChange={(e) => handleFileChange("ethicalClearance", e)}
              accept=".pdf,.doc,.docx"
            />
          </div>
        </div>

        {/* Research Proposal */}
        <div>
          <label className="block font-medium mb-2">Proposal Penelitian</label>
          <div className="relative border rounded-md p-6 flex flex-col items-center justify-center h-40 bg-blue-50">
            <FileText className="h-10 w-10 text-blue-500 mb-2" />
            <p className="text-blue-500 font-medium">File berhasil di upload</p>
            <p className="text-blue-400 text-xs mt-1">{uploadStatus.proposal.filename}</p>
            <input
              type="file"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              onChange={(e) => handleFileChange("proposal", e)}
              accept=".pdf,.doc,.docx"
            />
          </div>
        </div>

        <div className="flex justify-end">
          <button type="submit" className="px-6 py-2 bg-[#0360d9] text-white rounded font-medium">
            Kirim
          </button>
        </div>
      </form>
    </div>
  )
}

export default ComponentSuccessFail

