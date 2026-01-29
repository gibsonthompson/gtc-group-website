'use client'

import { useState } from 'react'
import { DayPicker } from 'react-day-picker'
import { format, addDays, isBefore, startOfToday } from 'date-fns'
import 'react-day-picker/dist/style.css'

const TIME_SLOTS = [
  '9:00 AM',
  '9:30 AM',
  '10:00 AM',
  '10:30 AM',
  '11:00 AM',
  '11:30 AM',
  '1:00 PM',
  '1:30 PM',
  '2:00 PM',
  '2:30 PM',
  '3:00 PM',
  '3:30 PM',
  '4:00 PM',
  '4:30 PM',
]

const FLEET_SIZES = [
  '1-5 trucks',
  '6-15 trucks',
  '16-30 trucks',
  '31-50 trucks',
  '51-100 trucks',
  '100+ trucks',
]

// Generate "booked" slots (20% busy) - seeded by date for consistency
function getBookedSlots(date: Date): string[] {
  const seed = date.getDate() + date.getMonth() * 31
  const booked: string[] = []
  
  TIME_SLOTS.forEach((slot, index) => {
    // Use a simple hash to determine if slot is "booked"
    const hash = (seed * 7 + index * 13) % 100
    if (hash < 20) { // 20% chance of being booked
      booked.push(slot)
    }
  })
  
  return booked
}

export default function BookingForm() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>()
  const [selectedTime, setSelectedTime] = useState<string>('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    fleetSize: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const today = startOfToday()
  const bookedSlots = selectedDate ? getBookedSlots(selectedDate) : []

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    if (!selectedDate || !selectedTime) {
      setError('Please select a date and time')
      setIsSubmitting(false)
      return
    }

    try {
      const response = await fetch('/api/book-call', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          preferredDate: format(selectedDate, 'yyyy-MM-dd'),
          preferredTime: selectedTime,
        }),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Something went wrong')
      }

      setSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to submit. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="bg-cream-100 rounded-lg p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-display text-2xl text-navy-900 mb-2">You&apos;re All Set!</h3>
        <p className="text-gray-600 mb-4">
          Your call is scheduled for <strong>{selectedDate && format(selectedDate, 'MMMM d, yyyy')}</strong> at <strong>{selectedTime}</strong>.
        </p>
        <p className="text-gray-500 text-sm">
          We&apos;ve sent a confirmation to {formData.email}. We&apos;ll call you at the scheduled time.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Calendar & Time Selection */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Calendar */}
        <div>
          <label className="block text-sm font-semibold text-navy-900 mb-3">Select a Date</label>
          <div className="bg-white rounded-lg border border-gray-200 p-4 inline-block">
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              disabled={[
                { before: addDays(today, 1) }, // Disable today and past
                { dayOfWeek: [0, 6] }, // Disable weekends
              ]}
              modifiers={{
                booked: (date) => getBookedSlots(date).length >= TIME_SLOTS.length * 0.8,
              }}
              modifiersStyles={{
                booked: { color: '#9ca3af' },
              }}
            />
          </div>
        </div>

        {/* Time Slots */}
        <div>
          <label className="block text-sm font-semibold text-navy-900 mb-3">
            Select a Time {selectedDate && `- ${format(selectedDate, 'MMM d')}`}
          </label>
          {selectedDate ? (
            <div className="grid grid-cols-2 gap-2">
              {TIME_SLOTS.map((slot) => {
                const isBooked = bookedSlots.includes(slot)
                const isSelected = selectedTime === slot
                
                return (
                  <button
                    key={slot}
                    type="button"
                    disabled={isBooked}
                    onClick={() => setSelectedTime(slot)}
                    className={`py-3 px-4 rounded-md text-sm font-medium transition-all ${
                      isBooked
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed line-through'
                        : isSelected
                        ? 'bg-gold-500 text-navy-900 ring-2 ring-gold-500 ring-offset-2'
                        : 'bg-white border border-gray-200 text-navy-900 hover:border-gold-500 hover:bg-cream-100'
                    }`}
                  >
                    {slot}
                  </button>
                )
              })}
            </div>
          ) : (
            <div className="bg-gray-50 rounded-lg p-8 text-center text-gray-500">
              <svg className="w-12 h-12 mx-auto mb-3 text-gray-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
              <p>Select a date to see available times</p>
            </div>
          )}
        </div>
      </div>

      {/* Contact Info */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-navy-900 mb-2">Full Name *</label>
          <input
            type="text"
            id="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 rounded-md border border-gray-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all"
            placeholder="John Smith"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-navy-900 mb-2">Email Address *</label>
          <input
            type="email"
            id="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 rounded-md border border-gray-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all"
            placeholder="john@company.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-navy-900 mb-2">Phone Number *</label>
          <input
            type="tel"
            id="phone"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-3 rounded-md border border-gray-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all"
            placeholder="(555) 123-4567"
          />
        </div>
        <div>
          <label htmlFor="fleetSize" className="block text-sm font-semibold text-navy-900 mb-2">Fleet Size *</label>
          <select
            id="fleetSize"
            required
            value={formData.fleetSize}
            onChange={(e) => setFormData({ ...formData, fleetSize: e.target.value })}
            className="w-full px-4 py-3 rounded-md border border-gray-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all bg-white"
          >
            <option value="">Select fleet size</option>
            {FLEET_SIZES.map((size) => (
              <option key={size} value={size}>{size}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-navy-900 mb-2">
          What would you like to discuss? <span className="font-normal text-gray-500">(optional)</span>
        </label>
        <textarea
          id="message"
          rows={3}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 rounded-md border border-gray-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all resize-none"
          placeholder="Tell us about your current situation and goals..."
        />
      </div>

      {/* Error */}
      {error && (
        <div className="bg-red-50 text-red-700 px-4 py-3 rounded-md text-sm">
          {error}
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting || !selectedDate || !selectedTime}
        className="btn btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:transform-none"
      >
        {isSubmitting ? (
          <>
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Scheduling...
          </>
        ) : (
          <>
            Schedule My Call
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </>
        )}
      </button>

      <p className="text-center text-sm text-gray-500">
        By scheduling, you agree to receive a call at the selected time. No spam, ever.
      </p>
    </form>
  )
}
