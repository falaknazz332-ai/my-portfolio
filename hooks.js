import { useEffect, useRef, useState } from 'react'

export function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add('in'); io.disconnect() } }, { threshold: 0.12 })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return ref
}

// Confirms the real resume PDF exists before enabling the download.
export function useFileExists(url) {
  const [ok, setOk] = useState(false)
  useEffect(() => {
    fetch(url, { method: 'HEAD' })
      .then((r) => setOk(r.ok && (r.headers.get('content-type') || '').includes('pdf')))
      .catch(() => setOk(false))
  }, [url])
  return ok
}
