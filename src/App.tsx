import Navbar from './components/Navbar'
import Projects from './sections/Projects'

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100">
      <Navbar />

      <main className="mx-auto max-w-5xl px-4">
        {/* Hero */}
        <section className="py-16 md:py-24">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
            Computational Science & ML — projects, notes, and experiments
          </h1>
          <p className="mt-4 max-w-2xl text-zinc-600 dark:text-zinc-400">
            I’m a CSE student at EPFL. I like applied ML in biology/medicine, survival analysis,
            and systems. Here’s a curated set of projects and writing.
          </p>
        </section>

        {/* About */}
        <section id="about" className="py-12 border-t dark:border-zinc-800">
          <h2 className="text-xl font-semibold">About</h2>
          <p className="mt-3 max-w-3xl text-zinc-600 dark:text-zinc-400">
            Short bio, links to CV, GitHub, LinkedIn, email.
          </p>
        </section>

        {/* Projects */}
        <section id="projects" className="py-12 border-t dark:border-zinc-800">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Projects</h2>
          </div>
          <Projects />
        </section>

        {/* Contact */}
        <section id="contact" className="py-12 border-t dark:border-zinc-800">
          <h2 className="text-xl font-semibold">Contact</h2>
          <ul className="mt-3 space-y-2 text-zinc-600 dark:text-zinc-400">
            <li>Email: <a className="underline" href="mailto:you@domain.com">you@domain.com</a></li>
            <li>GitHub: <a className="underline" href="https://github.com/YOU">github.com/YOU</a></li>
            <li>LinkedIn: <a className="underline" href="https://linkedin.com/in/YOU">linkedin.com/in/YOU</a></li>
          </ul>
        </section>
      </main>

      <footer className="mt-16 py-8 border-t dark:border-zinc-800 text-sm text-zinc-500 dark:text-zinc-400">
        <div className="mx-auto max-w-5xl px-4">&copy; {new Date().getFullYear()} Oscar Wohlfahrt</div>
      </footer>
    </div>
  )
}
