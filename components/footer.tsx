export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-600">© 2025 Your Name. All rights reserved.</p>

          <nav className="flex gap-6">
            <a href="#" className="text-sm text-gray-600 hover:text-black">
              Home
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-black">
              About
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-black">
              Contact
            </a>
          </nav>

          <div className="w-6 h-6 bg-black rounded-full" />
        </div>
      </div>
    </footer>
  )
}
