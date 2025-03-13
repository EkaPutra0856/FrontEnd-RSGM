"use client"

import { useState } from "react"
import Link from "next/link"

const ComponentLandingPage = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="lg:hidden">
      <button onClick={toggleMenu} className="flex items-center p-2" aria-label={isOpen ? "Close menu" : "Open menu"}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {isOpen ? (
            <>
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </>
          ) : (
            <>
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </>
          )}
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-md z-50">
          <div className="p-4 flex flex-col gap-4">
            <Link
              href="/penelitian"
              className="p-2 hover:bg-gray-100 rounded font-medium"
              onClick={() => setIsOpen(false)}
            >
              Penelitian
            </Link>
            <Link href="/magang" className="p-2 hover:bg-gray-100 rounded font-medium" onClick={() => setIsOpen(false)}>
              Magang
            </Link>
            <Link
              href="/login"
              className="p-2 bg-[#0360d9] text-white rounded font-medium text-center"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

export default ComponentLandingPage