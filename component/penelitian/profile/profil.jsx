import Image from "next/image"

const ComponentUserProfile =()=> {
  const userData = {
    name: "Danang Aprianto",
    email: "danangaprianto@ums.staff.id",
    gender: "Laki - laki",
    birthPlace: "Surakarta",
    birthDate: "30 April 2003",
    phone: "0822Xxxxxxxxxxxxxxxxx",
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Profile Header */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="w-32 h-32 rounded-full overflow-hidden">
            <Image
              src="/placeholder.svg?height=128&width=128"
              alt="Profile"
              width={128}
              height={128}
              className="object-cover"
            />
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-bold mb-2">{userData.name}</h1>
            <p className="text-[#0360d9] text-lg">{userData.email}</p>
          </div>
        </div>
      </div>

      {/* Profile Details */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="space-y-6">
          <div>
            <h2 className="text-gray-600 font-medium mb-2">Nama Lengkap</h2>
            <p className="text-gray-500">{userData.name}</p>
          </div>

          <div>
            <h2 className="text-gray-600 font-medium mb-2">Jenis Kelamin</h2>
            <p className="text-gray-500">{userData.gender}</p>
          </div>

          <div>
            <h2 className="text-gray-600 font-medium mb-2">Tempat Kelahiran</h2>
            <p className="text-gray-500">{userData.birthPlace}</p>
          </div>

          <div>
            <h2 className="text-gray-600 font-medium mb-2">Tanggal Lahir</h2>
            <p className="text-gray-500">{userData.birthDate}</p>
          </div>

          <div>
            <h2 className="text-gray-600 font-medium mb-2">Email</h2>
            <p className="text-gray-500">{userData.email}</p>
          </div>

          <div>
            <h2 className="text-gray-600 font-medium mb-2">Nomor Hp</h2>
            <p className="text-gray-500">{userData.phone}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ComponentUserProfile