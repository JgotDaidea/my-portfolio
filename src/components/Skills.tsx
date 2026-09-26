const skills = [
    {
        name: 'React',
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    },
    {
        name: 'TypeScript',
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    },
    {
        name: 'HTML',
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    },
    {
        name: 'JavaScript',
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    },
    {
        name: 'CSS',
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    },
    {
        name: 'Dart',
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg',
    },
    {
        name: 'Flutter',
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
    },
    {
        name: 'VS Code',
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg',
    },
    {
        name: 'C#',
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
    },
    {
        name: 'ASP.NET',
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg',
    },
]

function Skills() {
    return (
        <section id="skills" className="px-6 py-20">
            <div className="mx-auto max-w-6xl">
                <h2 className="text-3xl font-bold">Skills</h2>
                <div className="mt-8 flex flex-wrap justify-center gap-4 sm:justify-start">
                    {skills.map((skill) => (
                        <div
                            key={skill.name}
                            className="tech-item flex w-24 flex-col items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 p-3 text-center shadow-sm transition-transform duration-200 hover:-translate-y-1"
                        >
                            <img
                                src={skill.src}
                                alt={skill.name}
                                className="h-10 w-10 object-contain"
                            />
                            <span className="text-xs font-medium text-slate-700">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills