import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Loader from './components/Loader'
import CarouselPage from './pages/CarouselPage'
import CountdownPage from './pages/CountdownPage'
import HomePage from './pages/HomePage'
import NvisionDetailsPage from './pages/NvisionDetailsPage'
import SponsorsPage from './pages/SponsorsPage'
import ContactPage from './pages/ContactPage'
import { useEffect, useState } from 'react'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-white via-blue-50 to-cyan-50 text-slate-800">
      {isLoading && <Loader />}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 top-[-80px] h-72 w-72 rounded-full bg-blue-200/60 blur-[100px] animate-blob" />
        <div className="absolute right-[-60px] top-10 h-60 w-60 rounded-full bg-sky-200/60 blur-[90px] animate-blob" />
        <div className="absolute bottom-[-90px] left-10 h-80 w-80 rounded-full bg-amber-200/40 blur-[100px] animate-blob" />
        <div className="absolute inset-0 bg-grid-light bg-[length:18px_18px] opacity-20" />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/countdown" element={<CountdownPage />} />
            <Route path="/events" element={<CarouselPage />} />
            <Route path="/nvision" element={<NvisionDetailsPage />} />
            <Route path="/sponsors" element={<SponsorsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
