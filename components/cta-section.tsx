export default function CTASection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="flex items-center justify-center">
        <div className="relative w-full max-w-2xl h-64">
          <svg className="w-full h-full" viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <style>{`
                .cta-path {
                  fill: none;
                  stroke: #f3f4f6;
                  stroke-width: 2;
                }
              `}</style>
            </defs>
            <ellipse className="cta-path" cx="300" cy="150" rx="280" ry="140" />
            {/* Decorative dots */}
            {[
              [100, 80],
              [500, 100],
              [80, 180],
              [520, 180],
              [120, 240],
              [480, 240],
            ].map((pos, idx) => (
              <circle key={idx} cx={pos[0]} cy={pos[1]} r="6" fill="#d1d5db" opacity="0.4" />
            ))}
          </svg>

          {/* Content overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
            <h2 className="text-4xl font-bold mb-4">
              Event in mind?
              <br />
              <span className="text-black">Let's work together</span>
              <br />
              <span className="text-black">to execute.</span>
            </h2>
            <button className="bg-black text-white px-8 py-3 rounded-full text-sm font-medium mt-6 hover:bg-gray-800">
              Get in touch
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
