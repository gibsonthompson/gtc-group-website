'use client'

import { useState, useEffect } from 'react'

const GTC_LOGO_URL = 'https://globaltransportconsultinggroup.com/images/gtc-email-logo.png'

function generateEmailHTML(subject, body) {
  const bodyHTML = body
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/\n\n/g, '</p><p style="margin:0 0 16px 0;color:#374151;font-size:15px;line-height:1.7;">')
    .replace(/\n/g, '<br/>')

  return `<!DOCTYPE html>
<html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"></head>
<body style="margin:0;padding:0;background-color:#f0efec;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f0efec;padding:32px 16px;">
<tr><td align="center">
<table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

<!-- Logo Header -->
<tr><td style="background-color:#0a1628;padding:32px 40px;border-radius:8px 8px 0 0;text-align:center;">
<img src="${GTC_LOGO_URL}" alt="The GTC Group — Logistics Advisory" height="64" style="height:64px;width:auto;display:inline-block;" />
</td></tr>

<!-- Body -->
<tr><td style="background-color:#ffffff;padding:36px 40px 28px 40px;border-left:1px solid #e5e7eb;border-right:1px solid #e5e7eb;">
<p style="margin:0 0 16px 0;color:#374151;font-size:15px;line-height:1.7;">${bodyHTML}</p>
</td></tr>

<!-- Signature -->
<tr><td style="background-color:#ffffff;padding:24px 40px 32px 40px;border-left:1px solid #e5e7eb;border-right:1px solid #e5e7eb;">
<table cellpadding="0" cellspacing="0"><tr>
<td style="padding-right:16px;border-right:2px solid #c9a227;vertical-align:top;">
<p style="margin:0 0 2px 0;color:#0a1628;font-size:14px;font-weight:700;">Gibson Thompson</p>
<p style="margin:0;color:#6b7280;font-size:12px;">CTO</p>
</td>
<td style="padding-left:16px;vertical-align:top;">
<p style="margin:0 0 2px 0;color:#6b7280;font-size:12px;">(678) 316-1454</p>
<p style="margin:0 0 2px 0;color:#6b7280;font-size:12px;">gthompson@gtcadvisors.com</p>
<p style="margin:0;color:#c9a227;font-size:12px;font-weight:600;">globaltransportconsultinggroup.com</p>
</td>
</tr></table>
</td></tr>

<!-- Footer -->
<tr><td style="background-color:#0a1628;padding:16px 40px;border-radius:0 0 8px 8px;text-align:center;">
<p style="margin:0;color:rgba(255,255,255,0.4);font-size:11px;">The GTC Group &middot; Carrier Resources, Brokerage Results</p>
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

async function copyToClipboard(html, plainText) {
  try {
    if (navigator.clipboard && typeof ClipboardItem !== 'undefined') {
      await navigator.clipboard.write([
        new ClipboardItem({ 'text/html': new Blob([html], { type: 'text/html' }), 'text/plain': new Blob([plainText], { type: 'text/plain' }) })
      ])
      return true
    }
  } catch (e) {}
  try { await navigator.clipboard.writeText(plainText); return true } catch (e) {}
  try {
    const ta = document.createElement('textarea'); ta.value = plainText; ta.style.cssText = 'position:fixed;opacity:0'
    document.body.appendChild(ta); ta.select(); document.execCommand('copy'); document.body.removeChild(ta); return true
  } catch (e) { return false }
}

export default function EmailComposer({ isOpen, onClose, contact, onSent }) {
  const [templates, setTemplates] = useState([])
  const [selectedTemplate, setSelectedTemplate] = useState('')
  const [subject, setSubject] = useState('')
  const [body, setBody] = useState('')
  const [status, setStatus] = useState('idle') // idle | working | done | error
  const [showPreview, setShowPreview] = useState(false)

  useEffect(() => {
    if (isOpen) {
      fetchTemplates()
      setSubject(''); setBody(''); setSelectedTemplate(''); setStatus('idle'); setShowPreview(false)
    }
  }, [isOpen])

  const fetchTemplates = async () => {
    try {
      const r = await fetch('/api/admin/templates')
      const d = await r.json()
      if (d.templates) {
        const emailTemplates = d.templates.filter(t => t.type === 'email')
        setTemplates(emailTemplates)
        // Auto-select first template (Outreach 1)
        if (emailTemplates.length > 0) {
          handleTemplateSelect(emailTemplates[0])
        }
      }
    } catch (e) {}
  }

  const handleTemplateSelect = (tmpl) => {
    setSelectedTemplate(tmpl.id)
    setSubject(replaceVariables(tmpl.subject, contact))
    setBody(replaceVariables(tmpl.body, contact))
    setStatus('idle')
  }

  const handleSendViaGmail = async () => {
    if (!subject.trim() || !body.trim()) return
    setStatus('working')

    try {
      // 1. Copy branded HTML to clipboard
      const html = generateEmailHTML(subject, body)
      await copyToClipboard(html, body)

      // 2. Log outreach
      await fetch('/api/admin/outreach', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ lead_id: contact.id, type: 'email', subject, body, template_id: selectedTemplate || null })
      })

      // 3. Log to email tracker for daily meter
      await fetch('/api/admin/email-stats', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ lead_id: contact.id, lead_name: contact.name, subject })
      })

      // 4. Open Gmail with recipient and subject pre-filled
      const gmailUrl = `https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(contact.email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      window.open(gmailUrl, '_blank')

      setStatus('done')
      if (onSent) onSent()
    } catch (e) {
      console.error('Send error:', e)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 2000)
    }
  }

  if (!isOpen || !contact) return null

  const canSend = subject.trim() && body.trim()

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-end sm:items-center justify-center" style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
      <div className="bg-white rounded-t-2xl sm:rounded-2xl w-full sm:max-w-2xl max-h-[92vh] sm:max-h-[85vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="px-4 sm:px-5 py-3.5 border-b border-gray-100 flex items-center justify-between flex-shrink-0">
          <div className="w-8 h-1 bg-gray-300 rounded-full absolute left-1/2 -translate-x-1/2 top-2 sm:hidden" />
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-8 h-8 bg-[#0a1628] rounded-lg flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 text-[#c9a227]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            </div>
            <div className="min-w-0">
              <p className="font-semibold text-[#0a1628] text-sm truncate">{contact.name}</p>
              <p className="text-xs text-gray-400 truncate">{contact.email}</p>
            </div>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 p-1.5 -mr-1.5 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-3">
          <select value={selectedTemplate} onChange={(e) => { const tmpl = templates.find(t => t.id === e.target.value); if (tmpl) handleTemplateSelect(tmpl) }} className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-[#c9a227]/30 focus:border-[#c9a227] outline-none">
            <option value="">Select a template...</option>
            {templates.map(t => <option key={t.id} value={t.id}>{t.name}</option>)}
          </select>

          <input type="text" value={subject} onChange={(e) => { setSubject(e.target.value); setStatus('idle') }} placeholder="Subject" style={{ fontSize: '16px' }} className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-[#c9a227]/30 focus:border-[#c9a227] outline-none" />

          <div>
            <div className="flex items-center justify-end mb-1">
              <button onClick={() => setShowPreview(!showPreview)} className="text-[11px] text-[#c9a227] font-medium hover:underline">{showPreview ? 'Edit' : 'Preview'}</button>
            </div>
            {showPreview ? (
              <div className="border border-gray-200 rounded-lg overflow-hidden bg-[#f5f5f4]">
                <iframe srcDoc={generateEmailHTML(subject, body)} className="w-full h-[350px] sm:h-[400px] border-0" title="Email Preview" />
              </div>
            ) : (
              <textarea value={body} onChange={(e) => { setBody(e.target.value); setStatus('idle') }} rows={10} placeholder="Write your email..." style={{ fontSize: '16px' }} className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-[#c9a227]/30 focus:border-[#c9a227] outline-none resize-none" />
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="px-4 sm:px-5 py-3.5 border-t border-gray-100 flex items-center gap-2 flex-shrink-0 bg-white">
          <button onClick={onClose} className="px-4 py-2.5 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">Cancel</button>
          <button
            onClick={handleSendViaGmail}
            disabled={!canSend || status === 'working'}
            className={'flex-1 py-2.5 text-sm font-semibold rounded-lg transition-all disabled:opacity-40 flex items-center justify-center gap-2 ' + (
              status === 'done' ? 'bg-green-600 text-white' :
              status === 'error' ? 'bg-red-500 text-white' :
              'bg-[#0a1628] text-white hover:bg-[#162d54] active:scale-[0.98]'
            )}
          >
            {status === 'working' ? 'Opening Gmail...' :
             status === 'done' ? 'Sent & Logged' :
             status === 'error' ? 'Failed' :
             <>
               <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
               Send via Gmail
             </>
            }
          </button>
        </div>
      </div>
    </div>
  )
}