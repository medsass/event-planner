export default function ContactInfoHeader() {
  return (
    <div className="bg-gray-50 border-b border-gray-200 py-3">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-sm">
        <div className="flex gap-6 text-gray-600">
          <div className="flex items-center gap-2">
            <span className="font-medium">a📞</span>
            <a href="tel:+1234567890" className="hover:text-black">
              +1 (234) 567-890
            </a> 
          </div>
          <div className="flex items-center gap-2">
            <span className="font-medium">✉️</span>
            <a href="mailto:hello@eventplanner.com" className="hover:text-black">
              hello@eventplanner.com
            </a>
          </div>
        </div>
        <div className="flex gap-4">
          <a href="#" className="text-gray-600 hover:text-black">
            Instagram
          </a>
          <a href="#" className="text-gray-600 hover:text-black">
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  )
}
