'use client'

import React from "react"
import { User, Users, Calendar, GraduationCap } from "lucide-react"
// import { EmployeeTable } from "./employee-table"
// import { EmployeeLeaveTable } from "./employee-leave-table"
// import { InternTable } from "./intern-table"

export function Dashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Dashboard Kepegawaian</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <SummaryCard title="Pegawai" value="150" icon={<Users className="h-6 w-6" />} />
        <SummaryCard title="Pegawai Cuti" value="5" icon={<Calendar className="h-6 w-6" />} />
        <SummaryCard title="Pegawai Masuk" value="145" icon={<User className="h-6 w-6" />} />
        <SummaryCard title="Mahasiswa Magang" value="10" icon={<GraduationCap className="h-6 w-6" />} />
      </div>

      {/* Employee Table */}
      <div className="bg-white rounded-md shadow overflow-hidden">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold">Pegawai</h2>
        </div>
        {/* <EmployeeTable /> */}
      </div>

      {/* Employee Leave Table */}
      <div className="bg-white rounded-md shadow overflow-hidden">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold">Pegawai Cuti</h2>
        </div>
        {/* <EmployeeLeaveTable /> */}
      </div>

      {/* Intern Table */}
      <div className="bg-white rounded-md shadow overflow-hidden">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold">Mahasiswa Magang</h2>
        </div>
        {/* <InternTable /> */}
      </div>
    </div>
  )
}

// interface SummaryCardProps {
//   title
//   value
//   icon
// }

function SummaryCard({ title, value, icon }) {
  return (
    <div className="bg-white rounded-md shadow p-4 flex items-center justify-between">
      <div>
        <h3 className="text-sm text-gray-500 font-medium">{title}</h3>
        <p className="text-3xl font-bold">{value}</p>
      </div>
      <div className="bg-blue-50 p-3 rounded-full">{icon}</div>
    </div>
  )
}