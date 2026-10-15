import { links } from './Contact'
import { profile } from '../data/content'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="container-x flex flex-col items-center justify-between gap-4 text-sm text-mute sm:flex-row">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <ul className="flex gap-6">
          {links.map(([label, , href]) => <li key={label}><a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="hover:text-cobalt-soft">{label}</a></li>)}
        </ul>
      </div>
    </footer>
  )
}
