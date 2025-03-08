"use client"

// import type React from "react"
import React from "react"

import { useState } from "react"

const ComponentSelamatDatang =()=> {
  const [formData, setFormData] = useState({
    namaLengkap: "Danang Aprinato",
    jenisKelamin: "Laki-laki",
    tempatKelahiran: "Surakarta",
    tanggalLahir: "30 April 2003",
    email: "danangaprianto@student.ums.id",
    nomorHp: "0822xxxxxxxxxxxxxxx",
    nomorIndukMahasiswa: "",
    unitPenelitian: "",
    strataPendidikan: "",
    universitas: "",
    fakultas: "",
    programStudi: "",
    namaPembimbing: "",
    judulPenelitian: "",
    jenisRancanganPenelitian: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  const handleClear = () => {
    setFormData({
      namaLengkap: "",
      jenisKelamin: "",
      tempatKelahiran: "",
      tanggalLahir: "",
      email: "",
      nomorHp: "",
      nomorIndukMahasiswa: "",
      unitPenelitian: "",
      strataPendidikan: "",
      universitas: "",
      fakultas: "",
      programStudi: "",
      namaPembimbing: "",
      judulPenelitian: "",
      jenisRancanganPenelitian: "",
    })
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-[#0360d9] mb-6">Selamat Datang di Halaman Pengajuan Penelitian</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Information */}
        <div className="space-y-4">
          <div>
            <label htmlFor="namaLengkap" className="block font-medium mb-1">
              Nama Lengkap
            </label>
            <input
              type="text"
              id="namaLengkap"
              name="namaLengkap"
              value={formData.namaLengkap}
              onChange={handleChange}
              className="w-full p-3 bg-[#f1f4f9] rounded border border-[#d8d8d8]"
            />
          </div>

          <div>
            <label htmlFor="jenisKelamin" className="block font-medium mb-1">
              Jenis Kelamin
            </label>
            <input
              type="text"
              id="jenisKelamin"
              name="jenisKelamin"
              value={formData.jenisKelamin}
              onChange={handleChange}
              className="w-full p-3 bg-[#f1f4f9] rounded border border-[#d8d8d8]"
            />
          </div>

          <div>
            <label htmlFor="tempatKelahiran" className="block font-medium mb-1">
              Tempat Kelahiran
            </label>
            <input
              type="text"
              id="tempatKelahiran"
              name="tempatKelahiran"
              value={formData.tempatKelahiran}
              onChange={handleChange}
              className="w-full p-3 bg-[#f1f4f9] rounded border border-[#d8d8d8]"
            />
          </div>

          <div>
            <label htmlFor="tanggalLahir" className="block font-medium mb-1">
              Tanggal Lahir
            </label>
            <input
              type="text"
              id="tanggalLahir"
              name="tanggalLahir"
              value={formData.tanggalLahir}
              onChange={handleChange}
              className="w-full p-3 bg-[#f1f4f9] rounded border border-[#d8d8d8]"
            />
          </div>

          <div>
            <label htmlFor="email" className="block font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 bg-[#f1f4f9] rounded border border-[#d8d8d8]"
            />
          </div>

          <div>
            <label htmlFor="nomorHp" className="block font-medium mb-1">
              Nomor Hp
            </label>
            <input
              type="text"
              id="nomorHp"
              name="nomorHp"
              value={formData.nomorHp}
              onChange={handleChange}
              className="w-full p-3 bg-[#f1f4f9] rounded border border-[#d8d8d8]"
            />
          </div>
        </div>

        {/* Academic Information - Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="nomorIndukMahasiswa" className="block font-medium mb-1">
              Nomor Induk Mahasiswa
            </label>
            <input
              type="text"
              id="nomorIndukMahasiswa"
              name="nomorIndukMahasiswa"
              placeholder="Masukkan NIM"
              value={formData.nomorIndukMahasiswa}
              onChange={handleChange}
              className="w-full p-3 bg-[#f1f4f9] rounded border border-[#d8d8d8]"
            />
          </div>

          <div>
            <label htmlFor="unitPenelitian" className="block font-medium mb-1">
              Unit Penelitian
            </label>
            <input
              type="text"
              id="unitPenelitian"
              name="unitPenelitian"
              placeholder="Masukkan Unit Penelitian"
              value={formData.unitPenelitian}
              onChange={handleChange}
              className="w-full p-3 bg-[#f1f4f9] rounded border border-[#d8d8d8]"
            />
          </div>

          <div>
            <label htmlFor="strataPendidikan" className="block font-medium mb-1">
              Strata Pendidikan
            </label>
            <input
              type="text"
              id="strataPendidikan"
              name="strataPendidikan"
              placeholder="Masukkan Strata Pendidikan"
              value={formData.strataPendidikan}
              onChange={handleChange}
              className="w-full p-3 bg-[#f1f4f9] rounded border border-[#d8d8d8]"
            />
          </div>

          <div>
            <label htmlFor="universitas" className="block font-medium mb-1">
              Universitas
            </label>
            <input
              type="text"
              id="universitas"
              name="universitas"
              placeholder="Masukkan Universitas"
              value={formData.universitas}
              onChange={handleChange}
              className="w-full p-3 bg-[#f1f4f9] rounded border border-[#d8d8d8]"
            />
          </div>

          <div>
            <label htmlFor="fakultas" className="block font-medium mb-1">
              Fakultas
            </label>
            <input
              type="text"
              id="fakultas"
              name="fakultas"
              placeholder="Masukkan Fakultas"
              value={formData.fakultas}
              onChange={handleChange}
              className="w-full p-3 bg-[#f1f4f9] rounded border border-[#d8d8d8]"
            />
          </div>

          <div>
            <label htmlFor="programStudi" className="block font-medium mb-1">
              Program Studi
            </label>
            <input
              type="text"
              id="programStudi"
              name="programStudi"
              placeholder="Masukkan Program Studi"
              value={formData.programStudi}
              onChange={handleChange}
              className="w-full p-3 bg-[#f1f4f9] rounded border border-[#d8d8d8]"
            />
          </div>
        </div>

        {/* Research Information */}
        <div className="space-y-4">
          <div>
            <label htmlFor="namaPembimbing" className="block font-medium mb-1">
              Nama Pembimbing
            </label>
            <input
              type="text"
              id="namaPembimbing"
              name="namaPembimbing"
              placeholder="Masukkan Nama Pembimbing"
              value={formData.namaPembimbing}
              onChange={handleChange}
              className="w-full p-3 bg-[#f1f4f9] rounded border border-[#d8d8d8]"
            />
          </div>

          <div>
            <label htmlFor="judulPenelitian" className="block font-medium mb-1">
              Judul Penelitian
            </label>
            <input
              type="text"
              id="judulPenelitian"
              name="judulPenelitian"
              placeholder="Masukkan Judul Penelitian"
              value={formData.judulPenelitian}
              onChange={handleChange}
              className="w-full p-3 bg-[#f1f4f9] rounded border border-[#d8d8d8]"
            />
          </div>

          <div>
            <label htmlFor="jenisRancanganPenelitian" className="block font-medium mb-1">
              Jenis dan Rancangan Penelitian
            </label>
            <input
              type="text"
              id="jenisRancanganPenelitian"
              name="jenisRancanganPenelitian"
              placeholder="Masukkan Jenis dan Rancangan Penelitian"
              value={formData.jenisRancanganPenelitian}
              onChange={handleChange}
              className="w-full p-3 bg-[#f1f4f9] rounded border border-[#d8d8d8]"
            />
          </div>
        </div>

        {/* Form Actions */}
        <div className="flex justify-end gap-4 pt-4">
          <button type="button" onClick={handleClear} className="px-6 py-2 bg-[#b01b0f] text-white rounded font-medium">
            Berasihkan
          </button>
          <button type="submit" className="px-6 py-2 bg-[#0360d9] text-white rounded font-medium">
            Selanjutnya
          </button>
        </div>
      </form>
    </div>
  )
}

export default ComponentSelamatDatang

