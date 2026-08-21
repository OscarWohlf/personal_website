import { Routes, Route, Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Analytics } from '@vercel/analytics/react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Cv from './pages/Cv'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import ProjectDetails from './pages/ProjectDetails'
import Updates from './pages/Updates'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior }) }, [pathname])
  return null
}

function Layout() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-950 dark:bg-zinc-900 dark:text-zinc-100">
      <Navbar />
      <ScrollToTop />
      <main className="mx-auto max-w-5xl px-4">
        <Outlet />
      </main>
      <footer className="mt-16 py-8 border-t border-stone-200/80 dark:border-zinc-800 text-sm text-stone-500 dark:text-zinc-400">
        <div className="mx-auto max-w-5xl px-4">&copy; {new Date().getFullYear()} Oscar Wohlfahrt</div>
      </footer>
    </div>
  )
}

export default function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetails />} />
          <Route path="/updates" element={<Updates />} />
          <Route path="/cv" element={<Cv />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <Analytics />
    </>
  )
}
