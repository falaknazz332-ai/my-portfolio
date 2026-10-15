import { profile } from '../data/content'
import { useFileExists } from '../hooks'

export default function Hero() {
  const hasResume = useFileExists(profile.resume)
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40">
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '64px 64px' }} />
      <div className="container-x relative grid items-center gap-14 lg:grid-cols-[1.15fr_.85fr]">
        <div>
          <p className="eyebrow mb-5">{profile.location}</p>
          <h1 className="font-display text-5xl font-semibold leading-[1.02] sm:text-7xl">
            Hi, I’m <span className="text-cobalt-soft">Falak</span> Naz.
          </h1>
          <p className="mt-5 text-lg text-white sm:text-xl">{profile.headline}</p>
          <p className="mt-5 max-w-xl text-mute leading-relaxed">
            I’m an aspiring developer who learns by building. I’ve created several web projects, and I’m growing my skills in
            React and modern front-end work alongside digital marketing, creativity and communication.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#projects" className="btn-primary">Explore My Work</a>
            <a href="#contact" className="btn-ghost">Contact Me</a>
            {hasResume
              ? <a href={profile.resume} download="Falak-Naz-Resume.pdf" className="btn-ghost">Download Resume</a>
              : <span className="btn border border-dashed border-white/20 text-mute cursor-not-allowed" title="Add public/Falak-Naz-Resume.pdf to enable" aria-disabled="true">Resume coming soon</span>}
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-sm">
          <div aria-hidden className="absolute -inset-3 rounded-[2rem] border border-cobalt/60 translate-x-3 translate-y-3" />
          <img src="/falak.jpeg" alt="Portrait of Falak Naz holding a laptop" width="1280" height="1600"
            className="relative aspect-[4/5] w-full rounded-[2rem] object-cover object-top grayscale-[35%] transition duration-500 hover:grayscale-0" />
        </div>
      </div>
    </section>
  )
}
