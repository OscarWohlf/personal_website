// src/components/Navbar.tsx
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import ThemeToggle from './ThemeToggle'
import { useI18n } from "../i18n/i18n"
import LangToggle from "./LangToggle"

function NavA({
  to,
  end,
  children,
  onClick,
}: {
  to: string
  end?: boolean
  children: React.ReactNode
  onClick?: () => void
}) {
  const base =
    "px-2 py-2 text-base xl:text-[15px] transition-opacity hover:opacity-80 " +
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-black/30 dark:focus-visible:ring-white/30"
  const active = "underline decoration-2 underline-offset-8"
  return (
    <NavLink
      to={to}
      end={end}
      onClick={onClick}
      className={({ isActive }) => `${base} ${isActive ? active : ''}`}
    >
      {children}
    </NavLink>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { t } = useI18n()

  return (
    <header className="sticky top-0 z-50 border-b dark:border-zinc-800 backdrop-blur bg-white/70 dark:bg-zinc-900/70 print:hidden">
      <div className="px-3 md:px-6">
        {/* Top row: desktop grid only at xl; phones/tablets stay flex */}
        <div className="flex items-center justify-between xl:grid xl:grid-cols-3 min-h-16 py-2">
          {/* Brand (truncate on small; full name on xl) */}
          <div className="min-w-0 flex-1 xl:min-w-[auto] xl:flex-none">
            <NavLink
              to="/"
              end
              onClick={() => setOpen(false)}
              className="tracking-tight font-normal whitespace-nowrap truncate leading-tight
                         text-lg sm:text-xl xl:text-3xl 2xl:text-4xl"
              title="Oscar Johan Høeg Wohlfahrt"
            >
              {/* Shorter labels on small; full at xl+ */}
              <span className="sm:hidden">Oscar Wohlfahrt</span>
              <span className="hidden sm:inline xl:hidden">Oscar J. H. Wohlfahrt</span>
              <span className="hidden xl:inline">Oscar Johan Høeg Wohlfahrt</span>
            </NavLink>
          </div>

          {/* Center nav — only on real desktop (xl and up) */}
          <nav className="hidden xl:flex justify-center items-center gap-5">
            <NavA to="/" end>{t("nav.about")}</NavA>
            <NavA to="/projects">{t("nav.projects")}</NavA>
            <NavA to="/cv">{t("nav.cv")}</NavA>
            <NavA to="/contact">{t("nav.contact")}</NavA>
          </nav>

          {/* Right actions: Lang/Theme only on xl; burger on smaller */}
          <div className="flex items-center justify-end gap-2 shrink-0">
            <div className="hidden xl:flex items-center gap-2">
              <LangToggle />
              <ThemeToggle />
            </div>
            <button
              className="xl:hidden p-2 rounded-xl border dark:border-zinc-700"
              onClick={() => setOpen(v => !v)}
              aria-label="Toggle menu"
              aria-expanded={open}
              aria-controls="mobile-nav"
            >
              {open ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile/Tablet menu (phones + iPad) */}
        <div
          id="mobile-nav"
          className={`xl:hidden overflow-hidden transition-[max-height,opacity] duration-200 ${
            open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="pb-3 pt-2 grid gap-2">
            <NavA to="/" end onClick={() => setOpen(false)}>{t("nav.about")}</NavA>
            <NavA to="/projects" onClick={() => setOpen(false)}>{t("nav.projects")}</NavA>
            <NavA to="/cv" onClick={() => setOpen(false)}>{t("nav.cv")}</NavA>
            <NavA to="/contact" onClick={() => setOpen(false)}>{t("nav.contact")}</NavA>
            <div className="mt-2 flex items-center gap-2">
              <LangToggle />
              <ThemeToggle />
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
