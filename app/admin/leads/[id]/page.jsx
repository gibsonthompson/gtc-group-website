'use client'

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import EmailComposer from '../../components/EmailComposer'

const STATUS_OPTIONS = [
  { value: 'new', label: 'New', color: 'bg-blue-100 text-blue-700 border-blue-300' },
  { value: 'contacted', label: 'Contacted', color: 'bg-yellow-100 text-yellow-700 border-yellow-300' },
  { value: 'responded', label: 'Responded', color: 'bg-green-100 text-green-700 border-green-300' },
  { value: 'meeting_set', label: 'Meeting Set', color: 'bg-purple-100 text-purple-700 border-purple-300' },
  { value: 'client', label: 'Client', color: 'bg-emerald-100 text-emerald-700 border-emerald-300' },
  { value: 'not_interested', label: 'Not Interested', color: 'bg-gray-100 text-gray-500 border-gray-300' },
]

const SOURCE_OPTIONS = [
  { value: 'csv_import', label: 'CSV Import' },
  { value: 'linkedin', label: 'LinkedIn' },
  { value: 'google', label: 'Google Search' },
  { value: 'fmcsa_finder', label: 'FMCSA Finder' },
  { value: 'referral', label: 'Referral' },
  { value: 'website', label: 'Website' },
  { value: 'manual', label: 'Manual' },
  { value: 'other', label: 'Other' },
]

