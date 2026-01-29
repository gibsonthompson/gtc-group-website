-- GTC Group Database Schema
-- Run this in your Supabase SQL Editor

-- Bookings table (for Book a Call form)
CREATE TABLE IF NOT EXISTS bookings (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  fleet_size TEXT NOT NULL,
  preferred_date DATE NOT NULL,
  preferred_time TEXT NOT NULL,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'completed', 'cancelled'))
);

-- Website signups table (for Brand & Marketing page)
CREATE TABLE IF NOT EXISTS website_signups (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  company_name TEXT NOT NULL,
  contact_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  current_website TEXT,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'in_progress', 'completed'))
);

-- Enable Row Level Security (optional but recommended)
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE website_signups ENABLE ROW LEVEL SECURITY;

-- Create policies for anonymous inserts (forms can submit without auth)
CREATE POLICY "Allow anonymous inserts on bookings" ON bookings
  FOR INSERT TO anon
  WITH CHECK (true);

CREATE POLICY "Allow anonymous inserts on website_signups" ON website_signups
  FOR INSERT TO anon
  WITH CHECK (true);

-- Create indexes for common queries
CREATE INDEX idx_bookings_created_at ON bookings(created_at DESC);
CREATE INDEX idx_bookings_status ON bookings(status);
CREATE INDEX idx_website_signups_created_at ON website_signups(created_at DESC);
CREATE INDEX idx_website_signups_status ON website_signups(status);
