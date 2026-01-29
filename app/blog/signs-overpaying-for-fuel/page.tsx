import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "5 Signs You're Overpaying for Diesel (And How Much It's Costing You) | GTC Group",
  description: 'At 6 MPG and 100K miles/year, every cent per gallon costs $167 annually. Most owner-operators overpay by 15-40 cents. Calculate your real fuel costs.',
  keywords: 'diesel fuel savings trucking, fuel card discounts, owner operator fuel costs, trucking fuel expenses, best diesel prices truckers, fuel cost calculator trucking',
}

export default function OverpayingFuelArticle() {
  return (
    <article className="bg-white">
      {/* Hero */}
      <header className="bg-navy-900 pt-32 pb-16">
        <div className="max-w-[800px] mx-auto px-6">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-gold-400 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-gold-400 transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-white">Cost Reduction</span>
          </nav>
          
          <span className="inline-block bg-gold-500 text-navy-900 py-1 px-3 text-[11px] font-bold tracking-[0.1em] uppercase rounded-sm mb-6">
            Cost Reduction
          </span>
          
          <h1 className="font-display text-[clamp(2rem,4vw,2.75rem)] text-white font-bold leading-[1.2] tracking-[-0.02em] mb-6">
            5 Signs You're Overpaying for Diesel (And How Much It's Actually Costing You)
          </h1>
          
          <p className="text-xl text-white/70 leading-relaxed mb-8">
            Fuel is 35-40% of your operating costs. Every cent per gallon matters. Most owner-operators overpay by 15-40 cents—that's $2,500 to $6,700 per year walking out of your pocket.
          </p>

          <div className="flex items-center gap-6 text-sm text-white/60">
            <span>January 2026</span>
            <span>•</span>
            <span>7 min read</span>
          </div>
        </div>
      </header>

      {/* Quick Answer Box */}
      <section className="bg-cream-100 py-8 border-b border-gray-200">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-gold-500">
            <h2 className="font-display text-lg font-bold text-navy-900 mb-3">Quick Fuel Cost Calculator</h2>
            <div className="space-y-2 text-gray-700">
              <p><strong>Annual miles:</strong> 100,000</p>
              <p><strong>Average MPG:</strong> 6.0</p>
              <p><strong>Gallons per year:</strong> 16,667</p>
              <p className="pt-2 border-t border-gray-200"><strong>Every 1¢/gallon = $167/year</strong></p>
              <p><strong>Every 10¢/gallon = $1,667/year</strong></p>
              <p><strong>Every 40¢/gallon = $6,667/year</strong></p>
            </div>
            <p className="text-sm text-gray-500 mt-3">Adjust for your MPG and mileage. Higher mileage = bigger impact per cent.</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            
            <p className="text-xl text-gray-700 leading-relaxed">
              You can't control diesel prices. But you can control <em>what you pay</em> relative to market prices. The difference between paying retail and paying smart is often 30-50 cents per gallon—real money that adds up fast.
            </p>

            <p>
              Here are five signs you're leaving money at the pump, and what to do about each one.
            </p>

            <h2 className="font-display text-2xl text-navy-900 font-bold mt-12 mb-4">Sign #1: You Don't Have a Fuel Card</h2>
            
            <p>
              This is the most obvious one, but it's worth saying: if you're paying with cash, a debit card, or a general credit card at truck stops, you're paying full retail price. That's the highest price available.
            </p>

            <div className="bg-gray-50 rounded-lg p-6 my-8">
              <h3 className="font-display text-lg font-bold text-navy-900 mb-4">What You're Missing Without a Fuel Card</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-gold-500 font-bold">→</span>
                  <span><strong>Cash vs. credit price:</strong> Most truck stops charge 4-8¢ more for credit card purchases. A fuel card gets you cash price or better.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold-500 font-bold">→</span>
                  <span><strong>Network discounts:</strong> Fuel cards negotiate volume discounts at participating locations—typically 5-15¢/gallon additional savings.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold-500 font-bold">→</span>
                  <span><strong>In-network specials:</strong> Many cards offer deeper discounts at specific locations—sometimes 30-50¢ off at promotional sites.</span>
                </li>
              </ul>
            </div>

            <p>
              <strong>The Fix:</strong> Get a fuel card. Even a basic card from TCS, ATBS, or RTS will save you 10-20¢/gallon over retail. That's $1,600-$3,300/year for zero effort.
            </p>

            <p>
              <strong>Annual cost of not having a fuel card: $1,500 - $3,500</strong>
            </p>

            <h2 className="font-display text-2xl text-navy-900 font-bold mt-12 mb-4">Sign #2: You Fuel Wherever You Stop</h2>
            
            <p>
              Convenience is expensive. Filling up at whatever truck stop is closest when your gauge hits a quarter tank means you're price-shopping zero percent of the time.
            </p>

            <p>
              Diesel prices can vary by 30-60 cents per gallon <em>within the same city</em>. Along a corridor like I-40 or I-10, differences of 20-40 cents between stops just a few exits apart are common.
            </p>

            <div className="bg-navy-900 text-white rounded-lg p-6 my-8">
              <h3 className="font-display text-lg font-bold mb-4 text-gold-400">Real Example: I-40 Through Texas</h3>
              <p className="mb-4">We checked prices along a 200-mile stretch on a random Tuesday:</p>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Love's, Amarillo</span>
                  <span>$3.89/gal</span>
                </div>
                <div className="flex justify-between">
                  <span>TA, Adrian</span>
                  <span>$3.67/gal</span>
                </div>
                <div className="flex justify-between">
                  <span>Independent, Groom</span>
                  <span>$3.54/gal</span>
                </div>
                <div className="flex justify-between border-t border-white/20 pt-2 mt-2">
                  <span className="font-bold">Price range</span>
                  <span className="text-gold-400 font-bold">35¢/gallon</span>
                </div>
              </div>
              <p className="mt-4 text-sm text-white/70">
                200 gallons at that stop = $70 difference. Over a year of similar choices: $2,000-$4,000.
              </p>
            </div>

            <p>
              <strong>The Fix:</strong> Use a fuel finder app. Most fuel cards have integrated apps showing prices at in-network locations. Apps like GasBuddy work too. Plan your fuel stops in advance—even 5 minutes of planning per day saves thousands annually.
            </p>

            <p>
              <strong>Annual cost of not price-shopping: $1,500 - $4,000</strong>
            </p>

            <h2 className="font-display text-2xl text-navy-900 font-bold mt-12 mb-4">Sign #3: Your Fuel Card Isn't Working for You</h2>
            
            <p>
              Having a fuel card isn't enough. You need to be using it <em>at the right locations</em>. Most cards have tiered discount structures:
            </p>

            <ul className="list-disc pl-6 space-y-2 my-4">
              <li><strong>In-network locations:</strong> Full discount (15-50¢/gallon)</li>
              <li><strong>Out-of-network but accepted:</strong> Cash price only (5-10¢ savings)</li>
              <li><strong>Non-participating locations:</strong> Retail price or worse (zero savings)</li>
            </ul>

            <p>
              If you're using your fuel card but ignoring where you use it, you might be capturing only 20-30% of available savings.
            </p>

            <div className="bg-cream-100 border-l-4 border-gold-500 p-6 my-8">
              <h3 className="font-display text-lg font-bold text-navy-900 mb-3">Check Your Fuel Card Performance</h3>
              <p className="text-gray-700 mb-3">Pull your last 3 months of fuel purchases and calculate:</p>
              <ol className="list-decimal pl-6 space-y-2 text-gray-700">
                <li>Total gallons purchased</li>
                <li>Percentage at in-network discount locations</li>
                <li>Average discount per gallon achieved</li>
              </ol>
              <p className="text-gray-700 mt-3">
                If your in-network percentage is below 70%, you're leaving money on the table. If your average discount is under 20¢/gallon, there are better cards or networks available.
              </p>
            </div>

            <p>
              <strong>The Fix:</strong> Know your fuel card's network and prioritize in-network stops. If your routes don't align with good in-network locations, consider switching cards to one that fits your lanes.
            </p>

            <p>
              <strong>Annual cost of using your card wrong: $1,000 - $2,500</strong>
            </p>

            <h2 className="font-display text-2xl text-navy-900 font-bold mt-12 mb-4">Sign #4: You're Not Stacking Discounts</h2>
            
            <p>
              Smart carriers don't rely on just one source of fuel savings. They stack multiple discounts:
            </p>

            <div className="bg-gray-50 rounded-lg p-6 my-8">
              <h3 className="font-display text-lg font-bold text-navy-900 mb-4">The Discount Stack</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                  <span>Fuel card base discount</span>
                  <span className="font-mono text-green-600">-15¢</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                  <span>In-network location bonus</span>
                  <span className="font-mono text-green-600">-10¢</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                  <span>Loyalty rewards (TA, Pilot, Love's)</span>
                  <span className="font-mono text-green-600">-3¢</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                  <span>Promotional/seasonal discount</span>
                  <span className="font-mono text-green-600">-5¢</span>
                </div>
                <div className="flex justify-between items-center pt-2 font-bold">
                  <span>Total potential savings</span>
                  <span className="text-green-600">-33¢/gallon</span>
                </div>
              </div>
            </div>

            <p>
              Most owner-operators capture the first discount and ignore the rest. But loyalty programs are free to join and cost nothing to use. Promotional discounts require only that you check the app before fueling.
            </p>

            <p>
              <strong>The Fix:</strong> 
            </p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>Join every major truck stop loyalty program (free)</li>
              <li>Check your fuel card app for promotional locations</li>
              <li>Time major fuel purchases for promotional periods when possible</li>
            </ul>

            <p>
              <strong>Annual cost of not stacking discounts: $500 - $1,500</strong>
            </p>

            <h2 className="font-display text-2xl text-navy-900 font-bold mt-12 mb-4">Sign #5: You Don't Have Access to Volume Pricing</h2>
            
            <p>
              This is the structural disadvantage that's hardest to solve alone. Large fleets negotiate directly with fuel suppliers and truck stops, committing to volume in exchange for pricing that individual owner-operators simply cannot access.
            </p>

            <p>
              The best fleet fuel programs achieve discounts of 40-55¢/gallon at in-network locations. The best individual fuel cards top out around 25-35¢.
            </p>

            <div className="bg-navy-900 text-white rounded-lg p-6 my-8">
              <h3 className="font-display text-lg font-bold mb-4 text-gold-400">The Volume Pricing Gap</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center border-b border-white/20 pb-2">
                  <span>Individual owner-operator (best case)</span>
                  <span>25-35¢ discount</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/20 pb-2">
                  <span>Small fleet (10-25 trucks)</span>
                  <span>30-40¢ discount</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/20 pb-2">
                  <span>Large fleet (100+ trucks)</span>
                  <span>40-55¢ discount</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/20 pb-2">
                  <span>Carrier network (pooled volume)</span>
                  <span>35-50¢ discount</span>
                </div>
              </div>
              <p className="mt-4 text-sm text-white/70">
                Carrier networks access near-fleet-level pricing through combined purchasing power.
              </p>
            </div>

            <p>
              <strong>The Fix:</strong> Join a carrier network or fuel purchasing cooperative that pools volume across multiple independent carriers. These organizations negotiate on behalf of all members, providing access to pricing tiers unavailable to individuals.
            </p>

            <p>
              <strong>Annual cost of no volume pricing access: $1,500 - $3,500</strong>
            </p>

            <h2 className="font-display text-2xl text-navy-900 font-bold mt-12 mb-4">Adding It Up: Your Total Fuel Overpayment</h2>

            <p>
              If you recognize multiple signs on this list, here's what you might be losing:
            </p>

            <div className="bg-gray-50 rounded-lg p-6 my-8">
              <h3 className="font-display text-lg font-bold text-navy-900 mb-4">Potential Annual Fuel Savings</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                  <span>Get a fuel card (if you don't have one)</span>
                  <span className="font-mono">$1,500 - $3,500</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                  <span>Start price-shopping stops</span>
                  <span className="font-mono">$1,500 - $4,000</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                  <span>Optimize in-network usage</span>
                  <span className="font-mono">$1,000 - $2,500</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                  <span>Stack all available discounts</span>
                  <span className="font-mono">$500 - $1,500</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                  <span>Access volume pricing</span>
                  <span className="font-mono">$1,500 - $3,500</span>
                </div>
                <div className="flex justify-between items-center pt-2 font-bold">
                  <span>Total potential savings</span>
                  <span className="text-green-600">$6,000 - $15,000/year</span>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                Not all savings stack—some overlap. Realistic combined savings for most owner-operators: $4,000-$8,000 annually.
              </p>
            </div>

            <h2 className="font-display text-2xl text-navy-900 font-bold mt-12 mb-4">The 5-Minute Fuel Savings Checklist</h2>

            <p>
              Here's what to do this week:
            </p>

            <div className="space-y-4 my-8">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-gold-500 rounded flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-navy-900 font-bold text-sm">1</span>
                </div>
                <div>
                  <p className="font-semibold text-navy-900">Get a trucking-specific fuel card if you don't have one.</p>
                  <p className="text-sm text-gray-600">TCS, RTS, ATBS, and Comdata are solid options for owner-operators.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-gold-500 rounded flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-navy-900 font-bold text-sm">2</span>
                </div>
                <div>
                  <p className="font-semibold text-navy-900">Download your fuel card's app and enable price alerts.</p>
                  <p className="text-sm text-gray-600">Most apps show in-network locations and current prices along your route.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-gold-500 rounded flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-navy-900 font-bold text-sm">3</span>
                </div>
                <div>
                  <p className="font-semibold text-navy-900">Join loyalty programs at Pilot, Love's, TA/Petro.</p>
                  <p className="text-sm text-gray-600">Free to join. Additional 2-5¢/gallon plus shower credits and other perks.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-gold-500 rounded flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-navy-900 font-bold text-sm">4</span>
                </div>
                <div>
                  <p className="font-semibold text-navy-900">Pull your last 90 days of fuel purchases.</p>
                  <p className="text-sm text-gray-600">Calculate your average price per gallon and compare to current in-network best prices.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-gold-500 rounded flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-navy-900 font-bold text-sm">5</span>
                </div>
                <div>
                  <p className="font-semibold text-navy-900">Research carrier networks with fuel programs.</p>
                  <p className="text-sm text-gray-600">If you're hitting a ceiling on individual savings, pooled purchasing is the next level.</p>
                </div>
              </div>
            </div>

            <h2 className="font-display text-2xl text-navy-900 font-bold mt-12 mb-4">The Bottom Line</h2>

            <p>
              Fuel is your largest variable cost, and it's the one where small differences compound fastest. At 16,000+ gallons per year, a 25¢ difference is over $4,000 annually.
            </p>

            <p>
              The carriers who stay profitable in tight markets aren't necessarily hauling better freight—they're buying smarter. Fuel is the easiest place to start.
            </p>

          </div>

          {/* FAQ Section */}
          <div className="mt-16 pt-12 border-t border-gray-200">
            <h2 className="font-display text-2xl text-navy-900 font-bold mb-8">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-bold text-navy-900 mb-2">What is the best fuel card for owner-operators?</h3>
                <p className="text-gray-700">The best card depends on your routes. TCS and RTS offer strong in-network discounts at TA/Petro and other truck stops. Comdata and Fleet One provide wide acceptance. Key factors: network coverage along your lanes, in-network discount amount, and transaction fees. Compare your actual routes to each card's network before choosing.</p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-bold text-navy-900 mb-2">How much can you save with a fuel card?</h3>
                <p className="text-gray-700">Basic fuel cards save 10-20¢/gallon over retail through cash pricing and network discounts. Premium cards and carrier network programs can save 30-50¢/gallon at in-network locations. For a truck burning 16,000+ gallons/year, that's $1,600-$8,000 in annual savings depending on card choice and usage discipline.</p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-bold text-navy-900 mb-2">How do large fleets get better fuel prices?</h3>
                <p className="text-gray-700">Large fleets commit to volume purchases and negotiate directly with fuel suppliers and truck stop chains. A 100-truck fleet buying 1.5+ million gallons annually has significant leverage. Individual owner-operators can access similar pricing through carrier networks that pool purchasing volume across multiple independent carriers.</p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-bold text-navy-900 mb-2">What percentage of trucking costs is fuel?</h3>
                <p className="text-gray-700">Fuel typically represents 35-40% of total operating costs for trucking operations. For a truck running 100,000 miles at 6 MPG with diesel at $4/gallon, that's approximately $66,000 annually in fuel expense—often the largest single cost category after driver compensation or truck payments.</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 bg-navy-900 rounded-lg p-8 text-center">
            <h2 className="font-display text-2xl text-white font-bold mb-4">
              Want Access to Fleet-Level Fuel Pricing?
            </h2>
            <p className="text-white/70 mb-6 max-w-lg mx-auto">
              Our carrier network members access fuel discounts typically reserved for large fleets. See what you could save with volume pricing.
            </p>
            <Link 
              href="/book-call" 
              className="inline-flex items-center justify-center bg-gold-500 hover:bg-gold-400 text-navy-900 font-bold py-3 px-8 rounded transition-colors"
            >
              Get Your Free Fuel Savings Analysis
            </Link>
          </div>

        </div>
      </section>
    </article>
  )
}