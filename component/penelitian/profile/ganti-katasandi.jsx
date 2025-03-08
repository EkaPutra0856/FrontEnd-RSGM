"use client"

import { useState } from "react"
import { Eye, EyeOff } from 'lucide-react'

const ComponentGantiKatasandi =()=>{
  const [currentPassword, setCurrentPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  
  const [showCurrentPassword, setShowCurrentPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  
  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle password change logic here
    console.log("Password change submitted")
  }
  
  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
        <h1 className="text-2xl font-bold mb-4">Ubah Kata Sandi</h1>
        <p className="text-gray-600 mb-6">Silahkan ubah kata sandi dengan yang baru</p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Current Password */}
          <div>
            <label htmlFor="current-password" className="block font-medium mb-2">
              Kata sandi sekarang
            </label>
            <div className="relative">
              <input
                id="current-password"
                type={showCurrentPassword ? "text" : "password"}
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="w-full p-3 pr-10 border border-gray-300 rounded-md"
                required
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                aria-label={showCurrentPassword ? "Hide password" : "Show password"}
              >
                {showCurrentPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>
          
          {/* New Password */}
          <div>
            <label htmlFor="new-password" className="block font-medium mb-2">
              Kata sandi baru
            </label>
            <div className="relative">
              <input
                id="new-password"
                type={showNewPassword ? "text" : "password"}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full p-3 pr-10 border border-gray-300 rounded-md"
                required
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                onClick={() => setShowNewPassword(!showNewPassword)}
                aria-label={showNewPassword ? "Hide password" : "Show password"}
              >
                {showNewPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>
          
          {/* Confirm New Password */}
          <div>
            <label htmlFor="confirm-password" className="block font-medium mb-2">
              Ketik ulang kata sandi baru
            </label>
            <div className="relative">
              <input
                id="confirm-password"
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full p-3 pr-10 border border-gray-300 rounded-md"
                required
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                aria-label={showConfirmPassword ? "Hide password" : "Show password"}
              >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>
          
          {/* Form Actions */}
          <div className="flex gap-4 pt-4">
            <button
              type="button"
              className="px-6 py-2 bg-[#b01b0f] text-white rounded font-medium"
            >
              Batal
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-[#0360d9] text-white rounded font-medium"
            >
              Simpan
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default ComponentGantiKatasandi