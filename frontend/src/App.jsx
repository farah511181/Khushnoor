import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from 'react-router-dom'

import { useEffect } from 'react'

import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

import Home from './pages/Home/Home'
import About from './pages/About/About'

import Photography from './pages/Photography/Photography'
import PreWedding from './pages/Photography/PreWedding/PreWedding'
import PostWedding from './pages/Photography/PostWedding/PostWedding'
import Wedding from './pages/Photography/Wedding/Wedding'
import Family from './pages/Photography/Family/Family'
import Fashion from './pages/Photography/Fashion/Fashion'
import Contact from './pages/Contact/Contact'


// =========================================================
// SCROLL TO TOP
// =========================================================

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}


// =========================================================
// WEBSITE LAYOUT
// Navbar + Footer sirf main website par
// =========================================================

function WebsiteLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-charcoal text-sand">

      <Navbar />

      <main className="flex-grow">
        <Routes>

          {/* HOME */}
          <Route
            path="/home"
            element={<Home />}
          />

          {/* ABOUT */}
          <Route
            path="/about"
            element={<About />}
          />

          {/* PHOTOGRAPHY */}
          <Route
            path="/photography"
            element={<Photography />}
          />

          <Route
            path="/photography/pre-wedding"
            element={<PreWedding />}
          />

          <Route
            path="/photography/post-wedding"
            element={<PostWedding />}
          />

          <Route
            path="/photography/wedding"
            element={<Wedding />}
          />

          <Route
            path="/photography/family"
            element={<Family />}
          />

          <Route
            path="/photography/fashion"
            element={<Fashion />}
          />
         

          {/* CONTACT */}
          <Route
            path="/contact"
            element={<Contact />}
          />

          {/* UNKNOWN WEBSITE URL */}
          <Route
            path="*"
            element={<Navigate to="/home" replace />}
          />

        </Routes>
      </main>

      <Footer />

    </div>
  )
}


// =========================================================
// APP
// =========================================================

function App() {
  return (
    <BrowserRouter>

      <ScrollToTop />

      <Routes>

       


        {/* =================================================
            MAIN WEBSITE

            /home
            /about
            /photography
            /contact
            etc.
        ================================================= */}

        <Route
          path="/*"
          element={<WebsiteLayout />}
        />

      </Routes>

    </BrowserRouter>
  )
}


export default App