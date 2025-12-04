import Image from "next/image"

export default function CoveringAreaSection() {
  const areas = [
    { title: "Birthday Party Event", image: "/beautiful-birthday-party-celebration-with-decorati.jpg" },
    { title: "Wedding Party Event", image: "/elegant-wedding-ceremony-with-flowers-and-decorati.jpg" },
    { title: "Family Party Event", image: "/fun-family-gathering-celebration-with-food-and-act.jpg" },
  ]

  return (
    <section className="max-w-7xl mx-auto px-6 py-16" id="work">
      <h2 className="text-3xl font-bold mb-12 text-center">My Covering Area</h2>

      <div className="grid grid-cols-3 gap-8">
        {areas.map((area, index) => (
          <div key={index} className="flex flex-col items-center gap-4">
            <div className="relative w-40 h-40 rounded-full overflow-hidden shadow-lg">
              <Image src={area.image || "/placeholder.svg"} alt={area.title} fill className="object-cover" />
            </div>
            <p className="text-center text-gray-700 font-medium">{area.title}</p>
          </div>
        ))}
      </div>

      {/* Wavy divider */}
      <div className="mt-16">
        <svg
          className="w-full h-20"
          viewBox="0 0 1200 80"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: "#e9d5ff" }} />
              <stop offset="50%" style={{ stopColor: "#f472b6" }} />
              <stop offset="100%" style={{ stopColor: "#fca5a5" }} />
            </linearGradient>
          </defs>
          <path d="M0,40 Q300,20 600,40 T1200,40 L1200,80 L0,80" fill="url(#waveGrad)" />
        </svg>
      </div>
    </section>
  )
}
