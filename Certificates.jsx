import { useEffect, useState } from 'react'
import Section from './Section'
import { certificates } from '../data/content'

export default function Certificates() {
  const [open, setOpen] = useState(null)
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(null)
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = open ? 'hidden' : ''
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <Section id="certificates" eyebrow="Education & certifications" title="Certificates & credentials.">
      <div className="columns-1 gap-6 sm:columns-2 [&>*]:mb-6">
        {certificates.map((c) => (
          <figure key={c.title} className="card break-inside-avoid overflow-hidden p-3">
            <button onClick={() => setOpen(c)} className="block w-full rounded-lg bg-white p-1" aria-label={`View larger: ${c.title}`}>
              <img src={c.src} alt={`${c.title} certificate from ${c.issuer}`} width={c.w} height={c.h} loading="lazy"
                className="h-auto w-full object-contain" />
            </button>
            <figcaption className="px-2 pb-2 pt-4">
              <p className="eyebrow">{c.kind}</p>
              <p className="mt-1 font-display text-lg font-semibold">{c.title}</p>
              <p className="text-sm text-mute">{c.issuer} · {c.meta}</p>
            </figcaption>
          </figure>
        ))}
      </div>

      {open && (
        <div role="dialog" aria-modal="true" aria-label={open.title} onClick={() => setOpen(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
          <div className="relative max-h-full" onClick={(e) => e.stopPropagation()}>
            <img src={open.src} alt={`${open.title} certificate, enlarged`} className="max-h-[85vh] max-w-[92vw] rounded-lg bg-white object-contain" />
            <div className="mt-3 flex items-center justify-between gap-4">
              <p className="text-sm text-mute">{open.title}</p>
              <div className="flex gap-3">
                {open.pdf && <a href={open.pdf} target="_blank" rel="noopener noreferrer" className="text-sm text-cobalt-soft underline">Open PDF</a>}
                <button autoFocus onClick={() => setOpen(null)} className="btn-primary !py-2">Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Section>
  )
}
