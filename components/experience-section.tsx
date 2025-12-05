export default function ExperienceSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div>
          <h2 className="text-5xl font-bold mb-2">
            <span className="text-pink-500">15+ years,</span>
          </h2>
          <h3 className="text-3xl font-bold mb-8 text-black">driven by trust, love in this career.</h3>

          <p className="text-gray-600 leading-relaxed mb-8">
            Some placeholder text of color complexity that reflects upon my commitment to excellence in every event I
            organize. Love and trust are the foundation of all my work.
          </p>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gray-300 rounded-full" />
            <div>
              <p className="font-semibold text-sm">Rakshi Nakoor</p>
              <p className="text-xs text-gray-600">Event Organizer</p>
            </div>
          </div>
        </div>

        {/* Right side - decorative element */}
        <div className="flex items-center justify-center h-96">
          <svg className="w-48 h-48" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <style>{`
                .wavy-circle {
                  fill: none;
                  stroke: #f3f4f6;
                  stroke-width: 2;
                }
              `}</style>
            </defs>
            <path
              className="wavy-circle"
              d="M150,30 Q200,50 210,100 Q220,150 210,200 Q200,250 150,270 Q100,250 90,200 Q80,150 90,100 Q100,50 150,30"
            />
          </svg>
        </div>
      </div>
    </section>
  )
}
