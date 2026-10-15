import Section from './Section'
import { projects } from '../data/content'

export default function Projects() {
  return (
    <Section id="projects" eyebrow="Selected work" title="Projects I’ve built.">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <article key={p.title} className="card group flex flex-col p-7">
            <div className="mb-8 flex items-start justify-between">
              <span className="font-display text-4xl text-white/20 transition group-hover:text-cobalt-soft">{String(i + 1).padStart(2, '0')}</span>
              {p.tag && <span className="rounded-full border border-cobalt/60 px-3 py-1 text-xs text-cobalt-soft">{p.tag}</span>}
            </div>
            <h3 className="font-display text-2xl font-semibold">{p.title}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-mute">{p.desc}</p>
            {p.tech && <p className="mt-4 text-xs text-mute">{p.tech.join(' · ')}</p>}
            <a href={p.url} target="_blank" rel="noopener noreferrer" className="btn-primary mt-6 self-start" aria-label={`View project: ${p.title} (opens in new tab)`}>View Project ↗</a>
          </article>
        ))}
      </div>
    </Section>
  )
}
