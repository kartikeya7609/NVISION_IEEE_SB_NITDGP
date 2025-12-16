import logo from '../assets/ieee-logo.svg'

function Loader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-white via-blue-50 to-cyan-50 px-4">
      <div className="flex w-full max-w-md flex-col items-center gap-6 rounded-3xl border border-blue-100 bg-white/95 p-8 shadow-[0_25px_70px_rgba(37,99,235,0.15)] backdrop-blur-xl">
        <div className="relative">
          <div className="absolute inset-0 rounded-full  animate-pulse" />
            <div className="flex h-full w-full items-center justify-center rounded-full bg-white p-2">
              <img 
                src={logo} 
                alt="IEEE SB NIT Durgapur" 
                className="h-full w-full object-contain rounded-full" 
              />
            </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <h3 className="text-lg font-bold text-slate-900">NVISION</h3>
          <p className="text-xs font-medium uppercase tracking-wider text-slate-500">Loading...</p>
        </div>
        <div className="loader-line" />
      </div>
    </div>
  )
}

export default Loader

// bg-gradient-to-br from-blue-400 via-indigo-400 to-cyan-400 blur-xl opacity-50