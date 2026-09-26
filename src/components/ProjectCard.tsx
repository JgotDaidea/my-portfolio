type ProjectCardProps = {
    title: string
    description: string
    technologies: string[]
    githubUrl: string
    liveUrl?: string
}

function ProjectCard({
    title,
    description,
    technologies,
    githubUrl,
    liveUrl,
}: ProjectCardProps) {
    return (
        <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md">
            <div className="mb-4 flex items-center justify-between gap-3">
                <h3 className="text-xl font-bold text-slate-900">{title}</h3>
                <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-600">
                    Project
                </span>
            </div>

            <p className="text-sm leading-6 text-slate-600">{description}</p>

            <div className="mt-5 flex flex-wrap gap-2">
                {technologies.map((technology) => (
                    <span
                        key={technology}
                        className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700"
                    >
                        {technology}
                    </span>
                ))}
            </div>

            <div className="mt-6 flex gap-3">
                <a
                    href={githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-lg border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-900"
                >
                    GitHub
                </a>
                {liveUrl && (
                    <a
                        href={liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-lg bg-black px-3 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
                    >
                        Live Demo
                    </a>
                )}
            </div>
        </article>
    )
}

export default ProjectCard