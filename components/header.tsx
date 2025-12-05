"use client"

import { Settings } from "lucide-react"

export default function Header() {
  return (
<<<<<<< HEAD
    <header className="border-b border-gray-200 bg-white"  >
=======
    <header className="border-b border-gray-200 bg-white">
>>>>>>> aefb7172 (commit)
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="w-6 h-6 bg-black rounded-full flex-shrink-0" />

        {/* Navigation */}
        <nav className="flex gap-8">
<<<<<<< HEAD
          <a href="#home" className="text-sm text-gray-600 hover:text-black">
            Home
          </a>
          <a href="#work" className="text-sm text-gray-600 hover:text-black">
            Work
          </a>
          <a href="#about" className="text-sm text-gray-600 hover:text-black">
            About
          </a>
          <a href="#contact" className="text-sm text-gray-600 hover:text-black">
=======
          <a href="#" className="text-sm text-gray-600 hover:text-black">
            Home
          </a>
          <a href="#" className="text-sm text-gray-600 hover:text-black">
            Work
          </a>
          <a href="#" className="text-sm text-gray-600 hover:text-black">
            About
          </a>
          <a href="#" className="text-sm text-gray-600 hover:text-black">
>>>>>>> aefb7172 (commit)
            Contact
          </a>
        </nav>

        {/* Settings Icon */}
        <Settings className="w-5 h-5 text-gray-400" />
      </div>
    </header>
  )
}
