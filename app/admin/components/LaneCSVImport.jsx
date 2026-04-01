'use client'

import { useState, useRef } from 'react'

const COLUMN_MAP = {
  'origin city': 'origin_city', 'origin': 'origin_city', 'from city': 'origin_city', 'from': 'origin_city',
  'origin state': 'origin_state', 'from state': 'origin_state',
  'destination city': 'destination_city', 'destination': 'destination_city', 'to city': 'destination_city', 'to': 'destination_city', 'dest city': 'destination_city',
  'destination state': 'destination_state', 'to state': 'destination_state', 'dest state': 'destination_state',
  'miles': 'miles', 'distance': 'miles', 'mileage': 'miles',
  'rate per mile': 'rate_per_mile', 'rpm': 'rate_per_mile', 'rate/mile': 'rate_per_mile', '$/mile': 'rate_per_mile',
  'total rate': 'total_rate', 'rate': 'total_rate', 'total': 'total_rate', 'price': 'total_rate', 'line haul': 'total_rate',
  'equipment': 'equipment_type', 'equipment type': 'equipment_type', 'trailer': 'equipment_type', 'type': 'equipment_type',
  'frequency': 'frequency', 'freq': 'frequency',
  'shipper': 'shipper', 'shipper name': 'shipper', 'customer': 'shipper',
  'notes': 'notes', 'comments': 'notes',
}

function parseCSV(text) {
  const lines = text.split(/\r?\n/).filter(l => l.trim())
  if (lines.length < 2) return { headers: [], rows: [] }
  const headers = lines[0].split(',').map(h => h.trim().replace(/^["']|["']$/g, ''))
  const rows = lines.slice(1).map(line => {
    const vals = []
    let current = '', inQuotes = false
    for (const ch of line) {
      if (ch === '"') { inQuotes = !inQuotes }
      else if (ch === ',' && !inQuotes) { vals.push(current.trim()); current = '' }
      else { current += ch }
    }
    vals.push(current.trim())
    return vals
  })
  return { headers, rows }
}

export default function LaneCSVImport({ isOpen, onClose, onImportComplete }) {
  const fileRef = useRef(null)
  const [step, setStep] = useState('upload')
  const [headers, setHeaders] = useState([])
  const [rows, setRows] = useState([])
  const [mapping, setMapping] = useState({})
  const [importing, setImporting] = useState(false)
  const [result, setResult] = useState(null)

  const handleFile = (e) => {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = (ev) => {
      const { headers: h, rows: r } = parseCSV(ev.target.result)
      setHeaders(h)
      setRows(r)
      const autoMap = {}
      h.forEach((header, i) => {
        const key = header.toLowerCase().trim()
        if (COLUMN_MAP[key]) autoMap[i] = COLUMN_MAP[key]
      })
      setMapping(autoMap)
      setStep('map')
    }
    reader.readAsText(file)
  }

  const handleImport = async () => {
    setImporting(true)
    const lanes = rows.map(row => {
      const lane = { status: 'active' }
      Object.entries(mapping).forEach(([colIdx, field]) => {
        if (row[colIdx]) {
          let val = row[colIdx].replace(/^\$/, '').replace(/,/g, '')
          if (['miles', 'rate_per_mile', 'total_rate'].includes(field)) val = parseFloat(val) || null
          lane[field] = val
        }
      })
      return lane
    }).filter(l => l.origin_city || l.destination_city)

    try {
      const r = await fetch('/api/admin/lanes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ bulk: lanes })
      })
      const d = await r.json()
      setResult({ count: d.count || lanes.length })
      setStep('done')
      if (onImportComplete) onImportComplete()
    } catch (e) {
      setResult({ error: 'Import failed' })
      setStep('done')
    } finally {
      setImporting(false)
    }
  }

  const reset = () => { setStep('upload'); setHeaders([]); setRows([]); setMapping({}); setResult(null) }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4" onClick={() => { onClose(); reset() }}>
      <div className="bg-white rounded-t-2xl sm:rounded-2xl w-full sm:max-w-lg max-h-[85vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <div className="p-5 border-b border-gray-100 flex items-center justify-between">
          <h3 className="text-lg font-bold text-[#0a1628]" style={{ fontFamily: "'Libre Baskerville', Georgia, serif" }}>Import Lanes</h3>
          <button onClick={() => { onClose(); reset() }} className="text-gray-400 hover:text-gray-600"><svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg></button>
        </div>
        <div className="p-5">
          {step === 'upload' && (
            <div>
              <p className="text-sm text-gray-600 mb-4">Upload a CSV with lane data. Columns like "Origin City", "Destination", "Rate", "Miles" will be auto-mapped.</p>
              <input ref={fileRef} type="file" accept=".csv,.tsv,.txt" onChange={handleFile} className="hidden" />
              <button onClick={() => fileRef.current?.click()} className="w-full py-8 border-2 border-dashed border-gray-300 rounded-xl text-center hover:border-[#c9a227] hover:bg-[#c9a227]/5 transition-colors">
                <svg className="w-8 h-8 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>
                <p className="text-sm font-medium text-gray-700">Choose CSV file</p>
              </button>
            </div>
          )}
          {step === 'map' && (
            <div>
              <p className="text-sm text-gray-600 mb-4">{rows.length} rows found. Map columns:</p>
              <div className="space-y-2 mb-4 max-h-[300px] overflow-y-auto">
                {headers.map((h, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="text-sm text-gray-700 w-1/3 truncate">{h}</span>
                    <select value={mapping[i] || ''} onChange={(e) => setMapping(p => ({ ...p, [i]: e.target.value || undefined }))} className="flex-1 px-2 py-1.5 border border-gray-200 rounded-lg text-sm">
                      <option value="">Skip</option>
                      <option value="origin_city">Origin City</option>
                      <option value="origin_state">Origin State</option>
                      <option value="destination_city">Destination City</option>
                      <option value="destination_state">Destination State</option>
                      <option value="miles">Miles</option>
                      <option value="rate_per_mile">Rate/Mile</option>
                      <option value="total_rate">Total Rate</option>
                      <option value="equipment_type">Equipment Type</option>
                      <option value="frequency">Frequency</option>
                      <option value="shipper">Shipper</option>
                      <option value="notes">Notes</option>
                    </select>
                  </div>
                ))}
              </div>
              <div className="flex gap-2">
                <button onClick={reset} className="px-4 py-2.5 text-sm text-gray-600 bg-gray-100 rounded-lg">Back</button>
                <button onClick={handleImport} disabled={importing} className="flex-1 px-4 py-2.5 text-sm font-medium text-white bg-[#0a1628] rounded-lg disabled:opacity-50">{importing ? 'Importing...' : 'Import ' + rows.length + ' Lanes'}</button>
              </div>
            </div>
          )}
          {step === 'done' && (
            <div className="text-center py-4">
              {result?.error ? (
                <div><p className="text-red-600 font-medium">{result.error}</p><button onClick={reset} className="mt-3 text-sm text-[#c9a227] font-medium hover:underline">Try again</button></div>
              ) : (
                <div>
                  <svg className="w-10 h-10 text-green-500 mx-auto mb-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  <p className="font-semibold text-gray-900">{result?.count} lanes imported</p>
                  <button onClick={() => { onClose(); reset() }} className="mt-3 px-6 py-2.5 text-sm font-medium text-white bg-[#0a1628] rounded-lg">Done</button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}