export default function LeadDetailPage() {
  const params = useParams()
  const router = useRouter()
  const leadId = params.id
  const [lead, setLead] = useState(null)
  const [outreachLog, setOutreachLog] = useState([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [deleting, setDeleting] = useState(false)
  const [successMsg, setSuccessMsg] = useState('')
  const [error, setError] = useState('')
  const [composerOpen, setComposerOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', company: '', dot_number: '', mc_number: '',
    fleet_size: '', area: '', source: 'manual', status: 'new', notes: '', next_follow_up: ''
  })

  useEffect(() => {
    if (leadId) { fetchLead(); fetchOutreach() }
  }, [leadId])

  const fetchLead = async () => {
    try {
      const r = await fetch('/api/admin/leads?id=' + leadId)
      const d = await r.json()
      if (d.lead) {
        setLead(d.lead)
        setFormData({
          name: d.lead.name || '', email: d.lead.email || '', phone: d.lead.phone || '',
          company: d.lead.company || '', dot_number: d.lead.dot_number || '', mc_number: d.lead.mc_number || '',
          fleet_size: d.lead.fleet_size || '', area: d.lead.area || '', source: d.lead.source || 'manual',
          status: d.lead.status || 'new', notes: d.lead.notes || '', next_follow_up: d.lead.next_follow_up || ''
        })
      } else {
        setError('Lead not found')
      }
    } catch (e) {
      setError('Failed to load')
    } finally {
      setLoading(false)
    }
  }

  const fetchOutreach = async () => {
    try {
      const r = await fetch('/api/admin/outreach?lead_id=' + leadId)
      const d = await r.json()
      if (d.outreach) setOutreachLog(d.outreach)
    } catch (e) {}
  }

  const handleSave = async () => {
    setSaving(true); setError(''); setSuccessMsg('')
    try {
      const r = await fetch('/api/admin/leads', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: leadId, ...formData, next_follow_up: formData.next_follow_up || null })
      })
      if (r.ok) {
        setSuccessMsg('Saved')
        fetchLead()
        setTimeout(() => setSuccessMsg(''), 3000)
      } else setError('Failed to save')
    } catch (e) {
      setError('Failed to save')
    } finally {
      setSaving(false)
    }
  }

  const handleStatusChange = async (newStatus) => {
    setFormData(p => ({ ...p, status: newStatus }))
    try {
      await fetch('/api/admin/leads', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: leadId, status: newStatus })
      })
      setSuccessMsg('Status updated')
      setTimeout(() => setSuccessMsg(''), 2000)
    } catch (e) {}
  }

  const handleDelete = async () => {
    if (!confirm('Delete this lead permanently?')) return
    setDeleting(true)
    try {
      await fetch('/api/admin/leads', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: leadId })
      })
      router.push('/admin/leads')
    } catch (e) {
      setError('Failed to delete')
      setDeleting(false)
    }
  }

  const formatDate = (d) => new Date(d).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit' })
  const timeAgo = (d) => {
    if (!d) return ''
    const s = Math.floor((Date.now() - new Date(d)) / 1000)
    if (s < 60) return 'just now'
    if (s < 3600) return Math.floor(s / 60) + 'm ago'
    if (s < 86400) return Math.floor(s / 3600) + 'h ago'
    if (s < 604800) return Math.floor(s / 86400) + 'd ago'
    return formatDate(d)
  }

  const canSendEmail = Boolean(formData.email && formData.email.includes('@'))
  const composerContact = lead ? { id: lead.id, name: lead.name, email: lead.email || '', phone: lead.phone || '', service_type: lead.company || '' } : null

  if (loading) return <div className="flex items-center justify-center min-h-[50vh]"><div className="w-8 h-8 border-3 border-[#0a1628] border-t-transparent rounded-full animate-spin" /></div>
  if (error && !lead) return <div className="px-4 py-8 text-center"><p className="text-gray-500 mb-4">{error}</p><Link href="/admin/leads" className="text-[#c9a227] font-medium text-sm">Back to Leads</Link></div>

  return (
    <div className="px-4 sm:px-6 py-6 sm:py-8">
      {/* Header */}
      <div className="mb-6">
        <Link href="/admin/leads" className="inline-flex items-center gap-1 text-sm text-gray-400 hover:text-[#0a1628] mb-3 transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
          Leads
        </Link>
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h1 className="text-xl sm:text-2xl font-bold text-[#0a1628] truncate" style={{ fontFamily: "'Libre Baskerville', Georgia, serif" }}>{lead?.name}</h1>
            <p className="text-sm text-gray-500">{lead?.company || 'No company'} · Added {timeAgo(lead?.created_at)}</p>
          </div>
          <button onClick={handleSave} disabled={saving} className="px-4 py-2 bg-[#0a1628] text-white text-sm font-medium rounded-lg hover:bg-[#162d54] disabled:opacity-50 flex-shrink-0 transition-colors">
            {saving ? 'Saving...' : 'Save'}
          </button>
        </div>
      </div>

      {successMsg && (
        <div className="mb-4 rounded-lg p-3 text-sm bg-green-50 border border-green-200 text-green-700 flex items-center gap-2">
          <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
          {successMsg}
        </div>
      )}

      {/* Quick Actions */}
      <div className="flex gap-2 mb-6">
        <button onClick={() => setComposerOpen(true)} disabled={!canSendEmail} className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-[#0a1628] text-white rounded-lg font-medium text-sm hover:bg-[#162d54] disabled:opacity-40 transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
          Email
        </button>
        {formData.phone && (
          <button onClick={() => window.location.href = 'tel:' + lead.phone} className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-[#c9a227] text-[#0a1628] rounded-lg font-medium text-sm hover:bg-[#d4b14a] transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            Call
          </button>
        )}
      </div>

      {/* Status Pipeline */}
      <div className="mb-6">
        <p className="text-xs text-gray-500 mb-2">Pipeline Stage</p>
        <div className="flex flex-wrap gap-2">
          {STATUS_OPTIONS.map((s) => (
            <button
              key={s.value}
              onClick={() => handleStatusChange(s.value)}
              className={'px-3 py-1.5 rounded-full text-xs font-medium transition-all border ' + (formData.status === s.value ? s.color + ' ring-2 ring-offset-1 ring-gray-300' : 'bg-gray-50 text-gray-500 border-gray-200')}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        {/* Main Column */}
        <div className="lg:col-span-2 space-y-5">
          {/* Lead Info */}
          <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6">
            <h3 className="font-semibold text-[#0a1628] mb-4 text-sm">Lead Information</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div><label className="block text-xs text-gray-500 mb-1">Name *</label><input type="text" value={formData.name} onChange={(e) => setFormData(p => ({ ...p, name: e.target.value }))} className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-[#c9a227]/30 focus:border-[#c9a227] outline-none" /></div>
              <div><label className="block text-xs text-gray-500 mb-1">Company</label><input type="text" value={formData.company} onChange={(e) => setFormData(p => ({ ...p, company: e.target.value }))} className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-[#c9a227]/30 focus:border-[#c9a227] outline-none" /></div>
              <div><label className="block text-xs text-gray-500 mb-1">Email</label><input type="email" value={formData.email} onChange={(e) => setFormData(p => ({ ...p, email: e.target.value }))} className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-[#c9a227]/30 focus:border-[#c9a227] outline-none" /></div>
              <div><label className="block text-xs text-gray-500 mb-1">Phone</label><input type="tel" value={formData.phone} onChange={(e) => setFormData(p => ({ ...p, phone: e.target.value }))} className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-[#c9a227]/30 focus:border-[#c9a227] outline-none" /></div>
              <div><label className="block text-xs text-gray-500 mb-1">DOT Number</label><input type="text" value={formData.dot_number} onChange={(e) => setFormData(p => ({ ...p, dot_number: e.target.value }))} className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-[#c9a227]/30 focus:border-[#c9a227] outline-none" /></div>
              <div><label className="block text-xs text-gray-500 mb-1">MC Number</label><input type="text" value={formData.mc_number} onChange={(e) => setFormData(p => ({ ...p, mc_number: e.target.value }))} className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-[#c9a227]/30 focus:border-[#c9a227] outline-none" /></div>
              <div><label className="block text-xs text-gray-500 mb-1">Fleet Size</label><input type="text" value={formData.fleet_size} onChange={(e) => setFormData(p => ({ ...p, fleet_size: e.target.value }))} placeholder="e.g., 5 trucks" className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-[#c9a227]/30 focus:border-[#c9a227] outline-none" /></div>
              <div><label className="block text-xs text-gray-500 mb-1">Area / Market</label><input type="text" value={formData.area} onChange={(e) => setFormData(p => ({ ...p, area: e.target.value }))} className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-[#c9a227]/30 focus:border-[#c9a227] outline-none" /></div>
              <div><label className="block text-xs text-gray-500 mb-1">Source</label><select value={formData.source} onChange={(e) => setFormData(p => ({ ...p, source: e.target.value }))} className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-[#c9a227]/30 focus:border-[#c9a227] outline-none">{SOURCE_OPTIONS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}</select></div>
            </div>
            {!canSendEmail && <p className="text-xs text-amber-600 mt-3 bg-amber-50 rounded-lg p-2">Add an email address to enable outreach</p>}
          </div>

          {/* Notes */}
          <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6">
            <h3 className="font-semibold text-[#0a1628] mb-3 text-sm">Internal Notes</h3>
            <textarea value={formData.notes} onChange={(e) => setFormData(p => ({ ...p, notes: e.target.value }))} rows={4} placeholder="Notes about this lead..." style={{ fontSize: '16px' }} className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-[#c9a227]/30 focus:border-[#c9a227] outline-none resize-none" />
          </div>

          {/* Outreach History */}
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="px-4 sm:px-6 py-4 border-b border-gray-100 flex items-center justify-between">
              <h3 className="font-semibold text-[#0a1628] text-sm">Outreach History <span className="text-gray-400 font-normal ml-1">({outreachLog.length})</span></h3>
              {canSendEmail && <button onClick={() => setComposerOpen(true)} className="text-sm text-[#c9a227] font-medium hover:underline">+ New Email</button>}
            </div>
            {outreachLog.length === 0 ? (
              <div className="p-8 text-center"><p className="text-gray-400 text-sm">No outreach sent yet</p></div>
            ) : (
              <div className="divide-y divide-gray-100">
                {outreachLog.map((entry) => (
                  <div key={entry.id} className="p-4 sm:px-6">
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 bg-[#0a1628]/5 rounded-md flex items-center justify-center flex-shrink-0">
                        <svg className="w-3.5 h-3.5 text-[#0a1628]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-medium text-gray-900 text-sm">{entry.subject || 'Email sent'}</p>
                        <p className="text-xs text-gray-400">{timeAgo(entry.created_at)}</p>
                      </div>
                    </div>
                    {entry.body && <p className="text-xs text-gray-500 mt-2 line-clamp-2 ml-10">{entry.body.substring(0, 200)}</p>}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-5">
          <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6">
            <h3 className="font-semibold text-[#0a1628] mb-3 text-sm">Follow-up</h3>
            <label className="block text-xs text-gray-500 mb-1">Next Follow-up Date</label>
            <input type="date" value={formData.next_follow_up} onChange={(e) => setFormData(p => ({ ...p, next_follow_up: e.target.value }))} className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-[#c9a227]/30 focus:border-[#c9a227] outline-none" />
            {formData.next_follow_up && (
              <div className="mt-3 bg-amber-50 border border-amber-200 rounded-lg p-3 flex items-center gap-2">
                <svg className="w-4 h-4 text-amber-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <p className="text-xs text-amber-700">Follow up on {new Date(formData.next_follow_up + 'T12:00:00').toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}</p>
              </div>
            )}
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6">
            <h3 className="font-semibold text-[#0a1628] mb-3 text-sm">Activity</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between"><span className="text-sm text-gray-500">Emails Sent</span><span className="text-sm font-semibold text-gray-800">{outreachLog.length}</span></div>
              <div className="flex items-center justify-between"><span className="text-sm text-gray-500">Last Contact</span><span className="text-sm font-semibold text-gray-800">{outreachLog.length > 0 ? timeAgo(outreachLog[0].created_at) : 'Never'}</span></div>
              <div className="flex items-center justify-between"><span className="text-sm text-gray-500">Added</span><span className="text-sm font-semibold text-gray-800">{Math.floor((Date.now() - new Date(lead?.created_at)) / 864e5)}d ago</span></div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-red-100 p-4 sm:p-6">
            <button onClick={handleDelete} disabled={deleting} className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-red-600 bg-red-50 rounded-lg hover:bg-red-100 disabled:opacity-50 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
              {deleting ? 'Deleting...' : 'Delete Lead'}
            </button>
          </div>
        </div>
      </div>

      <EmailComposer
        isOpen={composerOpen}
        onClose={() => setComposerOpen(false)}
        contact={composerContact}
        onSent={() => {
          // Mark lead as contacted
          fetch('/api/admin/leads', {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: leadId, status: 'contacted' })
          }).catch(() => {})
          // Close composer and go back to leads list
          setComposerOpen(false)
          router.push('/admin/leads')
        }}
      />
    </div>
  )
}