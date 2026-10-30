import { profile } from '../data'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="grid-bg pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />

      <div className="relative mx-auto flex min-h-[92vh] max-w-5xl flex-col justify-center px-6 pt-24 pb-16">
        {profile.available && (
          <div className="mb-8 inline-flex w-fit items-center gap-2.5 rounded-full border border-line bg-panel/80 px-4 py-1.5 text-sm text-zinc-300">
            <span className="pulse-dot relative inline-block h-2 w-2 rounded-full bg-accent text-accent" />
            Open to new opportunities
          </div>
        )}

        <p className="mb-4 font-mono text-sm text-accent">Hi, my name is</p>
        <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl">{profile.name}</h1>
        <p className="mt-3 text-3xl font-semibold tracking-tight text-zinc-500 sm:text-4xl md:text-5xl">
          {profile.role}
        </p>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-400">{profile.tagline}</p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#work"
            className="rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5"
          >
            See my work
          </a>
          <a
            href="#contact"
            className="rounded-lg border border-line px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-zinc-500"
          >
            Get in touch
          </a>
          <div className="ml-1 flex items-center gap-4">
            <IconLink href={profile.github} label="GitHub" icon="github" />
            <IconLink href={profile.linkedin} label="LinkedIn" icon="linkedin" />
          </div>
        </div>

        <p className="mt-16 font-mono text-xs text-zinc-600">📍 {profile.location}</p>
      </div>
    </section>
  )
}

export function IconLink({ href, label, icon }: { href: string; label: string; icon: 'github' | 'linkedin' | 'mail' }) {
  const paths = {
    github:
      'M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 007.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 015.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.7 5.4-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0023.5 12C23.5 5.65 18.35.5 12 .5z',
    linkedin:
      'M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 110-4.13 2.06 2.06 0 010 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z',
    mail: 'M2 5.5A1.5 1.5 0 013.5 4h17A1.5 1.5 0 0122 5.5v13a1.5 1.5 0 01-1.5 1.5h-17A1.5 1.5 0 012 18.5v-13zm2 .9V18h16V6.4l-8 5.6-8-5.6zM5.6 6h12.8L12 10.5 5.6 6z',
  }
  return (
    <a
      href={href}
      target={icon === 'mail' ? undefined : '_blank'}
      rel="noreferrer"
      aria-label={label}
      className="text-zinc-500 transition-colors hover:text-accent"
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d={paths[icon]} />
      </svg>
    </a>
  )
}
