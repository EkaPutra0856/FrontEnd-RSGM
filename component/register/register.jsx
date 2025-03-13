"use client"

import { useState } from "react"


const ComponentRegistration = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        phoneNumber: "",
        email: "",
        password: "",
        confirmPassword: "",
        agreeTerms: false,
    })

    const [showPassword, setShowPassword] = useState(false)
    const [passwordStrength, setPasswordStrength] = useState(0)

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }))

        if (name === "password") {
            let strength = 0
            if (value.length >= 8) strength += 1
            if (/[A-Z]/.test(value)) strength += 1
            if (/[0-9]/.test(value)) strength += 1
            if (/[^A-Za-z0-9]/.test(value)) strength += 1
            setPasswordStrength(strength)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Form submitted:", formData)
    }

    return (
        <div className="max-w-2xl mx-auto">
            <button
                type="button"
                className="w-full flex items-center justify-center gap-2 border border-gray-300 py-3 px-4 rounded-md font-medium text-gray-700 hover:bg-gray-50 transition-colors mb-6"
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24" height="24">
                    <path fill="#4285F4" d="M24 9.5c3.2 0 5.8 1.1 7.9 3.1l5.9-5.9C33.8 3.3 29.3 1 24 1 14.8 1 7.2 6.5 3.8 14.1l6.8 5.3C12.2 14.5 17.5 9.5 24 9.5z" />
                    <path fill="#34A853" d="M46.5 24.5c0-1.4-.1-2.7-.4-4H24v8.4h12.7c-.6 3.2-2.5 5.9-5.2 7.7l7.9 6.1c4.6-4.3 7.1-10.6 7.1-18.2z" />
                    <path fill="#FBBC05" d="M10.6 28.4a13.9 13.9 0 0 1 0-8.8l-6.8-5.3A23.9 23.9 0 0 0 0 24a23.9 23.9 0 0 0 3.8 11.7l6.8-5.3z" />
                    <path fill="#EA4335" d="M24 48c6.5 0 11.9-2.1 15.9-5.7l-7.9-6.1a13.9 13.9 0 0 1-20.9-5.5l-6.8 5.3C7.2 41.5 14.8 48 24 48z" />
                </svg>
                Daftar menggunakan Akun Google
            </button>



            <div className="flex items-center my-6">
                <div className="flex-grow h-px bg-gray-300"></div>
                <span className="px-4 text-gray-500 text-sm">Atau dengan</span>
                <div className="flex-grow h-px bg-gray-300"></div>
            </div>

            <p className="text-center mb-6">Membuat akun dengan melengkapi data di bawah ini</p>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="fullName" className="block text-gray-700 font-medium mb-2">
                        Nama Lengkap Sesuai KTP
                    </label>
                    <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0360d9] focus:border-transparent"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="phoneNumber" className="block text-gray-700 font-medium mb-2">
                        Nomor HP
                    </label>
                    <input
                        id="phoneNumber"
                        name="phoneNumber"
                        type="tel"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0360d9] focus:border-transparent"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                        Email
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0360d9] focus:border-transparent"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                        Kata Sandi
                    </label>
                    <div className="relative">
                        <input
                            id="password"
                            name="password"
                            type={showPassword ? "text" : "password"}
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0360d9] focus:border-transparent"
                            required
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute inset-y-0 right-0 px-4 flex items-center text-gray-700"
                        >
                            {showPassword ? (
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor">
                                    <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" />
                                    <circle cx="12" cy="12" r="3" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor">
                                    <path d="M17.94 17.94A10.35 10.35 0 0112 19c-6 0-11-7-11-7a18.37 18.37 0 014.35-4.94M12 5c6 0 11 7 11 7a18.37 18.37 0 01-4.35 4.94M3 3l18 18" />
                                </svg>
                            )}
                        </button>

                    </div>
                    <div className="mt-2 text-sm text-gray-600">
                        Kekuatan Kata Sandi: {passwordStrength}/4
                    </div>
                    <div className="flex gap-1 mt-2">
                        {[...Array(4)].map((_, index) => (
                            <div
                                key={index}
                                className={`h-2 flex-1 rounded ${index < passwordStrength
                                    ? passwordStrength === 1
                                        ? 'bg-red-500'
                                        : passwordStrength === 2
                                            ? 'bg-yellow-500'
                                            : 'bg-blue-500'
                                    : 'bg-gray-300'
                                    }`}
                            ></div>
                        ))}
                    </div>
                </div>

                <div>
                    <input
                        id="agreeTerms"
                        name="agreeTerms"
                        type="checkbox"
                        checked={formData.agreeTerms}
                        onChange={handleChange}
                        className="h-4 w-4 text-[#0360d9] focus:ring-[#0360d9] border-gray-300 rounded"
                        required
                    />
                    <label htmlFor="agreeTerms" className="ml-2 text-sm text-gray-700">
                        Saya menyetujui syarat dan ketentuan
                    </label>
                </div>

                <button
                    type="submit"
                    className="w-full bg-[#0360d9] text-white py-3 rounded font-medium hover:bg-blue-700 transition-colors"
                    disabled={!formData.agreeTerms}
                >
                    Daftar
                </button>

            </form>
        </div>
    )
}

export default ComponentRegistration
