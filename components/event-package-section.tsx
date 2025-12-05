import { ChevronRight } from "lucide-react"

export default function EventPackageSection() {
  const packages = [
    {
      price: "$89.00",
      features: ["Venue coordination", "Guest management", "Basic decor setup", "Timeline planning"],
    },
    {
      price: "$69.00",
      features: ["Guest coordination", "Catering assistance", "Vendor management", "Day-of coordination"],
    },
    {
      price: "$129.00",
      features: ["Full event planning", "Vendor management", "Budget tracking", "Complete coordination"],
    },
  ]

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="mb-12">
        <p className="text-pink-500 font-semibold mb-2">Perfect plan</p>
        <h2 className="text-4xl font-bold">
          Event Package
          <br />
          Choose your desire one
        </h2>
      </div>

      <div className="space-y-6">
        {packages.map((pkg, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h3 className="text-3xl font-bold mb-4">{pkg.price}</h3>
                <ul className="space-y-2">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-600 text-sm flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <button className="bg-black text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-gray-800">
                Choose
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
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
            <linearGradient id="waveGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: "#e9d5ff" }} />
              <stop offset="50%" style={{ stopColor: "#f472b6" }} />
              <stop offset="100%" style={{ stopColor: "#fca5a5" }} />
            </linearGradient>
          </defs>
          <path d="M0,40 Q300,20 600,40 T1200,40 L1200,80 L0,80" fill="url(#waveGrad2)" />
        </svg>
      </div>
    </section>
  )
}
