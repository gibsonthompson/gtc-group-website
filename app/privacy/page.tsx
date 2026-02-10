'use client'

import Link from 'next/link'

export default function PrivacyPolicy() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-[160px] pb-[72px] bg-gradient-to-br from-navy-900 to-navy-700 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-[0.08]" />
        <div className="relative z-[2] max-w-[800px] mx-auto px-6 text-center">
          <span className="section-label">Legal</span>
          <h1 className="font-display text-[clamp(2rem,4vw,2.75rem)] text-white font-bold leading-[1.3] tracking-[-0.02em] mb-4">
            Privacy Policy
          </h1>
          <p className="text-[16px] text-white/60">
            Last Updated: February 10, 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-[80px] bg-cream-100">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="bg-white rounded shadow-md p-8 sm:p-12 space-y-10 text-[15px] text-gray-700 leading-[1.85]">

            {/* Introduction */}
            <div>
              <h2 className="font-display text-[1.25rem] text-navy-900 font-bold leading-[1.3] tracking-[-0.02em] mb-4">1. Introduction</h2>
              <p className="mb-3">
                The GTC Group (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website at <a href="https://www.globaltransportconsultinggroup.com" className="text-gold-500 hover:text-navy-900 transition-colors underline">www.globaltransportconsultinggroup.com</a> (the &quot;Site&quot;) or engage our consulting services (the &quot;Services&quot;).
              </p>
              <p>
                By accessing the Site or using our Services, you consent to the data practices described in this Privacy Policy. If you do not agree with the terms of this Privacy Policy, please do not access the Site or use our Services.
              </p>
            </div>

            {/* 2. Information We Collect */}
            <div>
              <h2 className="font-display text-[1.25rem] text-navy-900 font-bold leading-[1.3] tracking-[-0.02em] mb-4">2. Information We Collect</h2>
              
              <h3 className="font-body text-[15px] font-bold text-navy-900 mt-5 mb-2">2.1 Information You Provide Directly</h3>
              <p className="mb-3">
                We collect information that you voluntarily provide to us when you interact with the Site or engage our Services. This includes:
              </p>
              <p className="mb-2">
                <span className="font-semibold text-navy-900">Booking Form Submissions:</span> When you schedule a discovery call or consultation through our Site, we collect your name, email address, phone number, fleet size, preferred date and time, and any additional message you provide.
              </p>
              <p className="mb-2">
                <span className="font-semibold text-navy-900">Website Service Signup:</span> If you express interest in our brand and marketing services, we collect your company name, contact name, email address, phone number, current website URL, and any additional notes.
              </p>
              <p className="mb-2">
                <span className="font-semibold text-navy-900">Engagement Information:</span> When you become a client, we may collect additional business information necessary to provide our Services, including but not limited to operating authority details, insurance documentation, current contracts, rate agreements, fleet and driver information, and financial data relevant to cost reduction and revenue growth analysis.
              </p>
              <p>
                <span className="font-semibold text-navy-900">Communications:</span> When you contact us via email, phone, or other means, we may retain the contents of those communications and any information you provide therein.
              </p>

              <h3 className="font-body text-[15px] font-bold text-navy-900 mt-5 mb-2">2.2 Information Collected Automatically</h3>
              <p className="mb-3">
                When you visit the Site, our servers and third-party service providers may automatically collect certain technical information, including:
              </p>
              <p className="mb-2">
                <span className="font-semibold text-navy-900">Log Data:</span> Your IP address, browser type and version, operating system, referring URL, pages visited on the Site, date and time of access, and time spent on pages.
              </p>
              <p>
                <span className="font-semibold text-navy-900">Device Information:</span> Information about the device you use to access the Site, including device type, screen resolution, and unique device identifiers.
              </p>

              <h3 className="font-body text-[15px] font-bold text-navy-900 mt-5 mb-2">2.3 Cookies and Similar Technologies</h3>
              <p>
                The Site may use cookies and similar tracking technologies to enhance your browsing experience and analyze Site usage. Cookies are small data files stored on your device. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you decline cookies, some features of the Site may not function properly. We currently do not deploy third-party advertising cookies or cross-site tracking technologies.
              </p>
            </div>

            {/* 3. How We Use Your Information */}
            <div>
              <h2 className="font-display text-[1.25rem] text-navy-900 font-bold leading-[1.3] tracking-[-0.02em] mb-4">3. How We Use Your Information</h2>
              <p className="mb-3">
                We use the information we collect for the following purposes:
              </p>
              <p className="mb-2">
                <span className="font-semibold text-navy-900">Service Delivery:</span> To provide, manage, and improve our consulting services, including conducting cost analyses, negotiating rates, securing lanes, and performing market research on your behalf.
              </p>
              <p className="mb-2">
                <span className="font-semibold text-navy-900">Communication:</span> To respond to your inquiries, schedule consultations, send service-related notifications, and provide updates about your engagement. This includes sending SMS notifications to confirm booking submissions and important service updates.
              </p>
              <p className="mb-2">
                <span className="font-semibold text-navy-900">Site Operations:</span> To operate, maintain, and improve the Site, monitor usage patterns, and ensure security and proper functioning.
              </p>
              <p className="mb-2">
                <span className="font-semibold text-navy-900">Business Analysis:</span> To aggregate and anonymize data for internal analytics, industry benchmarking, and improving our service offerings. Aggregated data that does not identify individual clients may be used for marketing and educational content.
              </p>
              <p>
                <span className="font-semibold text-navy-900">Legal Compliance:</span> To comply with applicable laws, regulations, legal processes, or enforceable governmental requests, and to protect the rights, property, or safety of The GTC Group, our clients, or the public.
              </p>
            </div>

            {/* 4. How We Share Your Information */}
            <div>
              <h2 className="font-display text-[1.25rem] text-navy-900 font-bold leading-[1.3] tracking-[-0.02em] mb-4">4. How We Share Your Information</h2>
              <p className="mb-3">
                We do not sell, rent, or trade your personal information to third parties for their marketing purposes. We may share your information in the following limited circumstances:
              </p>
              <p className="mb-2">
                <span className="font-semibold text-navy-900">Service Providers:</span> We share information with third-party service providers who assist us in operating the Site and delivering the Services. These providers include our database hosting provider (Supabase), our SMS notification provider (Telnyx), and our web hosting provider (Vercel). These providers are contractually obligated to use your information only for the purposes of providing their services to us and to maintain appropriate security measures.
              </p>
              <p className="mb-2">
                <span className="font-semibold text-navy-900">On Your Behalf:</span> In the course of providing our Services, we may share your business information with insurance providers, fuel program vendors, maintenance networks, and potential shipper partners as necessary to negotiate rates and secure services on your behalf. We will only do so as authorized by your service agreement.
              </p>
              <p className="mb-2">
                <span className="font-semibold text-navy-900">Legal Requirements:</span> We may disclose your information if required to do so by law or in response to valid legal process, such as a subpoena, court order, or government request.
              </p>
              <p>
                <span className="font-semibold text-navy-900">Business Transfers:</span> In the event of a merger, acquisition, reorganization, bankruptcy, or sale of all or a portion of our assets, your information may be transferred as part of that transaction. We will notify you of any such change and any choices you may have regarding your information.
              </p>
            </div>

            {/* 5. Data Storage and Security */}
            <div>
              <h2 className="font-display text-[1.25rem] text-navy-900 font-bold leading-[1.3] tracking-[-0.02em] mb-4">5. Data Storage and Security</h2>
              <p className="mb-3">
                Your information is stored on secure servers provided by our hosting and database partners within the United States. We implement commercially reasonable administrative, technical, and physical safeguards designed to protect your personal information from unauthorized access, use, alteration, or destruction.
              </p>
              <p>
                However, no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security. You acknowledge and accept this inherent risk when providing information to us electronically.
              </p>
            </div>

            {/* 6. Data Retention */}
            <div>
              <h2 className="font-display text-[1.25rem] text-navy-900 font-bold leading-[1.3] tracking-[-0.02em] mb-4">6. Data Retention</h2>
              <p>
                We retain your personal information for as long as necessary to fulfill the purposes for which it was collected, to provide our Services, to comply with our legal obligations, to resolve disputes, and to enforce our agreements. Booking and inquiry data submitted through the Site is retained for up to two (2) years after the last interaction. Client engagement data is retained for the duration of the engagement and for a reasonable period thereafter to comply with legal and accounting requirements. You may request deletion of your data at any time by contacting us (see Section 10).
              </p>
            </div>

            {/* 7. Your Rights and Choices */}
            <div>
              <h2 className="font-display text-[1.25rem] text-navy-900 font-bold leading-[1.3] tracking-[-0.02em] mb-4">7. Your Rights and Choices</h2>
              <p className="mb-3">
                Depending on your jurisdiction, you may have certain rights regarding your personal information. These may include:
              </p>
              <p className="mb-2">
                <span className="font-semibold text-navy-900">Access:</span> The right to request a copy of the personal information we hold about you.
              </p>
              <p className="mb-2">
                <span className="font-semibold text-navy-900">Correction:</span> The right to request correction of inaccurate or incomplete personal information.
              </p>
              <p className="mb-2">
                <span className="font-semibold text-navy-900">Deletion:</span> The right to request deletion of your personal information, subject to certain legal exceptions.
              </p>
              <p className="mb-2">
                <span className="font-semibold text-navy-900">Opt-Out:</span> The right to opt out of certain data processing activities, including marketing communications.
              </p>
              <p>
                To exercise any of these rights, please contact us using the information provided in Section 10. We will respond to your request within a reasonable timeframe and in accordance with applicable law. We may need to verify your identity before processing your request.
              </p>
            </div>

            {/* 8. State-Specific Privacy Rights */}
            <div>
              <h2 className="font-display text-[1.25rem] text-navy-900 font-bold leading-[1.3] tracking-[-0.02em] mb-4">8. State-Specific Privacy Rights</h2>
              
              <h3 className="font-body text-[15px] font-bold text-navy-900 mt-5 mb-2">California Residents</h3>
              <p className="mb-3">
                If you are a California resident, the California Consumer Privacy Act (CCPA), as amended by the California Privacy Rights Act (CPRA), provides you with additional rights regarding your personal information. These include the right to know what personal information we collect and how it is used, the right to request deletion, the right to opt out of the sale or sharing of personal information, and the right to non-discrimination for exercising your privacy rights. We do not sell your personal information as defined under the CCPA/CPRA.
              </p>

              <h3 className="font-body text-[15px] font-bold text-navy-900 mt-5 mb-2">Other U.S. States</h3>
              <p>
                Residents of other states with comprehensive privacy laws (including Virginia, Colorado, Connecticut, Utah, Texas, Oregon, Montana, and others) may have similar rights under their respective state laws. We are committed to honoring data subject rights in accordance with applicable law. To exercise any rights available to you, please contact us using the information in Section 10.
              </p>
            </div>

            {/* 9. Children's Privacy */}
            <div>
              <h2 className="font-display text-[1.25rem] text-navy-900 font-bold leading-[1.3] tracking-[-0.02em] mb-4">9. Children&apos;s Privacy</h2>
              <p>
                The Site and Services are not directed to individuals under the age of 18 and are intended for business use only. We do not knowingly collect personal information from children under 18. If we learn that we have collected personal information from a child under 18, we will promptly delete that information. If you believe a child has provided us with personal information, please contact us immediately using the information in Section 10.
              </p>
            </div>

            {/* 10. Contact Us */}
            <div>
              <h2 className="font-display text-[1.25rem] text-navy-900 font-bold leading-[1.3] tracking-[-0.02em] mb-4">10. Contact Us</h2>
              <p>
                If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:
              </p>
              <div className="mt-4 p-5 bg-cream-100 rounded border border-gray-200">
                <p className="font-semibold text-navy-900 mb-1">The GTC Group</p>
                <p>Email: <a href="mailto:jbrewer@gtcadvisers.com" className="text-gold-500 hover:text-navy-900 transition-colors underline">jbrewer@gtcadvisers.com</a></p>
                <p>Phone: <a href="tel:7705332544" className="text-gold-500 hover:text-navy-900 transition-colors underline">(770) 533-2544</a></p>
                <p>Website: <a href="https://www.globaltransportconsultinggroup.com" className="text-gold-500 hover:text-navy-900 transition-colors underline">www.globaltransportconsultinggroup.com</a></p>
              </div>
            </div>

            {/* 11. Changes to This Privacy Policy */}
            <div>
              <h2 className="font-display text-[1.25rem] text-navy-900 font-bold leading-[1.3] tracking-[-0.02em] mb-4">11. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. When we make changes, we will revise the &quot;Last Updated&quot; date at the top of this page. We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information. Your continued use of the Site or Services after any modifications constitutes your acceptance of the updated Privacy Policy.
              </p>
            </div>

          </div>

          {/* Navigation */}
          <div className="mt-10 flex items-center justify-between">
            <Link href="/" className="inline-flex items-center gap-2 text-[14px] font-semibold text-navy-900 hover:text-gold-500 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Back to Home
            </Link>
            <Link href="/terms" className="inline-flex items-center gap-2 text-[14px] font-semibold text-navy-900 hover:text-gold-500 transition-colors">
              Terms of Service
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
