"use client"

import Image from "next/image"

export default function FollowSection() {
  const instagramPhotos = [
    "/instagram-photo-1.jpg",
    "/instagram-photo-2.jpg",
    "/instagram-photo-3.jpg",
    "/instagram-photo-4.jpg",
  ]

  return (
    <section className="max-w-7xl mx-auto px-6 py-16" id="contact">
      <h2 className="text-3xl font-bold text-center mb-12">
        Follow my <span className="text-pink-500">Instagram</span>
        <br />
        @rakabir
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {instagramPhotos.map((photo, index) => (
          <div
            key={index}
            className="relative aspect-square rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group cursor-pointer"
          >
            <Image
              src={photo || "/placeholder.svg"}
              alt={`Instagram photo ${index + 1}`}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
