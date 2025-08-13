import { NavLink } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

const linkBase = "hover:underline"
const linkActive = "underline decoration-2 underline-offset-4"

function NavA({ to, end, children }: { to: string; end?: boolean; children: React.ReactNode }) {
  return (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) => `${linkBase} ${isActive ? linkActive : ''}`}
    >
      {children}
    </NavLink>
  )
}

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 dark:bg-zinc-900/70 border-b dark:border-zinc-800">
      <div className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between">
        <NavLink to="/" end className="font-semibold">Oscar Wohlfahrt</NavLink>
        <nav className="flex items-center gap-4 text-sm">
          <NavA to="/" end>About</NavA>
          <NavA to="/projects">Projects</NavA>
          <NavA to="/cv">CV</NavA>
          <NavA to="/contact">Contact</NavA>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}
