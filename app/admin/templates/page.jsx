'use client'

import { useState, useEffect } from 'react'

const CATEGORIES = [
  { key: 'new_lead', label: 'New Lead' },
  { key: 'contacted', label: 'Contacted' },
  { key: 'follow_up', label: 'Follow-up' },
  { key: 'meeting_set', label: 'Meeting Set' },
  { key: 'general', label: 'General' },
]

export default function TemplatesPage() {
  const [templates, setTemplates] = useState([])
  const [loading, setLoading] = useState(true)
  const [editing, setEditing] = useState(null)
  const [saving, setSaving] = useState(false)
  const [successMsg, setSuccessMsg] = useState('')
  const [formData, setFormData] = useState({ name: '', subject: '', body: '', category: 'new_lead', type: 'email' })

  useEffect(() => { fetchTemplates() }, [])

  const fetchTemplates = async () => {
    try {
      const r = await fetch('/api/admin/templates')
      const d = await r.json()
      if (d.templates) setTemplates(d.templates)
    } catch (e) {} finally { setLoading(false) }
  }

  const handleEdit = (t) => {
    setEditing(t.id)
    setFormData({ name: t.name, subject: t.subject || '', body: t.body, category: t.category || 'general', type: t.type || 'email' })
  }

  const handleNew = () => {
    setEditing('new')
    setFormData({ name: '', subject: '', body: '', category: 'new_lead', type: 'email' })
  }

  const handleSave = async () => {
    if (!formData.name.trim() || !formData.body.trim()) return
    if (formData.type === 'email' && !formData.subject.trim()) return
    setSaving(true)
    try {
      const method = editing === 'new' ? 'POST' : 'PUT'
      const payload = editing === 'new' ? formData : { ...formData, id: editing }
      const r = await fetch('/api/admin/templates', { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
      if (r.ok) {
        setSuccessMsg(editing === 'new' ? 'Template created' : 'Template updated')
        setEditing(null)
        fetchTemplates()
        setTimeout(() => setSuccessMsg(''), 3000)
      }
    } catch (e) {} finally { setSaving(false) }
  }

  const handleDelete = async (id) => {
    if (!confirm('Delete this template?')) return
    try {
      await fetch('/api/admin/templates', { method: 'DELETE', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id }) })
      fetchTemplates()
    } catch (e) {}
  }

  const grouped = CATEGORIES.map(cat => ({
    ...cat,
    items: templates.filter(t => (t.category || 'general') === cat.key)
  })).filter(g => g.items.length > 0)

  if (loading) return <div className="flex items-center justify-center min-h-[50vh]"><div className="w-8 h-8 border-3 border-[#0a1628] border-t-transparent rounded-full animate-spin" /></div>

  return (
    <div className="px-4 sm:px-6 py-6 sm:py-8">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-[#0a1628]" style={{ fontFamily: "'Libre Baskerville', Georgia, serif" }}>Templates</h1>
          <p className="text-sm text-gray-500">{templates.length} templates</p>
        </div>
        {!editing && (
          <button onClick={handleNew} className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-white bg-[#0a1628] rounded-lg hover:bg-[#162d54] transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
            New Template
          </button>
        )}
      </div>

      {successMsg && (
        <div className="mb-4 rounded-lg p-3 text-sm bg-green-50 border border-green-200 text-green-700 flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
          {successMsg}
        </div>
      )}

      {editing && (
        <div className="bg-white rounded-xl border-2 border-[#c9a227]/30 p-4 sm:p-6 mb-5">
          <h3 className="font-semibold text-[#0a1628] mb-4 text-sm">{editing === 'new' ? 'Create Template' : 'Edit Template'}</h3>
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div><label className="block text-xs text-gray-500 mb-1">Name *</label><input type="text" value={formData.name} onChange={(e) => setFormData(p => ({ ...p, name: e.target.value }))} placeholder="Template name" style={{ fontSize: '16px' }} className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-[#c9a227]/30 focus:border-[#c9a227] outline-none" /></div>
              <div><label className="block text-xs text-gray-500 mb-1">Category</label><select value={formData.category} onChange={(e) => setFormData(p => ({ ...p, category: e.target.value }))} className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-[#c9a227]/30 focus:border-[#c9a227] outline-none">{CATEGORIES.map(c => <option key={c.key} value={c.key}>{c.label}</option>)}</select></div>
            </div>
            <div><label className="block text-xs text-gray-500 mb-1">Subject *</label><input type="text" value={formData.subject} onChange={(e) => setFormData(p => ({ ...p, subject: e.target.value }))} placeholder="Use {name}, {company}, {first_name}" style={{ fontSize: '16px' }} className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-[#c9a227]/30 focus:border-[#c9a227] outline-none" /></div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="block text-xs text-gray-500">Body *</label>
                <span className="text-[10px] text-gray-400">Variables: {'{name}'} {'{first_name}'} {'{company}'}</span>
              </div>
              <textarea value={formData.body} onChange={(e) => setFormData(p => ({ ...p, body: e.target.value }))} rows={10} placeholder="Write your email template..." style={{ fontSize: '16px' }} className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-[#c9a227]/30 focus:border-[#c9a227] outline-none resize-none" />
            </div>
            <div className="flex items-center gap-2 pt-1">
              <button onClick={() => setEditing(null)} className="px-4 py-2.5 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">Cancel</button>
              <button onClick={handleSave} disabled={saving || !formData.name.trim() || !formData.body.trim() || !formData.subject?.trim()} className="px-4 py-2.5 text-sm font-medium text-white bg-[#0a1628] rounded-lg hover:bg-[#162d54] disabled:opacity-50 transition-colors">{saving ? 'Saving...' : 'Save Template'}</button>
            </div>
          </div>
        </div>
      )}

      {grouped.length === 0 && !editing ? (
        <div className="bg-white rounded-xl border border-gray-200 p-10 text-center">
          <p className="text-gray-500 text-sm">No templates yet</p>
          <button onClick={handleNew} className="mt-2 text-sm text-[#c9a227] font-medium hover:underline">Create your first template</button>
        </div>
      ) : (
        <div className="space-y-4">
          {grouped.map((group) => (
            <div key={group.key} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="px-4 sm:px-6 py-3 border-b border-gray-100 bg-gray-50/50">
                <h3 className="text-sm font-semibold text-[#0a1628]">{group.label}</h3>
              </div>
              <div className="divide-y divide-gray-100">
                {group.items.map((t) => (
                  <div key={t.id} className="p-4 sm:px-6 hover:bg-gray-50/50 transition-colors">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0 flex-1">
                        <p className="font-semibold text-gray-900 text-sm mb-0.5">{t.name}</p>
                        {t.subject && <p className="text-xs text-gray-500 truncate">{t.subject}</p>}
                        <p className="text-xs text-gray-400 mt-0.5 line-clamp-1">{t.body?.substring(0, 120)}</p>
                      </div>
                      <div className="flex items-center gap-1 flex-shrink-0">
                        <button onClick={() => handleEdit(t)} className="p-2 text-gray-400 hover:text-[#0a1628] rounded-lg hover:bg-gray-100 transition-colors">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                        </button>
                        <button onClick={() => handleDelete(t.id)} className="p-2 text-gray-400 hover:text-red-600 rounded-lg hover:bg-red-50 transition-colors">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}