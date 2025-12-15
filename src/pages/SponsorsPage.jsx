import { Link } from 'react-router-dom'

const tiers = [
  // {
  //   title: 'Title Sponsor',
  //   perks: [
  //     'Hero logo placement across the campus',
  //     'Prime keynote spotlight with product launch slot',
  //     'Dedicated experience lounge with concierge',
  //   ],
  //   gradient: 'from-purple-400/80 via-indigo-500/80 to-cyan-400/80',
  // },
  // {
  //   title: 'Gold Sponsor',
  //   perks: [
  //     'Premium booth with interactive lighting',
  //     'Workshop slot with curated attendees',
  //     'VIP night summit access for your leaders',
  //   ],
  //   gradient: 'from-amber-300/80 via-orange-400/80 to-rose-400/80',
  // },
  // {
  //   title: 'Silver Sponsor',
  //   perks: [
  //     'High-visibility branding across lounges',
  //     'Startup showcase co-hosting opportunity',
  //     'Priority access to recruitment lounge',
  //   ],
  //   gradient: 'from-slate-200/70 via-blue-200/70 to-cyan-200/70',
  // },
]

function SponsorsPage() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-rose-50 to-amber-50/40">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-60px] top-0 h-80 w-80 rounded-full bg-rose-200/40 blur-[120px] animate-blob" />
        <div className="absolute right-[-60px] bottom-0 h-80 w-80 rounded-full bg-amber-200/40 blur-[120px] animate-blob" />
      </div>

      <div className="relative mx-auto flex max-w-5xl flex-col gap-10 px-4 pb-16 pt-12 md:px-6 md:pt-16">
        <div className="text-center">
          <span className="pill">Partnerships</span>
          <h2 className="mt-4 text-4xl font-black text-slate-900 md:text-5xl">
            Sponsorship with <span className="gradient-text">impact</span>
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-lg text-slate-600">
            Gradient-bordered tiers, hover glows, and a premium journey to connect you with the
            world&apos;s boldest builders.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.title}
              className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.1)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(15,23,42,0.15)]"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${tier.gradient} opacity-15`} />
              <div className="relative space-y-4">
                <p className="pill inline-block">{tier.title}</p>
                <h3 className="text-xl font-semibold text-slate-900">{tier.title} Benefits</h3>
                <ul className="space-y-3 text-sm text-slate-600">
                  {tier.perks.map((perk) => (
                    <li key={perk} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-gradient-to-r from-rose-500 to-orange-400" />
                      {perk}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="glass flex flex-col items-center gap-4 rounded-3xl px-6 py-8 text-center md:px-10">
          <p className="pill">Let&apos;s build together</p>
          <h3 className="text-2xl font-bold text-slate-900">Become a Sponsor</h3>
          <p className="max-w-2xl text-sm text-slate-600">
            Co-create bespoke experiences, showcase your tech, and meet the world&apos;s most driven
            innovators. We tailor each package to your brand story.
          </p>
          <Link
            to="/nvision"
            className="rounded-full bg-gradient-to-r from-rose-500 via-red-500 to-orange-400 px-6 py-3 text-xs font-semibold uppercase tracking-wide text-white shadow-[0_15px_30px_rgba(244,63,94,0.35)] transition hover:translate-y-[-1px]"
          >
            Become a Sponsor
          </Link>
        </div>
      </div>
    </section>
  )
}

export default SponsorsPage

