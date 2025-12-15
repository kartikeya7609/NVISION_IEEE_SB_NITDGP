const highlights = [
  {
    title: 'About NVISION',
    copy: 'A premium festival uniting creators, engineers, artists, and founders to co-build the next decade of technology.',
  },
  {
    title: 'Theme',
    copy: 'Gravity-defying experiences across AI, XR, cloud-native, and human-computer symphony. Everything is interactive.',
  },
  {
    title: 'Highlights',
    copy: 'Executive keynotes, midnight summits, global challenges, immersive installations, and zero-latency demo floors.',
  },
  {
    title: 'Schedule',
    copy: '3-day immersion with day-time labs, night-time summits, curated meetups, and one ultra-special closing act.',
  },
  {
    title: 'Venue',
    copy: 'Iconic National Institute of Technology Durgapur Convention Campus transformed with light architecture, ambient sound, and signature lounges.',
  },
]

const timeline = [
  { time: '09:00', title: 'Immersive Arena Opens', detail: 'Guided walkthrough + live holographic welcome.' },
  { time: '11:30', title: 'Keynote Pulse', detail: 'Inventors drop their latest releases and live demos.' },
  { time: '14:00', title: 'Labs Go Live', detail: 'AI fabric, XR playground, robotics, cloud native sprint sessions.' },
  { time: '18:30', title: 'Global Challenge', detail: 'Teams converge for a 36-hour build—mentors on deck.' },
  { time: '22:00', title: 'Night Summit', detail: 'Skyline views, ambient soundscapes, founders-only lounges.' },
]

function NvisionDetailsPage() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-blue-50">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-10 top-0 h-80 w-80 rounded-full bg-rose-200/40 blur-[110px] animate-blob" />
        <div className="absolute right-10 top-16 h-72 w-72 rounded-full bg-sky-200/40 blur-[110px] animate-blob" />
        <div className="absolute bottom-[-80px] left-1/3 h-96 w-96 rounded-full bg-amber-200/40 blur-[120px] animate-blob" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-4 pb-16 pt-12 md:px-6 md:pt-16">
        <div className="space-y-3 text-center">
          <span className="pill">Event Details</span>
          <h2 className="text-4xl font-black text-slate-900 md:text-5xl">
            NVISION <span className="gradient-text">Immersion</span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-slate-600">
            Every corner engineered for momentum: bold gradients, soft glassmorphism, and a timeline
            that moves with you.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item) => (
            <div key={item.title} className="section-card flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <span className="h-10 w-10 rounded-2xl bg-gradient-to-br from-rose-500/80 to-orange-400/80" />
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
              </div>
              <p className="text-sm text-slate-600">{item.copy}</p>
            </div>
          ))}
        </div>

        <div className="divider" />

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="section-card">
            <p className="pill mb-4">Experience Path</p>
            <h3 className="text-2xl font-bold text-slate-900">Signature Timeline</h3>
            <div className="mt-6 space-y-6">
              {timeline.map((entry, idx) => (
                <div key={entry.title} className="relative flex items-start gap-4">
                  <div className="flex flex-col items-center">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-rose-500 to-orange-400 text-sm font-semibold text-white shadow-[0_15px_30px_rgba(244,63,94,0.35)]">
                      {entry.time}
                    </div>
                    {idx < timeline.length - 1 && (
                      <div className="mt-1 h-16 w-px bg-gradient-to-b from-rose-200 to-transparent" />
                    )}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-rose-500">{entry.title}</p>
                    <p className="text-sm text-slate-600">{entry.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="section-card">
            <p className="pill mb-4">Premium Perks</p>
            <ul className="space-y-4 text-sm text-slate-600">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-gradient-to-r from-rose-500 to-orange-400" />
                Dedicated concierge, invite-only lounges, and backstage access to founders.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-gradient-to-r from-rose-500 to-orange-400" />
                Lightning mentorship pods with domain experts and product architects.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-gradient-to-r from-rose-500 to-orange-400" />
                Night summit after-party with ambient music, skyline visuals, and gourmet bites.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-gradient-to-r from-rose-500 to-orange-400" />
                Curated partner booths, interactive labs, and real-time prototypes to test.
              </li>
            </ul>
            <div className="mt-6 rounded-2xl bg-rose-50/60 p-4 text-sm text-slate-600">
              <p className="font-semibold text-rose-500">Venue</p>
              <p>National Institute of Technology Durgapur Convention Campus · Ultra-wide main hall · Immersive light architecture</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NvisionDetailsPage

