import { Link } from 'react-router-dom'

const features = [
  {
    title: 'Immersive Tech',
    desc: 'Live demos across AI, XR, robotics, and cloud-native stacks.',
    accent: 'from-purple-400/70 to-indigo-500/80',
  },
  {
    title: 'World-Class Speakers',
    desc: 'Inventors, founders, and visionaries shaping what comes next.',
    accent: 'from-cyan-400/70 to-blue-500/80',
  },
  {
    title: 'Future-Ready Labs',
    desc: 'Hands-on studios with lightning-fast mentorship and prototyping.',
    accent: 'from-pink-400/70 to-fuchsia-500/80',
  },
]

const moments = [
  'Immersive AR arenas',
  '24/7 innovation lounge',
  'Global dev challenges',
  'Signature night summit',
]

function HomePage() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-rose-50 to-blue-50">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-0 h-80 w-80 rounded-full bg-rose-200/60 blur-[120px] animate-blob" />
        <div className="absolute right-1/5 top-10 h-72 w-72 rounded-full bg-sky-200/50 blur-[110px] animate-blob" />
        <div className="absolute -left-16 bottom-0 h-72 w-72 rounded-full bg-amber-200/50 blur-[110px] animate-blob" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-4 pb-16 pt-12 md:px-6 md:pt-16">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl space-y-6">
            <span className="pill">World Premiere Event</span>
            <h1 className="text-4xl font-black leading-tight text-slate-900 md:text-5xl lg:text-6xl">
              <span className="gradient-text">NVISION</span>
              <br />
              Best In The World Tech Experience
            </h1>
            <p className="text-lg text-slate-600 md:text-xl">
              Step inside a festival of invention—limitless tech showcases, immersive labs, and the
              brightest minds redefining what&apos;s possible.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/countdown"
                className="rounded-full bg-gradient-to-r from-rose-500 via-red-500 to-orange-400 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-[0_15px_30px_rgba(244,63,94,0.35)] transition hover:translate-y-[-1px]"
              >
                View Event
              </Link>
              <Link
                to="/events"
                className="rounded-full border border-rose-200 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-rose-500 transition hover:bg-rose-50"
              >
                Explore Events
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm text-slate-600 md:max-w-xl">
              {moments.map((item) => (
                <div key={item} className="glass flex items-center gap-3 rounded-2xl px-3 py-3">
                  <span className="h-2 w-2 rounded-full bg-gradient-to-r from-rose-500 to-orange-400" />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="glass relative mx-auto w-full max-w-md overflow-hidden rounded-3xl border border-slate-200 p-6 shadow-[0_25px_70px_rgba(15,23,42,0.1)]">
            <div className="absolute -left-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-orange-200/60 to-rose-200/40 blur-[70px]" />
            <div className="absolute -right-12 -bottom-10 h-28 w-28 rounded-full bg-gradient-to-br from-sky-200/60 to-amber-200/40 blur-[70px]" />
            <div className="relative space-y-4">
              <p className="pill inline-block">Premium Pass</p>
              <h3 className="text-2xl font-bold text-slate-900">Experience the future, live.</h3>
              <p className="text-sm text-slate-600">
                Unlock curated labs, private lounges, and the NVISION night summit. The event built
                for creators who move faster than light.
              </p>
              <div className="divider" />
              <div className="flex items-center justify-between text-sm text-slate-600">
                <span>Access</span>
                <span className="font-semibold text-rose-500">1 Day Immersion</span>
              </div>
              <div className="flex items-center justify-between text-sm text-slate-600">
                <span>Location</span>
                <span className="font-semibold text-rose-500">National Institute of Technology Durgapur</span>
              </div>
              <div className="flex items-center justify-between text-sm text-slate-600">
                <span>Launch</span>
                <span className="font-semibold text-rose-500">2026 Edition</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="section-card">
              <div
                className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.accent}`}
              >
                <div className="h-8 w-8 rounded-xl bg-black/40" />
              </div>
              <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
              <p className="mt-3 text-sm text-slate-600">{feature.desc}</p>
              <div className="mt-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-rose-500">
                <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-rose-500 to-orange-400" />
                Crafted for trailblazers
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomePage

