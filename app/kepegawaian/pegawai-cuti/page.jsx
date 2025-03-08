export function EmployeeLeaveTable() {
    const employeesOnLeave = [
      {
        id: "123456789",
        name: "Budi Santoso",
        email: "budi@gmail.com",
        startDate: "2024-02-19",
        endDate: "2024-02-21",
        leaveType: "Tahunan",
        status: "Disetujui",
      },
      {
        id: "987654321",
        name: "Elvina Juan Krisana",
        email: "juju.wink@gmail.co",
        startDate: "2024-02-19",
        endDate: "2024-02-20",
        leaveType: "Sakit",
        status: "Disetujui",
      },
      {
        id: "456789123",
        name: "Andi Pratama",
        email: "andi@rscmh.com",
        startDate: "2024-03-10",
        endDate: "2024-03-15",
        leaveType: "Izin",
        status: "Pending",
      },
    ]
  
    return (
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nama</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ID Pegawai
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Tanggal Mulai
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Tanggal Selesai
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Jenis Cuti
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {employeesOnLeave.map((employee) => (
              <tr key={employee.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{employee.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{employee.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{employee.email}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {new Date(employee.startDate).toLocaleDateString("id-ID", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                  })}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {new Date(employee.endDate).toLocaleDateString("id-ID", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                  })}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      employee.leaveType === "Tahunan"
                        ? "bg-blue-100 text-blue-800"
                        : employee.leaveType === "Sakit"
                          ? "bg-red-100 text-red-800"
                          : "bg-purple-100 text-purple-800"
                    }`}
                  >
                    {employee.leaveType}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      employee.status === "Disetujui" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {employee.status}
                  </span>
                </td>
              </tr>
            ))}
            {/* Placeholder rows to match the design */}
            {Array(5)
              .fill(0)
              .map((_, index) => (
                <tr key={`placeholder-${index}`} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">Peletelenque facilisis</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">Peletelenque facilisis</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">Peletelenque facilisis</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">2024-03-10</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">2024-03-10</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">Ut feugiat egestas</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">Ut feugiat egestas</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    )
  }
  
  