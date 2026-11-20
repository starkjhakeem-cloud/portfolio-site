const projects = [
  {
    number: "01",
    title: "Finance Tracker Dashboard",
    category: "Web application",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    description: "A responsive finance dashboard for managing transactions, tracking balances, and exploring spending by category.",
    highlights: ["Transaction CRUD workflows", "Calculated balances and visual reports", "Reusable responsive components"],
    github: "https://github.com/starkjhakeem-cloud/finance-tracker-dashboard",
  },
  {
    number: "02",
    title: "Link & Notes",
    category: "Full-stack application",
    stack: ["Next.js", "TypeScript", "Supabase"],
    description: "A productivity application for saving, organizing, searching, and tagging notes and links with cloud-backed persistence.",
    highlights: ["Authentication and session handling", "Search and tagging", "Persistent cloud data"],
    github: "https://github.com/starkjhakeem-cloud/link-notes-app",
  },
  {
    number: "03",
    title: "Job Application Tracker",
    category: "Mobile application",
    stack: ["React Native", "TypeScript", "Expo"],
    description: "A mobile-first application for organizing job applications, tracking statuses, and reviewing application statistics.",
    highlights: ["Search and status filtering", "Persistent local storage", "Reusable mobile components"],
    github: "https://github.com/starkjhakeem-cloud/job-tracker-react-native",
  },
];

const skillGroups = [
  { title: "Languages", items: ["TypeScript", "JavaScript", "HTML", "CSS"] },
  { title: "Frontend & mobile", items: ["React", "React Native", "Next.js", "Tailwind CSS", "Expo"] },
  { title: "Data & workflow", items: ["Supabase", "REST APIs", "Git", "GitHub", "Vercel"] },
];

const externalProps = { target: "_blank", rel: "noopener noreferrer" };

