'use client'

import { useState } from 'react'
import { DayPicker } from 'react-day-picker'
import { format, addDays, startOfToday } from 'date-fns'
import 'react-day-picker/dist/style.css'

const TIME_SLOTS = [
  '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
  '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM',
]

const FLEET_SIZES = [
  '20-50 trucks', '51-100 trucks', '101-200 trucks', '200+ trucks',
]

function getBookedSlots(date: Date): string[] {
  const seed = date.getDate() + date.getMonth() * 31
  const booked: string[] = []
  TIME_SLOTS.forEach((slot, index) => {
    const hash = (seed * 7 + index * 13) % 100
    if (hash < 20) booked.push(slot)
  })
  return booked
}

export default function BookingForm() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>()
  const [selectedTime, setSelectedTime] = useState('')
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', fleetSize: '', message: '' })
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
        body: JSON.stringify({ ...formData, preferredDate: format(selectedDate, 'yyyy-MM-dd'), preferredTime: selectedTime }),
      })
      const result = await response.json()
      if (!response.ok) throw new Error(result.error || 'Something went wrong')
      setSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to submit. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="bg-cream-100 p-8 text-center">
        <div className="w-14 h-14 bg-green-100 flex items-center justify-center mx-auto mb-4">
          <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-display text-[22px] font-black text-navy-900 tracking-[-0.02em] mb-2">You&apos;re All Set</h3>
        <p className="font-display text-[14px] text-navy-900/55">
          Your call is scheduled for <strong>{selectedDate && format(selectedDate, 'MMMM d, yyyy')}</strong> at <strong>{selectedTime}</strong>.
        </p>
        <p className="font-display text-[13px] text-navy-900/35 mt-2">
          Confirmation sent to {formData.email}.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Calendar & Time */}
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <label className="block font-display text-[13px] font-bold text-navy-900 mb-3 tracking-[-0.01em]">Select a Date</label>
          <div className="bg-cream-50 border border-navy-900/[0.06] p-4 inline-block">
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              disabled={[{ before: addDays(today, 1) }, { dayOfWeek: [0, 6] }]}
            />
          </div>
        </div>

        <div>
          <label className="block font-display text-[13px] font-bold text-navy-900 mb-3 tracking-[-0.01em]">
            Select a Time {selectedDate && <span className="font-normal text-navy-900/40">— {format(selectedDate, 'MMM d')}</span>}
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
                    className={`py-3 px-4 font-display text-[13px] font-semibold transition-all ${
                      isBooked
                        ? 'bg-navy-900/[0.03] text-navy-900/20 cursor-not-allowed line-through'
                        : isSelected
                        ? 'bg-gold-500 text-navy-950'
                        : 'bg-white border border-navy-900/[0.08] text-navy-900 hover:border-gold-500'
                    }`}
                  >
                    {slot}
                  </button>
                )
              })}
            </div>
          ) : (
            <div className="bg-cream-50 border border-navy-900/[0.06] p-8 text-center">
              <svg className="w-10 h-10 mx-auto mb-3 text-navy-900/15" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
              <p className="font-display text-[13px] text-navy-900/30">Select a date to see available times</p>
            </div>
          )}
        </div>
      </div>

      {/* Contact Info */}
      <div className="grid md:grid-cols-2 gap-5">
        {[
          { id: 'name', label: 'Full Name', type: 'text', placeholder: 'John Smith', key: 'name' as const },
          { id: 'email', label: 'Email Address', type: 'email', placeholder: 'john@company.com', key: 'email' as const },
          { id: 'phone', label: 'Phone Number', type: 'tel', placeholder: '(555) 123-4567', key: 'phone' as const },
        ].map((field) => (
          <div key={field.id}>
            <label htmlFor={field.id} className="block font-display text-[13px] font-bold text-navy-900 mb-2 tracking-[-0.01em]">{field.label} *</label>
            <input
              type={field.type}
              id={field.id}
              required
              value={formData[field.key]}
              onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
              className="w-full px-4 py-3 font-display text-[14px] border border-navy-900/[0.08] focus:border-gold-500 focus:ring-1 focus:ring-gold-500/20 outline-none transition-all bg-white"
              placeholder={field.placeholder}
            />
          </div>
        ))}
        <div>
          <label htmlFor="fleetSize" className="block font-display text-[13px] font-bold text-navy-900 mb-2 tracking-[-0.01em]">Fleet Size *</label>
          <select
            id="fleetSize"
            required
            value={formData.fleetSize}
            onChange={(e) => setFormData({ ...formData, fleetSize: e.target.value })}
            className="w-full px-4 py-3 font-display text-[14px] border border-navy-900/[0.08] focus:border-gold-500 focus:ring-1 focus:ring-gold-500/20 outline-none transition-all bg-white"
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
        <label htmlFor="message" className="block font-display text-[13px] font-bold text-navy-900 mb-2 tracking-[-0.01em]">
          What would you like to discuss? <span className="font-normal text-navy-900/30">(optional)</span>
        </label>
        <textarea
          id="message"
          rows={3}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 font-display text-[14px] border border-navy-900/[0.08] focus:border-gold-500 focus:ring-1 focus:ring-gold-500/20 outline-none transition-all resize-none bg-white"
          placeholder="Current challenges, lanes you want optimized, cost areas to review..."
        />
      </div>

      {error && (
        <div className="bg-red-50 text-red-700 px-4 py-3 font-display text-[13px]">{error}</div>
      )}

      <button
        type="submit"
        disabled={isSubmitting || !selectedDate || !selectedTime}
        className="btn btn-primary w-full disabled:opacity-40 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Scheduling...' : 'Schedule My Call'}
      </button>

      <p className="text-center font-display text-[12px] text-navy-900/30">
        By scheduling, you agree to receive a call at the selected time.
      </p>
    </form>
  )
}