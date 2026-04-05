export default function DeveloperPortfolio() {
  const projects = [
    {
      title: "Job Application Tracker",
      stack: "React Native · TypeScript · Expo",
      description:
        "A mobile app for tracking job applications with full CRUD functionality, advanced filtering, stats dashboard, and persistent local storage.",
      github: "https://github.com/starkjhakeem-cloud/job-tracker-react-native",
    },
    {
      title: "Finance Tracker Dashboard",
      stack: "Next.js · TypeScript · Tailwind CSS",
      description:
        "A finance dashboard with CRUD operations, real-time balance tracking, category breakdowns, and interactive data visualization.",
      github: "https://github.com/starkjhakeem-cloud/finance-tracker-dashboard",
    },
  ];

  const skills = [
    "React Native",
    "Next.js",
    "React",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "Git",
    "GitHub",
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="grid items-center gap-10 md:grid-cols-[1.3fr_0.7fr]">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1 text-sm text-blue-300">
              Software Engineer · React Native · Next.js · TypeScript
            </p>
            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
              Jhakeem Moultrie
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              I build real-world, production-ready applications across mobile and web.
              My focus is clean UI, scalable architecture, strong user experience, and
              software that solves real problems.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://github.com/starkjhakeem-cloud"
                className="rounded-2xl bg-blue-600 px-5 py-3 text-sm font-semibold transition hover:bg-blue-500"
              >
                View GitHub
              </a>
              <a
                href="mailto:starkjhakeem@gmail.com"
                className="rounded-2xl border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-slate-500 hover:bg-slate-900"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-blue-950/30">
            <div className="mb-4 flex items-center gap-3">
              <div className="h-3 w-3 rounded-full bg-red-400" />
              <div className="h-3 w-3 rounded-full bg-yellow-400" />
              <div className="h-3 w-3 rounded-full bg-green-400" />
            </div>
            <div className="space-y-3 rounded-2xl bg-slate-950 p-5 text-sm text-slate-300">
              <p>
                <span className="text-blue-400">const</span> engineer = {"{"}
              </p>
              <p className="pl-4">
                name: <span className="text-emerald-300">&quot;Jhakeem Moultrie&quot;</span>,
              </p>
              <p className="pl-4">
                role: <span className="text-emerald-300">&quot;Software Engineer&quot;</span>,
              </p>
              <p className="pl-4">
                focus: <span className="text-emerald-300">&quot;Real-world apps&quot;</span>,
              </p>
              <p className="pl-4">
                stack: <span className="text-emerald-300">[&quot;React Native&quot;, &quot;Next.js&quot;, &quot;TypeScript&quot;]</span>
              </p>
              <p>{"};"}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-6">
        <div className="rounded-[2rem] border border-slate-800 bg-slate-900/60 p-8">
          <h2 className="text-2xl font-semibold">About</h2>
          <p className="mt-4 max-w-4xl leading-8 text-slate-300">
            I’ve already built multiple full-featured projects, including a React Native
            Job Application Tracker with advanced filtering and persistent local storage,
            and a Finance Tracker Dashboard built with Next.js featuring CRUD operations,
            real-time calculations, and interactive charts. I’m currently expanding into
            full-stack development and focused on building software that looks strong,
            works smoothly, and mirrors real-world workflows.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-6">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-2xl font-semibold">Featured Projects</h2>
          <p className="text-sm text-slate-400">2 production-style builds</p>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-[2rem] border border-slate-800 bg-slate-900/60 p-7 transition hover:border-blue-500/40 hover:bg-slate-900"
            >
              <p className="text-sm text-blue-300">{project.stack}</p>
              <h3 className="mt-3 text-2xl font-semibold">{project.title}</h3>
              <p className="mt-4 leading-7 text-slate-300">{project.description}</p>
              <div className="mt-6">
                <a
                  href={project.github}
                  className="inline-flex rounded-2xl border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-slate-500 hover:bg-slate-800"
                >
                  View Repository
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-6">
        <div className="rounded-[2rem] border border-slate-800 bg-slate-900/60 p-8">
          <h2 className="text-2xl font-semibold">Tech Stack</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-slate-700 bg-slate-950 px-4 py-2 text-sm text-slate-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-6 pb-20">
        <div className="rounded-[2rem] border border-slate-800 bg-gradient-to-br from-blue-600/20 to-slate-900 p-8 text-center">
          <h2 className="text-3xl font-semibold">Let’s build something strong.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300">
            I’m actively building real-world projects and preparing for software engineering opportunities.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:starkjhakeem@gmail.com"
              className="rounded-2xl bg-blue-600 px-5 py-3 text-sm font-semibold transition hover:bg-blue-500"
            >
              Email Me
            </a>
            <a
              href="https://www.linkedin.com/in/jhakeem-moultrie-29907b400/"
              className="rounded-2xl border border-slate-600 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-slate-400 hover:bg-slate-900/60"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
