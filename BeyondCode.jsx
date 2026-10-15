import Section from './Section'

const items = [
  ['Communication', 'Explaining ideas clearly, in writing and in conversation.'],
  ['Public speaking', 'Comfortable presenting projects and ideas to an audience.'],
  ['Creativity', 'Bringing visual thinking and storytelling into everything I build.'],
  ['Content creation', 'Sharing knowledge and ideas with an online audience.'],
  ['Entrepreneurship', 'Interested in turning ideas into real products and services.'],
]

export default function BeyondCode() {
  return (
    <Section id="beyond" eyebrow="Beyond code" title="More than what’s on the screen.">
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {items.map(([t, d]) => (
          <li key={t} className="card p-5"><h3 className="font-display text-lg font-semibold">{t}</h3><p className="mt-2 text-sm text-mute">{d}</p></li>
        ))}
      </ul>
    </Section>
  )
}
