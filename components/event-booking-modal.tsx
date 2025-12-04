"use client"

import type React from "react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

import { collection, addDoc, serverTimestamp } from "firebase/firestore"
import { db } from "@/lib/firebase"

export default function EventBookingModal({
  open,
  onOpenChange,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    eventType: "",
    date: "",
    description: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  // ✅ SUBMIT TO FIRESTORE (NO IMAGES)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      await addDoc(collection(db, "event_requests"), {
        ...formData,
        createdAt: serverTimestamp(),
      })

      alert("✅ Event saved successfully!")
      onOpenChange(false)
      setFormData({ name: "", email: "", eventType: "", date: "", description: "" })

    } catch (error) {
      console.error(error)
      alert("❌ Error saving data")
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl rounded-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            Plan Your Event
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-6">

          <Input
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />

          <Input
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />

          <select
            name="eventType"
            value={formData.eventType}
            onChange={handleInputChange}
            required
            className="w-full p-3 rounded-lg border"
          >
            <option value="">Select event type</option>
            <option value="wedding">Wedding</option>
            <option value="birthday">Birthday</option>
            <option value="corporate">Corporate</option>
            <option value="family">Family</option>
          </select>

          <Input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            required
          />

          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Event description"
            rows={4}
            className="w-full p-3 rounded-lg border"
          />

          <Button type="submit" className="w-full">
            Send Event
          </Button>

        </form>
      </DialogContent>
    </Dialog>
  )
}
