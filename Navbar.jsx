import { useEffect, useState } from 'react'
import { nav, profile } from '../data/content'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll(); window.addEventListener('scroll', onScroll, { passive: true })
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' })
    nav.forEach(([, id]) => { const el = document.getElementById(id); el && io.observe(el) })
    return () => { window.removeEventListener('scroll', onScroll); io.disconnect() }
  }, [])

  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition ${scrolled || open ? 'bg-ink/90 backdrop-blur border-b border-white/10' : ''}`}>
      <nav className="container-x flex h-16 items-center justify-between" aria-label="Main">
        <a href="#top" className="font-display text-xl font-semibold">Falak<span className="text-cobalt-soft">.</span></a>
        <ul className="hidden md:flex items-center gap-8">
          {nav.map(([label, id]) => (
            <li key={id}>
              <a href={`#${id}`} aria-current={active === id ? 'true' : undefined}
                className={`text-sm transition ${active === id ? 'text-cobalt-soft' : 'text-mute hover:text-white'}`}>{label}</a>
            </li>
          ))}
        </ul>
        <a href={`mailto:${profile.email}`} className="btn-primary hidden md:inline-flex !py-2">Hire me</a>
        <button className="md:hidden p-2" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          <span className="block h-0.5 w-6 bg-white mb-1.5" /><span className="block h-0.5 w-6 bg-white mb-1.5" /><span className="block h-0.5 w-6 bg-white" />
        </button>
      </nav>
      {open && (
        <ul className="md:hidden container-x pb-6 flex flex-col gap-4">
          {nav.map(([label, id]) => (
            <li key={id}><a href={`#${id}`} onClick={() => setOpen(false)} className="block py-1 text-lg">{label}</a></li>
          ))}
        </ul>
      )}
    </header>
  )
}
