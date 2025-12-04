import { Check } from "lucide-react"
import Image from "next/image"

const services = [
  {
    title: "Full Event Planning",
    description: "Complete end-to-end event management from concept to execution",
    features: ["Venue Selection", "Vendor Coordination", "Timeline Management", "Day-of Coordination"],
    image: "/luxury-wedding-event-planning.jpg",
  },
  {
    title: "Partial Planning",
    description: "We handle specific aspects of your event while you manage others",
    features: ["Catering Coordination", "Decoration & Design", "Entertainment Booking", "Guest Management"],
    image: "/wedding-decoration-flowers-setup.jpg",
  },
  {
    title: "Day-of Coordination",
    description: "Professional on-site management and execution of your event",
    features: ["Timeline Management", "Vendor Oversight", "Guest Coordination", "Problem Solving"],
    image: "/event-coordinator-managing-wedding-ceremony.jpg",
  },
  {
    title: "Custom Packages",
    description: "Tailored solutions designed specifically for your needs and budget",
    features: ["Flexible Options", "Budget Planning", "Customizable Services", "Personal Touch"],
    image: "/custom-event-celebration-party.jpg",
  },
]

export default function ServicesSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Our Services</h2>
        <p className="text-gray-600 text-lg">Professional event planning solutions tailored to your needs</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="overflow-hidden border border-gray-200 rounded-2xl hover:border-pink-300 hover:shadow-lg transition"
          >
            <div className="h-48 relative overflow-hidden bg-gray-200">
              <Image
                src={service.image || "/placeholder.svg"}
                alt={service.title}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-8">
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-pink-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
