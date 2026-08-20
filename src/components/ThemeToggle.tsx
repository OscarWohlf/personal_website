import { toggleTheme } from '../theme'

export default function ThemeToggle() {
  return (
    <button
      onClick={toggleTheme}
      className="rounded-xl px-3 py-2 text-sm border hover:shadow transition
                 border-stone-300/80 bg-stone-100/70 text-stone-800
                 dark:bg-zinc-800 dark:text-zinc-100 dark:border-zinc-700"
      aria-label="Toggle dark mode"
    >
      Theme
    </button>
  )
}
