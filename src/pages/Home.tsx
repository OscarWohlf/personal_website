export default function Home() {
  return (
    <section className="py-16 md:py-24">
      <div className="grid items-center gap-8 md:grid-cols-[240px,1fr]">
        <img
          src="me.jpg"
          alt="Portrait of Oscar Wohlfahrt"
          className="w-40 h-40 md:w-60 md:h-60 object-cover rounded-2xl border dark:border-zinc-800"
          loading="lazy"
        />
        <div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
            Hey, I'm Oscar — I build ML + computational science projects.
          </h1>
          <p className="mt-4 max-w-2xl text-zinc-600 dark:text-zinc-400">
            Short intro about you. A sentence or two about interests, current role/school,
            and what you're exploring.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a className="px-4 py-2 rounded-xl border dark:border-zinc-700 hover:shadow" href="/cv">
              View CV
            </a>
            <a className="px-4 py-2 rounded-xl border dark:border-zinc-700 hover:shadow" href="/projects">
              See Projects
            </a>
            <a className="px-4 py-2 rounded-xl border dark:border-zinc-700 hover:shadow" href="/contact">
              Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
