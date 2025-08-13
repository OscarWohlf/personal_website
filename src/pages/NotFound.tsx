export default function NotFound() {
  return (
    <section className="py-24 text-center">
      <h2 className="text-2xl font-semibold">404 — Not found</h2>
      <p className="mt-2 text-zinc-600 dark:text-zinc-400">This page doesn’t exist.</p>
      <a className="mt-6 inline-block underline" href="/">Go home</a>
    </section>
  )
}