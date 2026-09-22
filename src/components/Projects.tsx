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
description: 'A personal portfolio built with React.',
technologies: ['React', 'TypeScript', 'Tailwind'],
githubUrl: 'https://github.com/yourusername/project-one',
liveUrl: 'https://example.com',
},
{
title: 'Leave Request Web App',
description: 'A web application for managing employee leaves.',
technologies: ['JavaScript', 'CSS'],
githubUrl: 'https://github.com/yourusername/project-two',
},
]

function Projects() {
return (
<section id="projects" className="bg-gray-50 px-6 py-20">
<div className="mx-auto max-w-6xl">
<h2 className="text-3xl font-bold">Projects</h2>
<div className="mt-8 grid gap-6 md:grid-cols-2">
{projects.map((project) => (
<ProjectCard
key={project.title}
{...project}
/>
))}
</div>
</div>
</section>
)
}
export default Projects
