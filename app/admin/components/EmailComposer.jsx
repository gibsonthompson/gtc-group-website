'use client'

import { useState, useEffect } from 'react'

const GTC_LOGO_URL = 'https://globaltransportconsultinggroup.com/logo.png'

function generateEmailHTML(subject, body) {
  const bodyHTML = body.replace(/\n\n/g, '</p><p style="margin:0 0 16px 0;color:#374151;font-size:15px;line-height:1.7;">').replace(/\n/g, '<br/>')
  return `<!DOCTYPE html>
<html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"></head>
<body style="margin:0;padding:0;background-color:#f5f5f4;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f5f5f4;padding:32px 16px;">
<tr><td align="center">
<table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

<!-- Logo -->
<tr><td style="padding:0 0 24px 0;">
<img src="${GTC_LOGO_URL}" alt="The GTC Group" height="36" style="height:36px;width:auto;display:block;" />
</td></tr>

<!-- Body -->
<tr><td style="padding:0 0 24px 0;">
<p style="margin:0 0 16px 0;color:#374151;font-size:15px;line-height:1.7;">${bodyHTML}</p>
</td></tr>

<!-- Footer -->
<tr><td style="padding:24px 0 0 0;border-top:1px solid #e5e7eb;">
<p style="margin:0 0 2px 0;color:#0a1628;font-size:13px;font-weight:600;">Gibson Thompson</p>
<p style="margin:0 0 2px 0;color:#6b7280;font-size:12px;">CTO, The GTC Group</p>
<p style="margin:0 0 2px 0;color:#6b7280;font-size:12px;">(678) 316-1454</p>
<p style="margin:0;color:#6b7280;font-size:12px;">globaltransportconsultinggroup.com</p>
</td></tr>

</table>
</td></tr>
</table>
</body></html>`
}

function replaceVariables(text, contact) {
  if (!text) return ''
  return text
    .replace(/\{name\}/g, contact.name || '')
    .replace(/\{first_name\}/g, (contact.name || '').split(' ')[0])
    .replace(/\{company\}/g, contact.service_type || '')
    .replace(/\{email\}/g, contact.email || '')
    .replace(/\{phone\}/g, contact.phone || '')
}

export default function EmailComposer({ isOpen, onClose, contact, onSent }) {
  const [templates, setTemplates] = useState([])
  const [selectedTemplate, setSelectedTemplate] = useState('')
  const [subject, setSubject] = useState('')
  const [body, setBody] = useState('')
  const [loading, setLoading] = useState(false)
  const [copied, setCopied] = useState(false)
  const [logged, setLogged] = useState(false)
  const [showPreview, setShowPreview] = useState(false)

  useEffect(() => {
    if (isOpen) {
      fetchTemplates()
      setSubject('')
      setBody('')
      setSelectedTemplate('')
      setCopied(false)
      setLogged(false)
      setShowPreview(false)
    }
  }, [isOpen])

  const fetchTemplates = async () => {
    try {
      const r = await fetch('/api/admin/templates')
      const d = await r.json()
      if (d.templates) setTemplates(d.templates.filter(t => t.type === 'email'))
    } catch (e) {}
  }

  const handleTemplateSelect = (tmpl) => {
    setSelectedTemplate(tmpl.id)
    setSubject(replaceVariables(tmpl.subject, contact))
    setBody(replaceVariables(tmpl.body, contact))
  }

  const handleCopyAndLog = async () => {
    if (!subject.trim() || !body.trim()) return
    setLoading(true)

    try {
      const html = generateEmailHTML(subject, body)
      const blob = new Blob([html], { type: 'text/html' })
      const plainBlob = new Blob([body], { type: 'text/plain' })

      if (navigator.clipboard && ClipboardItem) {
        await navigator.clipboard.write([
          new ClipboardItem({ 'text/html': blob, 'text/plain': plainBlob })
        ])
      } else {
        await navigator.clipboard.writeText(body)
      }
      setCopied(true)

      // Log outreach
      await fetch('/api/admin/outreach', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          lead_id: contact.id,
          type: 'email',
          subject,
          body,
          template_id: selectedTemplate || null,
        })
      })

      // Log to email tracker
      await fetch('/api/admin/email-stats', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          lead_id: contact.id,
          lead_name: contact.name,
          subject,
        })
      })

      setLogged(true)
      if (onSent) onSent()
    } catch (e) {
      console.error('Copy/log error:', e)
    } finally {
      setLoading(false)
    }
  }

  const handleOpenGmail = () => {
    const gmailUrl = `https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(contact.email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.open(gmailUrl, '_blank')
  }

  if (!isOpen || !contact) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div className="bg-white rounded-t-2xl sm:rounded-2xl w-full sm:max-w-2xl max-h-[90vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-9 h-9 bg-[#0a1628] rounded-lg flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 text-[#c9a227]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            </div>
            <div className="min-w-0">
              <h3 className="font-semibold text-[#0a1628] text-sm truncate">Compose Email</h3>
              <p className="text-xs text-gray-500 truncate">To: {contact.name} &middot; {contact.email}</p>
            </div>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 p-1 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {/* Template Selector */}
          <div>
            <label className="block text-xs text-gray-500 mb-1">Template</label>
            <select
              value={selectedTemplate}
              onChange={(e) => {
                const tmpl = templates.find(t => t.id === e.target.value)
                if (tmpl) handleTemplateSelect(tmpl)
              }}
              className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-[#c9a227]/30 focus:border-[#c9a227] outline-none"
            >
              <option value="">Select a template...</option>
              {templates.map(t => <option key={t.id} value={t.id}>{t.name}</option>)}
            </select>
          </div>

          <div>
            <label className="block text-xs text-gray-500 mb-1">Subject</label>
            <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="Email subject..." style={{ fontSize: '16px' }} className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-[#c9a227]/30 focus:border-[#c9a227] outline-none" />
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="block text-xs text-gray-500">Body</label>
              <button onClick={() => setShowPreview(!showPreview)} className="text-[10px] text-[#c9a227] font-medium hover:underline">
                {showPreview ? 'Edit' : 'Preview HTML'}
              </button>
            </div>
            {showPreview ? (
              <div className="border border-gray-200 rounded-lg overflow-hidden bg-[#f5f5f4]">
                <iframe
                  srcDoc={generateEmailHTML(subject, body)}
                  className="w-full h-[400px] border-0"
                  title="Email Preview"
                />
              </div>
            ) : (
              <textarea value={body} onChange={(e) => setBody(e.target.value)} rows={12} placeholder="Write your email..." style={{ fontSize: '16px' }} className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-[#c9a227]/30 focus:border-[#c9a227] outline-none resize-none" />
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="px-5 py-4 border-t border-gray-100 flex items-center gap-2 flex-shrink-0">
          <button onClick={onClose} className="px-4 py-2.5 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
            Cancel
          </button>
          <button onClick={handleOpenGmail} disabled={!subject || !body} className="px-4 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-40 transition-colors">
            Gmail
          </button>
          <button
            onClick={handleCopyAndLog}
            disabled={loading || !subject.trim() || !body.trim()}
            className={'flex-1 px-4 py-2.5 text-sm font-medium rounded-lg transition-colors disabled:opacity-40 ' + (logged ? 'bg-green-600 text-white' : 'bg-[#0a1628] text-white hover:bg-[#162d54]')}
          >
            {loading ? 'Copying...' : logged ? 'Copied & Logged' : copied ? 'Copy & Log' : 'Copy & Log'}
          </button>
        </div>
      </div>
    </div>
  )
}