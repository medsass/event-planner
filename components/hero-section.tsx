"use client"

import { useState } from "react"
import { ChevronRight } from "lucide-react"
import Image from "next/image"
import EventBookingModal from "@/components/event-booking-modal"

export default function HeroSection() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <section className="max-w-7xl mx-auto px-6 py-12" id="home">
        <div className="grid grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative aspect-square rounded-lg overflow-hidden">
            <Image
              src="/professional-event-planner-with-elegant-event-setu.jpg"
              alt="Event planner organizing event"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <p className="text-sm text-gray-600 mb-2">
              Hi! 👋 <span className="text-pink-500">Rakshi Nakoor</span>
            </p>

            <h1 className="text-5xl font-bold mb-4 leading-tight">
              <span className="text-pink-500">Organiser,</span> Event planner & your partner
            </h1>

            <p className="text-gray-600 mb-8 leading-relaxed">
              A young & passionate event organizer, creating unforgettable moments for Brands.
            </p>

            <div className="flex items-center gap-4 mb-8">
              <button
                onClick={() => setModalOpen(true)}
                className="bg-black text-white px-8 py-3 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-gray-800"
              >
                Let's Start
                <ChevronRight className="w-4 h-4" />
              </button>
              <button className="text-gray-400 hover:text-gray-600">✦</button>
            </div>

            {/* Pagination dots */}
            <div className="flex gap-2">
              <div className="w-3 h-3 bg-gray-400 rounded-full" />
              <div className="w-3 h-3 bg-gray-300 rounded-full" />
              <div className="w-3 h-3 bg-gray-300 rounded-full" />
            </div>
          </div>
        </div>
      </section>

      <EventBookingModal open={modalOpen} onOpenChange={setModalOpen} />
    </>
  )
}