export default function DeveloperPortfolio() {
  return (
    <main className="min-h-screen bg-[#080d18] text-slate-100">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[700px] overflow-hidden" aria-hidden="true">
        <div className="absolute -top-60 right-[-15%] h-[650px] w-[650px] rounded-full bg-blue-600/15 blur-[110px]" />
        <div className="absolute left-[-20%] top-32 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[110px]" />
      </div>

      <header className="relative z-10 border-b border-white/10">
        <nav aria-label="Main navigation" className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-5">
          <a href="#top" className="text-lg font-black tracking-[0.18em] text-white">JM<span className="text-cyan-400">.</span></a>
          <div className="flex flex-wrap items-center justify-end gap-4 text-sm text-slate-300 sm:gap-7">
            <a href="#projects" className="hover:text-cyan-300">Projects</a>
            <a href="#about" className="hover:text-cyan-300">About</a>
            <a href="#skills" className="hover:text-cyan-300">Skills</a>
            <a href="#contact" className="rounded-full border border-cyan-400/40 px-4 py-2 text-cyan-200 hover:bg-cyan-400/10">Contact ↗</a>
          </div>
        </nav>
      </header>

      <section id="top" className="relative mx-auto grid max-w-6xl gap-12 px-6 pb-24 pt-24 md:grid-cols-[1.3fr_0.7fr] md:items-center md:pt-32">
        <div>
          <p className="mb-7 inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300">
            <span className="h-2 w-2 rounded-full bg-cyan-400" /> Software engineering student · Open to opportunities
          </p>
          <h1 className="max-w-3xl text-5xl font-bold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Building software that <span className="bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">solves real problems.</span>
          </h1>
          <p className="mt-7 text-xl font-semibold text-slate-200">Jhakeem Moultrie <span className="text-slate-500">/</span> Software Engineering Student & Developer</p>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-400">
            I design and build web and mobile applications with React, Next.js, React Native, and TypeScript. My work spans intuitive interfaces, authentication, data persistence, and practical product workflows.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#projects" className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300">Explore my work ↗</a>
            <a href="https://github.com/starkjhakeem-cloud" {...externalProps} className="rounded-xl border border-white/20 px-6 py-3 font-semibold text-white transition hover:border-cyan-400/60">GitHub ↗</a>
            <a href="mailto:starkjhakeem@gmail.com" className="rounded-xl border border-white/20 px-6 py-3 font-semibold text-white transition hover:border-cyan-400/60">Get in touch</a>
          </div>
        </div>
        <div className="relative rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-2xl shadow-blue-950/40">
          <div className="mb-5 flex items-center gap-2 border-b border-white/10 pb-4"><span className="h-2.5 w-2.5 rounded-full bg-rose-400" /><span className="h-2.5 w-2.5 rounded-full bg-amber-400" /><span className="h-2.5 w-2.5 rounded-full bg-emerald-400" /><span className="ml-auto font-mono text-xs text-slate-500">developer.ts</span></div>
          <div className="space-y-3 font-mono text-sm leading-7">
            <p className="text-violet-300">const <span className="text-white">developer</span> = {"{"}</p>
            <p className="pl-4 text-slate-300">name: <span className="text-emerald-300">&quot;Jhakeem Moultrie&quot;</span>,</p>
            <p className="pl-4 text-slate-300">focus: <span className="text-emerald-300">&quot;Web + Mobile&quot;</span>,</p>
            <p className="pl-4 text-slate-300">education: <span className="text-emerald-300">&quot;WGU · B.S. SWE&quot;</span>,</p>
            <p className="pl-4 text-slate-300">builds: <span className="text-cyan-300">3</span>,</p>
            <p className="pl-4 text-slate-300">mindset: <span className="text-emerald-300">&quot;Keep shipping&quot;</span></p>
            <p className="text-violet-300">{"}"};</p>
          </div>
          <div className="mt-7 grid grid-cols-2 gap-3 border-t border-white/10 pt-5 text-center">
            <div className="rounded-xl bg-white/5 p-4"><p className="text-2xl font-bold text-white">03</p><p className="mt-1 text-xs text-slate-400">Featured projects</p></div>
            <div className="rounded-xl bg-white/5 p-4"><p className="text-2xl font-bold text-white">02</p><p className="mt-1 text-xs text-slate-400">Platforms: web + mobile</p></div>
          </div>
        </div>
      </section>

      <section id="projects" className="relative border-y border-white/10 bg-white/[0.025] py-24">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-400">Selected work</p>
          <div className="mt-3 flex flex-wrap items-end justify-between gap-5"><h2 className="text-4xl font-bold tracking-tight text-white">Projects built to be used.</h2><p className="max-w-sm text-sm leading-6 text-slate-400">A selection of applications exploring real product requirements, thoughtful interfaces, and maintainable code.</p></div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <article key={project.number} className="flex flex-col rounded-2xl border border-white/10 bg-[#101a2b] p-7 transition hover:-translate-y-1 hover:border-cyan-400/40">
                <div className="flex items-center justify-between"><span className="font-mono text-sm text-cyan-300">{project.number} / PROJECT</span><span className="text-xs text-slate-500">{project.category}</span></div>
                <div className="my-7 flex h-28 items-center justify-center rounded-xl border border-white/5 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-transparent" aria-hidden="true"><span className="font-mono text-5xl font-black text-cyan-300/70">{project.number}</span></div>
                <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-400">{project.description}</p>
                <ul className="mt-5 space-y-2 text-sm text-slate-300">{project.highlights.map((item) => <li key={item} className="flex gap-2"><span className="text-cyan-400">✓</span>{item}</li>)}</ul>
                <div className="mt-6 flex flex-wrap gap-2">{project.stack.map((item) => <span key={item} className="rounded-md bg-white/5 px-2.5 py-1 text-xs text-cyan-200">{item}</span>)}</div>
                <a href={project.github} {...externalProps} className="mt-8 inline-flex w-fit items-center gap-2 border-b border-cyan-400/50 pb-1 text-sm font-semibold text-cyan-300 hover:text-white">View source code ↗</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-[0.65fr_1.35fr]">
        <div><p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-400">About me</p><h2 className="mt-3 text-4xl font-bold text-white">Curiosity, discipline, and execution.</h2></div>
        <div className="space-y-5 text-lg leading-8 text-slate-300"><p>I’m pursuing a B.S. in Software Engineering at Western Governors University while developing hands-on projects across web and mobile platforms.</p><p>My projects have given me practical experience with reusable component architecture, responsive UI, authentication, CRUD workflows, and persistent storage.</p><p>Before pursuing software engineering, I served in the U.S. Army. That experience shaped how I approach learning, accountability, teamwork, and solving difficult problems.</p></div>
      </section>

      <section id="skills" className="border-y border-white/10 bg-white/[0.025] py-20"><div className="mx-auto max-w-6xl px-6"><p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-400">Toolbox</p><h2 className="mt-3 text-4xl font-bold text-white">Technologies I work with.</h2><div className="mt-10 grid gap-5 md:grid-cols-3">{skillGroups.map((group) => <div key={group.title} className="rounded-2xl border border-white/10 bg-[#101a2b] p-6"><h3 className="mb-5 font-semibold text-white">{group.title}</h3><div className="flex flex-wrap gap-2">{group.items.map((item) => <span key={item} className="rounded-lg border border-white/10 px-3 py-2 text-sm text-slate-300">{item}</span>)}</div></div>)}</div></div></section>

      <section id="contact" className="mx-auto max-w-6xl px-6 py-24 text-center"><p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-400">Let’s connect</p><h2 className="mx-auto mt-4 max-w-2xl text-4xl font-bold text-white sm:text-5xl">Interested in building something meaningful?</h2><p className="mx-auto mt-5 max-w-xl leading-7 text-slate-400">I’m interested in software engineering internships and early-career opportunities where I can contribute, collaborate, and grow.</p><div className="mt-9 flex flex-wrap justify-center gap-3"><a href="mailto:starkjhakeem@gmail.com" className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300">Email me ↗</a><a href="https://www.linkedin.com/in/jhakeem-moultrie-29907b400/" {...externalProps} className="rounded-xl border border-white/20 px-6 py-3 font-semibold hover:border-cyan-400/60">LinkedIn ↗</a></div></section>
      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-500">© {new Date().getFullYear()} Jhakeem Moultrie · Built with Next.js and TypeScript</footer>
    </main>
  );
}
