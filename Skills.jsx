import Section from './Section'
import { skills } from '../data/content'

export default function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Tools I work with.">
      <div className="grid gap-5 sm:grid-cols-2">
        {skills.map((g) => (
          <div key={g.group} className="card p-6">
            <h3 className="mb-4 text-sm font-semibold text-cobalt-soft">{g.group}</h3>
            <ul className="flex flex-wrap gap-2">
              {g.items.map((s) => <li key={s} className="rounded-full border border-white/15 px-4 py-1.5 text-sm transition hover:border-cobalt-soft hover:text-cobalt-soft">{s}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
