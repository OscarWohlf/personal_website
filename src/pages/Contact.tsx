export default function Contact() {
  return (
    <section className="py-12">
      <h2 className="text-xl font-semibold">Contact</h2>
      <ul className="mt-4 space-y-2 text-zinc-600 dark:text-zinc-400">
        <li>Email: <a className="underline" href="mailto:you@domain.com">you@domain.com</a></li>
        <li>GitHub: <a className="underline" href="https://github.com/YOU" target="_blank">github.com/YOU</a></li>
        <li>LinkedIn: <a className="underline" href="https://linkedin.com/in/YOU" target="_blank">linkedin.com/in/YOU</a></li>
      </ul>
    </section>
  )
}