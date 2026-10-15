import Section from './Section'
import { achievements } from '../data/content'

export default function Achievements() {
  return (
    <Section id="achievements" eyebrow="Achievements" title="Moments I’m proud of.">
      <ol className="space-y-4">
        {achievements.map((a, i) => (
          <li key={a.title} className="card flex gap-6 p-6">
            <span className="font-display text-3xl text-cobalt-soft">{String(i + 1).padStart(2, '0')}</span>
            <div><h3 className="font-semibold">{a.title}</h3><p className="mt-1 text-sm text-mute">{a.body}</p></div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
