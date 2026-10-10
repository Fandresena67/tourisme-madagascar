import { Route, Routes } from 'react-router-dom'
import './App.css'
import MainLayout from './layouts/MainLayout'
import About from './pages/About'
import Activities from './pages/Activities'
import ActivityDetail from './pages/ActivityDetail'
import Contact from './pages/Contact'
import Credits from './pages/Credits'
import DestinationDetail from './pages/DestinationDetail'
import Destinations from './pages/Destinations'
import Home from './pages/Home'
import HotelDetail from './pages/HotelDetail'
import Hotels from './pages/Hotels'
import NotFound from './pages/NotFound'
import Reservation from './pages/Reservation'

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/destinations/:slug" element={<DestinationDetail />} />
        <Route path="/activites" element={<Activities />} />
        <Route path="/activites/:slug" element={<ActivityDetail />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/hotels/:slug" element={<HotelDetail />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/credits" element={<Credits />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
