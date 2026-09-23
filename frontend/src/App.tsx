import { MapPin, Menu, Search, X } from 'lucide-react'
import { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import './App.css'

function Home() {
  return (
    <main>
      <section className="hero">
        <p className="eyebrow">Explorez autrement</p>
        <h1>Le monde vous attend.</h1>
        <p>Une base simple pour découvrir les plus belles expériences touristiques.</p>
        <Link className="button" to="/destinations">Découvrir les destinations</Link>
      </section>
      <section className="section">
        <p className="eyebrow">À venir</p>
        <h2>Votre prochaine aventure commence ici.</h2>
      </section>
    </main>
  )
}

function Destinations() {
  return <main className="section"><p className="eyebrow">Destinations</p><h1>Découvrez nos destinations</h1><p>Le catalogue sera disponible prochainement.</p></main>
}

function App() {
  const [open, setOpen] = useState(false)
  return (
    <div className="app-shell">
      <header className="navbar">
        <Link className="brand" to="/" onClick={() => setOpen(false)}><MapPin size={22} /> Tourisme</Link>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Ouvrir le menu">{open ? <X /> : <Menu />}</button>
        <nav className={open ? 'nav-links open' : 'nav-links'}>
          <Link to="/" onClick={() => setOpen(false)}>Accueil</Link>
          <Link to="/destinations" onClick={() => setOpen(false)}>Destinations</Link>
          <a href="#recherche"><Search size={18} /> Rechercher</a>
        </nav>
      </header>
      <Routes><Route path="/" element={<Home />} /><Route path="/destinations" element={<Destinations />} /><Route path="*" element={<Home />} /></Routes>
      <footer>© 2026 Tourisme · Une nouvelle façon de voyager.</footer>
    </div>
  )
}

export default App
