import Image from "next/image"

export default function RecentEventsSection() {
  const events = [
    {
      image: "/vintage-wedding-ceremony-with-elegant-decorations.jpg",
      title: "Vintage Wedding Ceremony",
      detail: "Vintage Wedding Ceremony",
      date: "26",
    },
    {
      image: "/colorful-birthday-party-celebration.jpg",
      title: "Kelly Birthday Event",
      detail: "Kelly Birthday Event",
      date: "",
    },
  ]

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold mb-12">Recent Event</h2>

      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <div className="relative bg-gray-300 aspect-video rounded-lg mb-4 overflow-hidden">
            <Image src={events[0].image || "/placeholder.svg"} alt={events[0].title} fill className="object-cover" />
          </div>
          <h3 className="text-xl font-semibold">{events[0].title}</h3>
        </div>

        {/* Right side event cards */}
        <div className="space-y-4">
          <div className="bg-white border border-gray-200 p-4 rounded-lg">
            <div className="relative bg-gray-300 h-24 rounded-lg mb-3 overflow-hidden">
              <Image src={events[1].image || "/placeholder.svg"} alt={events[1].title} fill className="object-cover" />
            </div>
            <p className="text-sm font-semibold">{events[1].title}</p>
          </div>

          <div className="bg-white border border-gray-200 p-4 rounded-lg">
            <div className="text-3xl font-bold text-gray-400 mb-2">{events[0].date}</div>
            <p className="text-sm text-gray-600">Vintage Wedding Ceremony</p>
          </div>

          <div className="bg-white border border-gray-200 p-4 rounded-lg">
            <div className="relative bg-gray-300 h-20 rounded-lg mb-3 overflow-hidden">
              <Image src="/wedding-family-portrait.jpg" alt="Recent event" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
