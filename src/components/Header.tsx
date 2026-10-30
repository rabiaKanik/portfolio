import { useEffect, useState } from 'react'
import { profile } from '../data'

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#work', label: 'Work' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? 'border-b border-line bg-ink/85 backdrop-blur-md' : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a href="#top" className="font-mono text-sm font-medium text-white">
          <span className="text-accent">~/</span>rabia-kanik
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm text-zinc-400 transition-colors hover:text-white">
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={profile.cvUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-accent/40 px-4 py-2 text-sm text-accent transition-colors hover:bg-accent/10"
            >
              Résumé
            </a>
          </li>
        </ul>

        <button
          className="text-zinc-300 md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 px-6 pb-4 md:hidden">
          {[...links, { href: profile.cvUrl, label: 'Résumé' }].map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)} className="block py-2 text-zinc-300">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
