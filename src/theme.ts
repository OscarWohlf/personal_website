export function initTheme() {
  const root = document.documentElement
  const stored = localStorage.getItem('theme')
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  root.classList.toggle('dark', (stored ?? (prefersDark ? 'dark' : 'light')) === 'dark')
}

export function toggleTheme() {
  console.log('toggleTheme clicked')
  const root = document.documentElement
  const isDark = root.classList.toggle('dark')
  localStorage.setItem('theme', isDark ? 'dark' : 'light')
}