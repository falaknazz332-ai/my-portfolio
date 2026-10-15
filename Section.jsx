import { useReveal } from '../hooks'

export default function Section({ id, eyebrow, title, children, className = '' }) {
  const ref = useReveal()
  return (
    <section id={id} className={`py-20 sm:py-28 ${className}`}>
      <div ref={ref} className="reveal container-x">
        {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
        {title && <h2 className="h2 mb-10 max-w-2xl">{title}</h2>}
        {children}
      </div>
    </section>
  )
}
