export default function TestimonialSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="flex items-center justify-center mb-12">
        <div className="relative w-96 h-72">
          <svg className="w-full h-full" viewBox="0 0 400 350" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <style>{`
                .testimonial-path {
                  fill: none;
                  stroke: #f3f4f6;
                  stroke-width: 2;
                }
              `}</style>
            </defs>
            <path
              className="testimonial-path"
              d="M200,50 Q280,80 300,150 Q310,200 280,250 Q250,280 200,300 Q150,280 120,250 Q90,200 100,150 Q120,80 200,50"
            />
            {/* Decorative dots */}
            <circle cx="80" cy="100" r="6" fill="#d1d5db" opacity="0.5" />
            <circle cx="320" cy="120" r="6" fill="#d1d5db" opacity="0.5" />
            <circle cx="60" cy="200" r="8" fill="#d1d5db" opacity="0.3" />
            <circle cx="350" cy="200" r="6" fill="#d1d5db" opacity="0.5" />
            <circle cx="100" cy="280" r="6" fill="#d1d5db" opacity="0.5" />
            <circle cx="300" cy="280" r="8" fill="#d1d5db" opacity="0.3" />
          </svg>

          {/* Content overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
            <div className="bg-pink-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold mb-4">
              M
            </div>
            <p className="text-gray-800 font-semibold leading-relaxed">
              "Get Quick solutions with great quality—<span className="text-pink-500">recommend</span> that's
              unequivocal"
            </p>
          </div>
        </div>
      </div>

      <p className="text-center text-sm text-gray-500">@rakhitweets</p>
    </section>
  )
}
