function Contact() {
    return (
        <section id="contact" className="scroll-mt-24 min-h-screen px-6 py-20">
            <div className="mx-auto max-w-3xl pb-8">
                <div className="mb-8 text-center">
                    <h2 className="text-3xl font-bold">Contact</h2>
                    <p className="mt-3 text-gray-600">
                        Interested in working together or just want to say hello?
                    </p>
                </div>

                <form
                    action="https://formsubmit.co/mosianej@outlook.com"
                    method="POST"
                    className="space-y-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
                >
                    <input type="hidden" name="_captcha" value="false" />
                    <input
                        type="hidden"
                        name="_subject"
                        value="New portfolio contact message"
                    />

                    <div>
                        <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-slate-700">
                            Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            placeholder="Your name"
                            required
                            className="w-full rounded-md border border-slate-300 bg-slate-50 px-3 py-2.5 text-sm outline-none transition focus:border-black focus:bg-white"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-700">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            placeholder="your@email.com"
                            required
                            className="w-full rounded-md border border-slate-300 bg-slate-50 px-3 py-2.5 text-sm outline-none transition focus:border-black focus:bg-white"
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-slate-700">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={4}
                            placeholder="Tell me about your project..."
                            required
                            className="w-full rounded-md border border-slate-300 bg-slate-50 px-3 py-2.5 text-sm outline-none transition focus:border-black focus:bg-white"
                        />
                    </div>

                    <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
                        <button
                            type="submit"
                            className="rounded-md bg-black px-4 py-2.5 text-sm font-medium text-white transition hover:bg-gray-800"
                        >
                            Contact me
                        </button>

                        <div className="flex items-center gap-2.5">
                            <a
                                href="https://github.com/JgotDaidea"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="GitHub"
                                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white transition hover:border-slate-300"
                            >
                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                                    alt="GitHub"
                                    className="h-4 w-4"
                                />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/j-dimakatso-mosiane"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="LinkedIn"
                                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white transition hover:border-slate-300"
                            >
                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                                    alt="LinkedIn"
                                    className="h-4 w-4"
                                />
                            </a>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact