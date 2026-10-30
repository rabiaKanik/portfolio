import { about, education, experience, profile, projects, skills, stats } from '../data'
import { IconLink } from './Hero'
import { Reveal, Section, Tag } from './ui'

export function About() {
  return (
    <Section id="about" index="01" title="About me">
      <div className="grid gap-12 md:grid-cols-[1.5fr_1fr]">
        <Reveal className="space-y-5 text-lg leading-relaxed text-zinc-400">
          {about.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </Reveal>
        <Reveal className="grid content-start gap-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-xl border border-line bg-panel p-5">
              <div className="text-3xl font-bold text-white">{s.value}</div>
              <div className="mt-1 text-sm text-zinc-500">{s.label}</div>
            </div>
          ))}
        </Reveal>
      </div>
    </Section>
  )
}

export function Experience() {
  return (
    <Section id="experience" index="02" title="Experience">
      <div className="space-y-10">
        {experience.map((job) => (
          <Reveal key={job.company + job.period}>
            <div className="relative border-l border-line pl-8">
              <span className="absolute top-1.5 -left-[5px] h-2.5 w-2.5 rounded-full bg-accent" />
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-xl font-semibold text-white">
                  {job.title} <span className="text-accent">@ {job.company}</span>
                </h3>
                <span className="font-mono text-sm text-zinc-500">{job.period}</span>
              </div>
              <p className="mt-1 text-sm text-zinc-500">{job.location}</p>
              <p className="mt-4 text-zinc-300">{job.summary}</p>
              <ul className="mt-5 space-y-3">
                {job.points.map((pt) => (
                  <li key={pt} className="flex gap-3 text-zinc-400">
                    <span className="mt-2.5 h-1 w-3 shrink-0 bg-accent/70" />
                    <span className="leading-relaxed">{pt}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-2">
                {job.tech.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </div>
          </Reveal>
        ))}

        <Reveal>
          <div className="relative border-l border-line pl-8">
            <span className="absolute top-1.5 -left-[5px] h-2.5 w-2.5 rounded-full border border-zinc-500 bg-ink" />
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-xl font-semibold text-white">{education.degree}</h3>
              <span className="font-mono text-sm text-zinc-500">{education.period}</span>
            </div>
            <p className="mt-1 text-zinc-400">{education.school}</p>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}

export function Work() {
  return (
    <Section id="work" index="03" title="Selected work">
      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((p) => (
          <Reveal key={p.title}>
            <article className="group flex h-full flex-col rounded-xl border border-line bg-panel p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40">
              <div className="mb-4 flex items-center justify-between">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent">
                  <path d="M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" />
                </svg>
                {p.link && (
                  <a href={p.link} target="_blank" rel="noreferrer" aria-label={`Open ${p.title}`} className="text-zinc-500 hover:text-accent">
                    ↗
                  </a>
                )}
              </div>
              <h3 className="text-lg font-semibold text-white transition-colors group-hover:text-accent">{p.title}</h3>
              <p className="mt-3 flex-1 leading-relaxed text-zinc-400">{p.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
      <Reveal>
        <p className="mt-8 text-sm text-zinc-600">
          Due to the nature of defence projects, work is described at a technical level without internal details.
        </p>
      </Reveal>
    </Section>
  )
}

export function Skills() {
  return (
    <Section id="skills" index="04" title="Skills">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((s) => (
          <Reveal key={s.group}>
            <div className="h-full rounded-xl border border-line bg-panel p-6">
              <h3 className="mb-4 font-mono text-sm text-accent">{s.group}</h3>
              <ul className="space-y-2">
                {s.items.map((i) => (
                  <li key={i} className="text-zinc-300">
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-3xl px-6 py-24 text-center md:py-32">
      <Reveal>
        <p className="font-mono text-sm text-accent">05. What's next?</p>
        <h2 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl">Let's work together</h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-zinc-400">
          I'm currently looking for my next role as a full stack, frontend or backend engineer. Whether you have a
          position in mind or just want to connect, my inbox is open.
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="mt-10 inline-block rounded-lg border border-accent px-8 py-4 font-semibold text-accent transition-colors hover:bg-accent/10"
        >
          Say hello
        </a>
        <div className="mt-10 flex justify-center gap-6">
          <IconLink href={`mailto:${profile.email}`} label="Email" icon="mail" />
          <IconLink href={profile.github} label="GitHub" icon="github" />
          <IconLink href={profile.linkedin} label="LinkedIn" icon="linkedin" />
        </div>
      </Reveal>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-line py-8 text-center font-mono text-xs text-zinc-600">
      Designed & built by {profile.name} · React + TypeScript · {new Date().getFullYear()}
    </footer>
  )
}
