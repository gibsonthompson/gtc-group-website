'use client'

import { useState } from 'react'

export default function WebsiteSignupForm() {
  const [formData, setFormData] = useState({ companyName: '', contactName: '', email: '', phone: '', currentWebsite: '', notes: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      const response = await fetch('/api/website-signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
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
        <h3 className="font-display text-[22px] font-black text-navy-900 tracking-[-0.02em] mb-2">Request Received</h3>
        <p className="font-display text-[14px] text-navy-900/55">
          We&apos;ll review your information and reach out within 1 business day.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid md:grid-cols-2 gap-5">
        {[
          { id: 'companyName', label: 'Company Name', placeholder: 'ABC Trucking LLC', key: 'companyName' as const },
          { id: 'contactName', label: 'Contact Name', placeholder: 'John Smith', key: 'contactName' as const },
          { id: 'email', label: 'Email Address', placeholder: 'john@abctrucking.com', key: 'email' as const, type: 'email' },
          { id: 'phone', label: 'Phone Number', placeholder: '(555) 123-4567', key: 'phone' as const, type: 'tel' },
        ].map((field) => (
          <div key={field.id}>
            <label htmlFor={field.id} className="block font-display text-[13px] font-bold text-navy-900 mb-2 tracking-[-0.01em]">{field.label} *</label>
            <input
              type={field.type || 'text'}
              id={field.id}
              required
              value={formData[field.key]}
              onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
              className="w-full px-4 py-3 font-display text-[14px] border border-navy-900/[0.08] focus:border-gold-500 focus:ring-1 focus:ring-gold-500/20 outline-none transition-all bg-white"
              placeholder={field.placeholder}
            />
          </div>
        ))}
      </div>

      <div>
        <label htmlFor="currentWebsite" className="block font-display text-[13px] font-bold text-navy-900 mb-2 tracking-[-0.01em]">
          Current Website <span className="font-normal text-navy-900/30">(if any)</span>
        </label>
        <input
          type="url"
          id="currentWebsite"
          value={formData.currentWebsite}
          onChange={(e) => setFormData({ ...formData, currentWebsite: e.target.value })}
          className="w-full px-4 py-3 font-display text-[14px] border border-navy-900/[0.08] focus:border-gold-500 focus:ring-1 focus:ring-gold-500/20 outline-none transition-all bg-white"
          placeholder="https://www.abctrucking.com"
        />
      </div>

      <div>
        <label htmlFor="notes" className="block font-display text-[13px] font-bold text-navy-900 mb-2 tracking-[-0.01em]">
          Tell us about your needs <span className="font-normal text-navy-900/30">(optional)</span>
        </label>
        <textarea
          id="notes"
          rows={3}
          value={formData.notes}
          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
          className="w-full px-4 py-3 font-display text-[14px] border border-navy-900/[0.08] focus:border-gold-500 focus:ring-1 focus:ring-gold-500/20 outline-none transition-all resize-none bg-white"
          placeholder="What are you looking for in a new website?"
        />
      </div>

      {error && (
        <div className="bg-red-50 text-red-700 px-4 py-3 font-display text-[13px]">{error}</div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn btn-primary w-full disabled:opacity-40 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Submitting...' : 'Request My Website'}
      </button>
    </form>
  )
}