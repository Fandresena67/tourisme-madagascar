import { Outlet } from 'react-router-dom'
import Footer from '../components/layout/Footer'
import Navbar from '../components/layout/Navbar'
import ScrollToTop from '../components/layout/ScrollToTop'

function MainLayout() {
  return (
    <div className="app-shell">
      <ScrollToTop />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-brand focus:px-4 focus:py-2 focus:font-semibold focus:text-white"
      >
        Aller au contenu
      </a>
      <Navbar />
      <div id="main-content" className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default MainLayout
