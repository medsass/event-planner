export default function RecentEventsSection() {
  const events = [
    {
      image: true,
      title: "Vintage Wedding Ceremony",
      detail: "Vintage Wedding Ceremony",
      date: "26",
    },
    {
      image: true,
      title: "Kelly Birthday Event",
      detail: "Kelly Birthday Event",
      date: "",
    },
  ]

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold mb-12">Recent Event</h2>

      <div className="grid grid-cols-3 gap-8">
        {/* Large image card */}
        <div className="col-span-2">
          <div className="bg-gray-300 aspect-video rounded-lg mb-4" />
          <h3 className="text-xl font-semibold">{events[0].title}</h3>
        </div>

        {/* Right side event cards */}
        <div className="space-y-4">
          <div className="bg-white border border-gray-200 p-4 rounded-lg">
            <div className="bg-gray-300 h-24 rounded-lg mb-3" />
            <p className="text-sm font-semibold">{events[1].title}</p>
          </div>

          <div className="bg-white border border-gray-200 p-4 rounded-lg">
            <div className="text-3xl font-bold text-gray-400 mb-2">{events[0].date}</div>
            <p className="text-sm text-gray-600">Vintage Wedding Ceremony</p>
          </div>

          <div className="bg-white border border-gray-200 p-4 rounded-lg">
            <div className="bg-gray-300 h-20 rounded-lg mb-3" />
          </div>
        </div>
      </div>
    </section>
  )
}
