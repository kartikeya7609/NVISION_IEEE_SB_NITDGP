import logo from '../assets/ieee-logo.svg'

function Loader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white px-4">
      <div className="flex w-full max-w-xl flex-col items-center gap-4 rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-[0_25px_70px_rgba(15,23,42,0.12)]">
        <img src={logo} alt="IEEE Loader" className="h-16 w-auto md:h-18" />
        <div className="loader-line" />
      </div>
    </div>
  )
}

export default Loader

