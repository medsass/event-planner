"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import Image from "next/image"

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We offer comprehensive event planning services including venue selection, catering coordination, decoration, entertainment booking, and full-day event management.",
  },
  {
    question: "What's your typical turnaround time?",
    answer:
      "We typically require 4-6 weeks for event planning, though we can accommodate rush requests for an additional fee.",
  },
  {
    question: "Do you work within all budgets?",
    answer:
      "Yes! We customize packages to fit your budget. From intimate gatherings to large-scale celebrations, we've got you covered.",
  },
  {
    question: "How do you handle last-minute changes?",
    answer:
      "We're flexible and experienced in managing day-of changes. Our team is always prepared to adapt and ensure your event runs smoothly.",
  },
  {
    question: "What's included in the event planning package?",
    answer:
      "Our packages include consultation, vendor coordination, timeline management, on-site coordination, and post-event follow-up.",
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="max-w-6xl mx-auto px-6 py-20" id="about">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div className="h-96 relative rounded-2xl overflow-hidden">
          <Image src="/professional-event-planner-consulting-with-clients.jpg" alt="FAQ" fill className="object-cover" />
        </div>

        <div>
          <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 mb-8">Get answers to common questions about our services</p>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-4 flex justify-between items-center hover:bg-gray-50 transition"
                >
                  <span className="font-medium text-gray-900 text-left">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-600 transition-transform ${openIndex === index ? "rotate-180" : ""}`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 text-gray-600">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
