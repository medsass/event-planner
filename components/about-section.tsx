"use client"

import { useState } from "react"

export default function AboutSection() {
  const [hovered, setHovered] = useState(false)

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid grid-cols-2 gap-12 items-center">
        {/* Wavy circle */}
        <div className="flex items-center justify-center h-96">
          <div
            className="relative w-64 h-64"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <svg className="w-full h-full" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <style>{`
                  .wavy-path {
                    fill: none;
                    stroke: #e5e7eb;
                    stroke-width: 2;
                  }
                `}</style>
              </defs>
              <path
                className="wavy-path"
                d="M150,50 Q180,70 180,150 Q180,230 150,250 Q120,230 120,150 Q120,70 150,50"
              />
              <circle cx="150" cy="150" r="8" fill="#e5e7eb" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-center text-gray-700 font-medium">About Me</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div>
          <h2 className="text-3xl font-bold mb-4">About My Experience</h2>
          <p className="text-gray-600 leading-relaxed">
            Let me share my journey in event planning and what drives my passion for creating memorable experiences.
          </p>
        </div>
      </div>
    </section>
  )
}
