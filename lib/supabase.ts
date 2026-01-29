import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export interface BookingSubmission {
  id?: string
  name: string
  email: string
  phone: string
  fleet_size: string
  preferred_date: string
  preferred_time: string
  message?: string
  created_at?: string
}

export interface WebsiteSignup {
  id?: string
  company_name: string
  contact_name: string
  email: string
  phone: string
  current_website?: string
  notes?: string
  created_at?: string
}
