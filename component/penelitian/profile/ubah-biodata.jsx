"use client"
import React from "react"

import { useState } from "react"

const ComponentEditBio =()=> {
  const [formData, setFormData] = useState({
    namaLengkap: "Danang Aprinato",
    jenisKelamin: "Laki - laki",
    tempatKelahiran: "Surakarta",
    tanggalLahir: "30 April 2003",
    email: "danangaprianto@student.ums.id",
    nomorHp: "0822Xxxxxxxxxxxxxxxxx",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    // Here you would typically send the data to your API
  }

  return (
    <div className="max-w-3xl mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h1 className="text-2xl font-bold mb-6">Ubah Biodata</h1>

          <div className="space-y-6">
            {/* Nama Lengkap */}
            <div>
              <label htmlFor="namaLengkap" className="block text-gray-700 font-medium mb-2">
                Nama Lengkap
              </label>
              <input
                type="text"
                id="namaLengkap"
                name="namaLengkap"
                value={formData.namaLengkap}
                onChange={handleChange}
                className="w-full p-3 bg-gray-50 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0360d9] focus:border-transparent"
              />
            </div>

            {/* Jenis Kelamin */}
            <div>
              <label htmlFor="jenisKelamin" className="block text-gray-700 font-medium mb-2">
                Jenis Kelamin
              </label>
              <input
                type="text"
                id="jenisKelamin"
                name="jenisKelamin"
                value={formData.jenisKelamin}
                onChange={handleChange}
                className="w-full p-3 bg-gray-50 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0360d9] focus:border-transparent"
              />
            </div>

            {/* Tempat Kelahiran */}
            <div>
              <label htmlFor="tempatKelahiran" className="block text-gray-700 font-medium mb-2">
                Tempat Kelahiran
              </label>
              <input
                type="text"
                id="tempatKelahiran"
                name="tempatKelahiran"
                value={formData.tempatKelahiran}
                onChange={handleChange}
                className="w-full p-3 bg-gray-50 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0360d9] focus:border-transparent"
              />
            </div>

            {/* Tanggal Lahir */}
            <div>
              <label htmlFor="tanggalLahir" className="block text-gray-700 font-medium mb-2">
                Tanggal Lahir
              </label>
              <input
                type="text"
                id="tanggalLahir"
                name="tanggalLahir"
                value={formData.tanggalLahir}
                onChange={handleChange}
                className="w-full p-3 bg-gray-50 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0360d9] focus:border-transparent"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 bg-gray-50 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0360d9] focus:border-transparent"
              />
            </div>

            {/* Nomor HP */}
            <div>
              <label htmlFor="nomorHp" className="block text-gray-700 font-medium mb-2">
                Nomor Hp
              </label>
              <input
                type="text"
                id="nomorHp"
                name="nomorHp"
                value={formData.nomorHp}
                onChange={handleChange}
                className="w-full p-3 bg-gray-50 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0360d9] focus:border-transparent"
              />
            </div>

            {/* Form Actions */}
            <div className="flex justify-end gap-4 pt-4">
              <button
                type="button"
                className="px-6 py-2 bg-[#b01b0f] text-white rounded font-medium hover:bg-red-700 transition-colors"
              >
                Batal
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-[#0360d9] text-white rounded font-medium hover:bg-blue-700 transition-colors"
              >
                Simpan
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}


export default ComponentEditBio
