import { toggleTheme } from '../theme'

export default function ThemeToggle() {
  return (
    <button
      onClick={toggleTheme}
      className="rounded-xl px-3 py-2 text-sm border hover:shadow transition
                 bg-white dark:bg-zinc-800 dark:text-zinc-100 dark:border-zinc-700"
      aria-label="Toggle dark mode"
    >
      ☀︎ / ☾
    </button>
  )
}