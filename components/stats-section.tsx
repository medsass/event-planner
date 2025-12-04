export default function StatsSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 flex items-center gap-8">
      <div>
        <h3 className="text-5xl font-bold">130+</h3>
        <p className="text-gray-600 text-sm mt-2">Events Organized</p>
      </div>

      <div className="flex gap-3">
        <div className="w-12 h-12 bg-gray-300 rounded-full" />
        <div className="w-12 h-12 bg-gray-300 rounded-full" />
        <div className="w-12 h-12 bg-gray-300 rounded-full" />
      </div>
    </section>
  )
}
