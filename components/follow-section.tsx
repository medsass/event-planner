export default function FollowSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">
        Follow my <span className="text-pink-500">Instagram</span>
        <br />
        @rakabir
      </h2>

      <div className="grid grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="bg-gray-300 aspect-square rounded-full" />
        ))}
      </div>
    </section>
  )
}
