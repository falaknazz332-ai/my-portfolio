import Section from './Section'

const languages = [['English', 'Fluent'], ['German', 'A1 certified'], ['Turkish', 'Beginner']]

export default function About() {
  return (
    <Section id="about" eyebrow="About me" title="Curious, creative and always building.">
      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-5 text-mute leading-relaxed">
          <p>I started with HTML and CSS and kept going: JavaScript, React and Tailwind CSS, learning mostly by making real projects. From a hackathon marketplace to a skincare brand demo, each build has taught me something about design, structure and finishing what I start.</p>
          <p>I’m equally drawn to digital marketing. Social media and content creation have shaped how I think about audiences, storytelling and presenting ideas clearly, and I enjoy the entrepreneurial side of turning an idea into something people can use.</p>
          <p>I’m currently studying at intermediate level in Karachi and looking for internship and learning opportunities where I can contribute, grow and gain industry experience.</p>
        </div>
        <div className="card p-6 space-y-6">
          <div><p className="eyebrow mb-1">Education</p><p className="font-medium">Intermediate (2nd Year)</p><p className="text-sm text-mute">Sir Syed Government Girls College, Karachi</p></div>
          <div>
            <p className="eyebrow mb-2">Languages</p>
            <ul className="divide-y divide-white/10">
              {languages.map(([l, lv]) => <li key={l} className="flex justify-between py-2 text-sm"><span>{l}</span><span className="text-mute">{lv}</span></li>)}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  )
}
