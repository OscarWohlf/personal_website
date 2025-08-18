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
    "px-2 py-2 text-base md:text-[15px] transition-opacity hover:opacity-80 " +
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
        <div className="flex items-center justify-between md:grid md:grid-cols-3 min-h-16 py-2">
          <NavLink
            to="/"
            end
            className="tracking-tight font-normal whitespace-nowrap leading-tight
                       text-xl sm:text-2xl md:text-3xl lg:text-4xl"
            title="Oscar Johan Høeg Wohlfahrt"
          >
            Oscar Johan Høeg Wohlfahrt
          </NavLink>

          <nav className="hidden md:flex justify-center items-center gap-5">
            <NavA to="/" end>{t("nav.about")}</NavA>
            <NavA to="/projects">{t("nav.projects")}</NavA>
            <NavA to="/cv">{t("nav.cv")}</NavA>
            <NavA to="/contact">{t("nav.contact")}</NavA>
          </nav>

          <div className="flex items-center justify-end gap-2">
            <LangToggle />
            <ThemeToggle />
            <button
              className="md:hidden p-2 rounded-xl border dark:border-zinc-700"
              onClick={() => setOpen(v => !v)}
              aria-label="Toggle menu"
              aria-expanded={open}
              aria-controls="mobile-nav"
            >
              {open ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Phone Nav */}
        <div
          id="mobile-nav"
          className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-200 ${
            open ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="pb-3 pt-2 grid gap-2">
            <NavA to="/" end onClick={() => setOpen(false)}>About</NavA>
            <NavA to="/projects" onClick={() => setOpen(false)}>Projects</NavA>
            <NavA to="/cv" onClick={() => setOpen(false)}>CV</NavA>
            <NavA to="/contact" onClick={() => setOpen(false)}>Contact</NavA>
          </nav>
        </div>
      </div>
    </header>
  )
}
