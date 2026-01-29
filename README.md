# The GTC Group Website

Next.js website with booking forms, Supabase database, and Telnyx SMS notifications.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Database:** Supabase
- **SMS:** Telnyx
- **Deployment:** Vercel

## Quick Start

### 1. Clone & Install

```bash
git clone <your-repo>
cd gtc-group
npm install
```

### 2. Set Up Supabase

1. Go to [supabase.com](https://supabase.com) and create a new project
2. Go to **SQL Editor** and run the contents of `supabase-schema.sql`
3. Go to **Settings > API** and copy:
   - Project URL
   - anon public key

### 3. Set Up Telnyx

1. Go to [telnyx.com](https://telnyx.com) and create an account
2. Buy a phone number with SMS capability
3. Go to **API Keys** and create a new key
4. Copy your API key and phone number

### 4. Create Environment Variables

Create a `.env.local` file in the root:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJxxxxxx

# Telnyx
TELNYX_API_KEY=KEY_xxxxxxxx
TELNYX_FROM_NUMBER=+1xxxxxxxxxx

# Where to send SMS notifications
NOTIFICATION_PHONE=+17705332544
```

### 5. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
gtc-group/
├── app/
│   ├── page.tsx                    # Homepage
│   ├── layout.tsx                  # Root layout
│   ├── globals.css                 # Global styles
│   ├── book-call/page.tsx          # Booking page
│   ├── team/page.tsx               # Team page
│   ├── services/
│   │   ├── cost-reduction/page.tsx
│   │   ├── revenue-growth/page.tsx
│   │   └── brand-marketing/page.tsx
│   └── api/
│       ├── book-call/route.ts      # Booking form API
│       └── website-signup/route.ts # Website signup API
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── BookingForm.tsx             # Calendar + time picker
│   └── WebsiteSignupForm.tsx       # Website request form
├── lib/
│   ├── supabase.ts                 # Database client
│   └── sms.ts                      # Telnyx integration
├── public/
│   └── logo.png                    # Site logo/favicon
└── supabase-schema.sql             # Database schema
```

## Forms

### Book a Call (`/book-call`)
- Calendar date picker
- Time slot selection (20% appear "booked" for social proof)
- Fields: Name, Email, Phone, Fleet Size, Message
- Saves to `bookings` table
- Sends SMS notification

### Website Signup (`/services/brand-marketing#signup`)
- Fields: Company Name, Contact, Email, Phone, Current Website, Notes
- Saves to `website_signups` table
- Sends SMS notification

## Deployment to Vercel

1. Push to GitHub
2. Connect repo to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

## Customization

### Colors
Edit `tailwind.config.ts` to change brand colors:
- `navy-900` through `navy-600` - Primary dark colors
- `gold-500` through `gold-300` - Accent colors
- `cream-100`, `cream-200` - Background colors

### Fonts
Currently using:
- **Display:** Cormorant Garamond
- **Body:** Source Sans 3

Change in `app/globals.css`

### Time Slots
Edit `components/BookingForm.tsx`:
- `TIME_SLOTS` array - Available times
- `getBookedSlots()` function - Controls the 20% "busy" appearance

## Database Tables

### bookings
| Column | Type | Description |
|--------|------|-------------|
| id | uuid | Primary key |
| name | text | Contact name |
| email | text | Email address |
| phone | text | Phone number |
| fleet_size | text | Fleet size selection |
| preferred_date | date | Selected date |
| preferred_time | text | Selected time slot |
| message | text | Optional message |
| status | text | pending/confirmed/completed/cancelled |
| created_at | timestamp | Submission time |

### website_signups
| Column | Type | Description |
|--------|------|-------------|
| id | uuid | Primary key |
| company_name | text | Company name |
| contact_name | text | Contact person |
| email | text | Email address |
| phone | text | Phone number |
| current_website | text | Existing website URL |
| notes | text | Additional notes |
| status | text | new/contacted/in_progress/completed |
| created_at | timestamp | Submission time |

## SMS Notifications

When a form is submitted, an SMS is sent to `NOTIFICATION_PHONE` with:
- Contact details
- Form-specific information (date/time for bookings, company for signups)

Format:
```
🚛 New GTC Booking!

Name: John Smith
Phone: (555) 123-4567
Email: john@example.com
Fleet: 6-15 trucks
Date: 2024-01-15
Time: 10:00 AM

Note: Interested in fuel savings...
```

## Support

Questions? Contact: jbrewer@gtcadvisers.com
