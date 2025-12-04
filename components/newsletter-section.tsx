"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"

export default function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Newsletter signup:", email)
    setSubscribed(true)
    setTimeout(() => {
      setEmail("")
      setSubscribed(false)
    }, 2000)
  }

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image src="/elegant-newsletter-subscription-background-events.jpg" alt="Background" fill className="object-cover opacity-20" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">Stay Updated</h2>
        <p className="text-gray-700 mb-8 text-lg">
          Subscribe to our newsletter for event tips, inspiration, and exclusive offers
        </p>

        <form onSubmit={handleSubmit} className="flex gap-3 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-full border-gray-200 flex-1"
            required
          />
          <Button type="submit" className="bg-black text-white hover:bg-gray-800 rounded-full px-8">
            {subscribed ? "Subscribed!" : "Subscribe"}
          </Button>
        </form>

        <p className="text-sm text-gray-500 mt-4">No spam, just great content. Unsubscribe anytime.</p>
      </div>
    </section>
  )
}
