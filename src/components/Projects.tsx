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
<article className="rounded-lg bg-white p-6 shadow-sm">
<h3 className="text-xl font-semibold">{title}</h3>
<p className="mt-2 text-gray-600">{description}</p>
<div className="mt-4 flex flex-wrap gap-2">
{technologies.map((technology) => (
<span key={technology} className="rounded bg-gray-100 px-2 py-1 text-sm">
{technology}
</span>
))}
</div>
<div className="mt-6 flex gap-4">
<a href={githubUrl} className="text-blue-600 hover:underline">
GitHub
</a>
{liveUrl && (
<a href={liveUrl} className="text-blue-600 hover:underline">
Live Demo
</a>
)}
</div>
</article>
)
}
const projects = [
    {
        title: 'My Portfolio Website',
        description: 'A personal portfolio built with React and TypeScript to showcase my work and contact information.',
        technologies: ['React', 'TypeScript', 'Tailwind'],
        githubUrl: 'https://github.com/yourusername/project-one',
        liveUrl: 'http://localhost:5174/',
    },
    {
        title: 'Leave Request Web App',
        description: 'A clean leave management application for tracking employee requests, approval status, and team scheduling.',
        technologies: ['JavaScript', 'CSS', 'Web App'],
        githubUrl: 'https://github.com/yourusername/project-two',
    },
    {
        title: 'Task Manager',
        description: 'A simple productivity app for managing daily tasks, priorities, and deadlines in a focused interface.',
        technologies: ['React', 'JavaScript', 'UI Design'],
        githubUrl: 'https://github.com/yourusername/project-three',
    },
]

function Projects() {
    return (
        <section id="projects" className="bg-slate-50 px-6 py-20">
            <div className="mx-auto max-w-6xl">
                <div className="mb-8">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                        Selected work
                    </p>
                    <h2 className="mt-2 text-3xl font-bold text-slate-900">Projects</h2>
                </div>

                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {projects.map((project) => (
                        <ProjectCard key={project.title} {...project} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
