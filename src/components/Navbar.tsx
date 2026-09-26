function Navbar() {
    return (
        <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/85 backdrop-blur-sm">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
                <a href="#home" className="text-base font-bold tracking-tight text-slate-900">
                    Jeremia Mosiane
                </a>
                <div className="flex items-center gap-6 text-sm font-medium text-slate-600">
                    <a href="#about" className="transition hover:text-slate-900">
                        About
                    </a>
                    <a href="#skills" className="transition hover:text-slate-900">
                        Skills
                    </a>
                    <a href="#projects" className="transition hover:text-slate-900">
                        Projects
                    </a>
                    <a href="#contact" className="transition hover:text-slate-900">
                        Contact
                    </a>
                </div>
            </div>
        </nav>
    )
}
export default Navbar