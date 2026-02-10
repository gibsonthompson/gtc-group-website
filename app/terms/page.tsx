'use client'

import Link from 'next/link'

export default function TermsOfService() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-[160px] pb-[72px] bg-gradient-to-br from-navy-900 to-navy-700 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-[0.08]" />
        <div className="relative z-[2] max-w-[800px] mx-auto px-6 text-center">
          <span className="section-label">Legal</span>
          <h1 className="font-display text-[clamp(2rem,4vw,2.75rem)] text-white font-bold leading-[1.3] tracking-[-0.02em] mb-4">
            Terms of Service
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

            {/* 1. Agreement to Terms */}
            <div>
              <h2 className="font-display text-[1.25rem] text-navy-900 font-bold leading-[1.3] tracking-[-0.02em] mb-4">1. Agreement to Terms</h2>
              <p className="mb-3">
                These Terms of Service (&quot;Terms&quot;) constitute a legally binding agreement between you (&quot;Client,&quot; &quot;you,&quot; or &quot;your&quot;) and The GTC Group (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), governing your access to and use of the website located at <a href="https://www.globaltransportconsultinggroup.com" className="text-gold-500 hover:text-navy-900 transition-colors underline">www.globaltransportconsultinggroup.com</a> (the &quot;Site&quot;) and any consulting, advisory, or related services provided by The GTC Group (the &quot;Services&quot;).
              </p>
              <p>
                By accessing or using the Site or engaging our Services, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree to these Terms, you must not access the Site or use our Services. If you are entering into these Terms on behalf of a business or other legal entity, you represent that you have the authority to bind such entity to these Terms.
              </p>
            </div>

            {/* 2. Description of Services */}
            <div>
              <h2 className="font-display text-[1.25rem] text-navy-900 font-bold leading-[1.3] tracking-[-0.02em] mb-4">2. Description of Services</h2>
              <p className="mb-3">
                The GTC Group provides logistics advisory and consulting services to U.S.-based carriers, including but not limited to: cost reduction consulting (insurance procurement, fuel purchasing programs, maintenance network access, driver services), revenue growth services (sales representation, lane acquisition, rate renegotiation, direct shipper connections), and brand and marketing services (website design, digital presence management, online reputation management).
              </p>
              <p>
                The specific scope, deliverables, and terms of any consulting engagement will be defined in a separate service agreement or statement of work between you and The GTC Group. These Terms govern your use of the Site and provide the general framework for the business relationship. In the event of a conflict between these Terms and a signed service agreement, the service agreement shall prevail.
              </p>
            </div>

            {/* 3. Eligibility */}
            <div>
              <h2 className="font-display text-[1.25rem] text-navy-900 font-bold leading-[1.3] tracking-[-0.02em] mb-4">3. Eligibility</h2>
              <p>
                The Site and Services are intended for use by businesses and individuals who are at least 18 years of age and who operate or are authorized to act on behalf of a carrier, fleet, or transportation business operating within the United States. By using the Site or Services, you represent and warrant that you meet these eligibility requirements.
              </p>
            </div>

            {/* 4. Client Obligations */}
            <div>
              <h2 className="font-display text-[1.25rem] text-navy-900 font-bold leading-[1.3] tracking-[-0.02em] mb-4">4. Client Obligations</h2>
              <p className="mb-3">
                When engaging our Services, you agree to provide accurate, complete, and current information about your business, including but not limited to fleet size, operating authority, current contracts, insurance policies, and financial information as reasonably required for us to perform the Services.
              </p>
              <p>
                You are responsible for granting The GTC Group timely access to any documentation, contacts, and systems necessary for us to deliver the Services. Delays in providing requested information may impact our ability to deliver results within stated timelines. You also agree to notify us promptly of any changes to your business that may affect the Services.
              </p>
            </div>

            {/* 5. Fees and Payment */}
            <div>
              <h2 className="font-display text-[1.25rem] text-navy-900 font-bold leading-[1.3] tracking-[-0.02em] mb-4">5. Fees and Payment</h2>
              <p className="mb-3">
                Fees for the Services will be set forth in your individual service agreement with The GTC Group. Our initial assessment and discovery call are provided at no charge. Paid services commence as outlined in your service agreement, typically beginning in the second week of engagement.
              </p>
              <p className="mb-3">
                The GTC Group offers a performance-based fee structure: if we do not deliver a return on investment equal to our fee within your first week of paid service, you are not obligated to pay for that period. Specific terms and conditions of this performance guarantee are defined in your individual service agreement.
              </p>
              <p>
                Unless otherwise stated in your service agreement, payment is due within 30 days of invoice. Late payments may be subject to a late fee of 1.5% per month or the maximum rate permitted by applicable law, whichever is lower.
              </p>
            </div>

            {/* 6. Confidentiality */}
            <div>
              <h2 className="font-display text-[1.25rem] text-navy-900 font-bold leading-[1.3] tracking-[-0.02em] mb-4">6. Confidentiality</h2>
              <p className="mb-3">
                In the course of providing Services, both parties may share proprietary or confidential information (&quot;Confidential Information&quot;). Confidential Information includes, without limitation, business plans, financial data, customer lists, carrier contracts, rate agreements, pricing information, marketing strategies, and any information designated as confidential.
              </p>
              <p>
                Each party agrees to hold the other party&apos;s Confidential Information in strict confidence, to use it only for the purpose of performing under these Terms or a related service agreement, and not to disclose it to any third party without the prior written consent of the disclosing party. This obligation shall survive the termination of these Terms for a period of two (2) years.
              </p>
            </div>

            {/* 7. Intellectual Property */}
            <div>
              <h2 className="font-display text-[1.25rem] text-navy-900 font-bold leading-[1.3] tracking-[-0.02em] mb-4">7. Intellectual Property</h2>
              <p className="mb-3">
                All content on the Site—including text, graphics, logos, images, and software—is the property of The GTC Group or its licensors and is protected by applicable intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from any content on the Site without our prior written consent.
              </p>
              <p>
                Any materials, reports, analyses, or deliverables created by The GTC Group specifically for you as part of a paid engagement shall be owned as set forth in your service agreement. Unless otherwise agreed in writing, The GTC Group retains ownership of its pre-existing methodologies, tools, templates, frameworks, and general know-how, even when applied to your specific engagement.
              </p>
            </div>

            {/* 8. Disclaimer of Warranties */}
            <div>
              <h2 className="font-display text-[1.25rem] text-navy-900 font-bold leading-[1.3] tracking-[-0.02em] mb-4">8. Disclaimer of Warranties</h2>
              <p className="mb-3">
                THE SITE AND ITS CONTENT ARE PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS. THE GTC GROUP MAKES NO WARRANTIES, EXPRESS OR IMPLIED, REGARDING THE SITE, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
              </p>
              <p>
                While The GTC Group strives to deliver measurable results for its clients, all advisory services involve inherent uncertainties. Past performance, case studies, and stated savings figures are illustrative and do not guarantee future results. The transportation industry is subject to market fluctuations, regulatory changes, and other factors outside our control. We do not warrant that the Services will achieve any specific financial outcome.
              </p>
            </div>

            {/* 9. Limitation of Liability */}
            <div>
              <h2 className="font-display text-[1.25rem] text-navy-900 font-bold leading-[1.3] tracking-[-0.02em] mb-4">9. Limitation of Liability</h2>
              <p className="mb-3">
                TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, THE GTC GROUP SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION LOST PROFITS, LOST REVENUE, LOST DATA, OR BUSINESS INTERRUPTION, ARISING OUT OF OR RELATED TO YOUR USE OF THE SITE OR SERVICES, REGARDLESS OF THE THEORY OF LIABILITY.
              </p>
              <p>
                IN NO EVENT SHALL THE GTC GROUP&apos;S TOTAL LIABILITY TO YOU FOR ALL CLAIMS ARISING OUT OF OR RELATED TO THESE TERMS OR THE SERVICES EXCEED THE TOTAL FEES PAID BY YOU TO THE GTC GROUP DURING THE THREE (3) MONTHS IMMEDIATELY PRECEDING THE EVENT GIVING RISE TO THE CLAIM.
              </p>
            </div>

            {/* 10. Indemnification */}
            <div>
              <h2 className="font-display text-[1.25rem] text-navy-900 font-bold leading-[1.3] tracking-[-0.02em] mb-4">10. Indemnification</h2>
              <p>
                You agree to indemnify, defend, and hold harmless The GTC Group, its officers, directors, employees, agents, and affiliates from and against any claims, liabilities, damages, losses, costs, and expenses (including reasonable attorneys&apos; fees) arising out of or in any way connected with: (a) your breach of these Terms; (b) your use of the Site or Services; (c) any inaccurate or incomplete information you provide to us; or (d) your violation of any applicable law, regulation, or third-party right.
              </p>
            </div>

            {/* 11. Termination */}
            <div>
              <h2 className="font-display text-[1.25rem] text-navy-900 font-bold leading-[1.3] tracking-[-0.02em] mb-4">11. Termination</h2>
              <p className="mb-3">
                Either party may terminate the consulting relationship as set forth in the applicable service agreement. The GTC Group reserves the right to suspend or terminate your access to the Site at any time, with or without cause, and with or without notice.
              </p>
              <p>
                Upon termination, all obligations under these Terms that by their nature should survive (including, without limitation, confidentiality, intellectual property, limitation of liability, indemnification, and dispute resolution) shall remain in effect.
              </p>
            </div>

            {/* 12. Non-Solicitation */}
            <div>
              <h2 className="font-display text-[1.25rem] text-navy-900 font-bold leading-[1.3] tracking-[-0.02em] mb-4">12. Non-Solicitation</h2>
              <p>
                During the term of any engagement and for a period of twelve (12) months following its termination, you agree not to directly or indirectly solicit, recruit, or hire any employee, contractor, or agent of The GTC Group, or encourage any such person to terminate their relationship with The GTC Group.
              </p>
            </div>

            {/* 13. Governing Law & Dispute Resolution */}
            <div>
              <h2 className="font-display text-[1.25rem] text-navy-900 font-bold leading-[1.3] tracking-[-0.02em] mb-4">13. Governing Law &amp; Dispute Resolution</h2>
              <p className="mb-3">
                These Terms shall be governed by and construed in accordance with the laws of the State of Georgia, without regard to its conflict of laws principles.
              </p>
              <p>
                Any dispute, claim, or controversy arising out of or relating to these Terms or the Services shall first be attempted to be resolved through good-faith negotiation between the parties. If the dispute cannot be resolved through negotiation within thirty (30) days, either party may pursue resolution through binding arbitration administered in accordance with the rules of the American Arbitration Association, with proceedings conducted in the State of Georgia. Each party shall bear its own costs and attorneys&apos; fees unless the arbitrator determines otherwise.
              </p>
            </div>

            {/* 14. Third-Party Links */}
            <div>
              <h2 className="font-display text-[1.25rem] text-navy-900 font-bold leading-[1.3] tracking-[-0.02em] mb-4">14. Third-Party Links</h2>
              <p>
                The Site may contain links to third-party websites or resources. These links are provided for your convenience only. The GTC Group does not endorse, control, or assume any responsibility for the content, privacy policies, or practices of any third-party sites. Your use of any third-party website is at your own risk and subject to the terms and conditions of that website.
              </p>
            </div>

            {/* 15. Modifications */}
            <div>
              <h2 className="font-display text-[1.25rem] text-navy-900 font-bold leading-[1.3] tracking-[-0.02em] mb-4">15. Modifications to These Terms</h2>
              <p>
                The GTC Group reserves the right to modify these Terms at any time. Changes will be effective upon posting the revised Terms on the Site with an updated &quot;Last Updated&quot; date. Your continued use of the Site or Services after any changes constitutes your acceptance of the revised Terms. We encourage you to review these Terms periodically.
              </p>
            </div>

            {/* 16. Severability */}
            <div>
              <h2 className="font-display text-[1.25rem] text-navy-900 font-bold leading-[1.3] tracking-[-0.02em] mb-4">16. Severability</h2>
              <p>
                If any provision of these Terms is held to be invalid, illegal, or unenforceable, the remaining provisions shall continue in full force and effect. The invalid provision shall be modified to the minimum extent necessary to make it valid and enforceable while preserving the parties&apos; original intent.
              </p>
            </div>

            {/* 17. Entire Agreement */}
            <div>
              <h2 className="font-display text-[1.25rem] text-navy-900 font-bold leading-[1.3] tracking-[-0.02em] mb-4">17. Entire Agreement</h2>
              <p>
                These Terms, together with any applicable service agreement and our Privacy Policy, constitute the entire agreement between you and The GTC Group regarding your use of the Site and Services, and supersede all prior or contemporaneous agreements, communications, and proposals, whether oral or written, relating to the subject matter herein.
              </p>
            </div>

            {/* 18. Contact Information */}
            <div>
              <h2 className="font-display text-[1.25rem] text-navy-900 font-bold leading-[1.3] tracking-[-0.02em] mb-4">18. Contact Information</h2>
              <p>
                If you have questions about these Terms of Service, please contact us at:
              </p>
              <div className="mt-4 p-5 bg-cream-100 rounded border border-gray-200">
                <p className="font-semibold text-navy-900 mb-1">The GTC Group</p>
                <p>Email: <a href="mailto:jbrewer@gtcadvisers.com" className="text-gold-500 hover:text-navy-900 transition-colors underline">jbrewer@gtcadvisers.com</a></p>
                <p>Phone: <a href="tel:7705332544" className="text-gold-500 hover:text-navy-900 transition-colors underline">(770) 533-2544</a></p>
                <p>Website: <a href="https://www.globaltransportconsultinggroup.com" className="text-gold-500 hover:text-navy-900 transition-colors underline">www.globaltransportconsultinggroup.com</a></p>
              </div>
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
            <Link href="/privacy" className="inline-flex items-center gap-2 text-[14px] font-semibold text-navy-900 hover:text-gold-500 transition-colors">
              Privacy Policy
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
