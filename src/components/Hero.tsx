function Hero() {
    return (
        <section
            id="home"
            className="mx-auto flex min-h-[75vh] max-w-6xl items-center px-6 py-20"
        >
            <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Hello, I&apos;m
                </p>
                <h1 className="text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl">
                    Jeremia Mosiane
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                    I build modern web and mobile experiences with React, TypeScript,
                    and Flutter—turning ideas into products that are useful, clean, and
                    easy to use.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                    <a
                        href="#projects"
                        className="rounded-lg bg-black px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
                    >
                        View my projects
                    </a>
                    <a
                        href="#contact"
                        className="rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-900"
                    >
                        Contact me
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Hero
