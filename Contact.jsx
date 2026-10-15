import Section from './Section'
import { profile } from '../data/content'

export const links = [
  ['Email', profile.email, `mailto:${profile.email}`],
  ['LinkedIn', 'falak-naz', profile.linkedin],
  ['GitHub', 'falaknazz332-ai', profile.github],
  ['Instagram', '@falak_nazzz3', profile.instagram],
]

export default function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Let’s talk.">
      <p className="mb-8 max-w-xl text-mute">I’m open to internships, collaborations and learning opportunities. The fastest way to reach me is by email.</p>
      <ul className="grid gap-4 sm:grid-cols-2">
        {links.map(([label, text, href]) => (
          <li key={label}>
            <a href={href} {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})} className="card flex items-center justify-between p-5">
              <span><span className="eyebrow block">{label}</span><span className="mt-1 block break-all">{text}</span></span>
              <span aria-hidden className="text-cobalt-soft">↗</span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  )
}
