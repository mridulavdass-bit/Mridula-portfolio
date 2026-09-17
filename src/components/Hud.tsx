import { useEffect, useState } from 'react'

export default function Hud() {
  const [section, setSection] = useState('Intro')
  const [folio, setFolio] = useState('01 / 08')

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>('[data-hud]'))
    const total = String(sections.length).padStart(2, '0')

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const hud = entry.target.getAttribute('data-hud')
          if (hud) setSection(hud)
          const idx = sections.indexOf(entry.target as HTMLElement) + 1
          setFolio(`${String(idx).padStart(2, '0')} / ${total}`)
        })
      },
      { threshold: 0, rootMargin: '-45% 0px -45% 0px' },
    )
    sections.forEach((el) => sectionObserver.observe(el))

    const darkSection = document.getElementById('experiments')
    const darkObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          document.body.classList.toggle('hud-on-dark', entry.isIntersecting)
        })
      },
      { threshold: 0, rootMargin: '-10px 0px -85% 0px' },
    )
    if (darkSection) darkObserver.observe(darkSection)

    return () => {
      sectionObserver.disconnect()
      darkObserver.disconnect()
    }
  }, [])

  return (
    <div className="hud" aria-hidden="true">
      <span className="hud-sec">{section}</span>
      <span className="hud-folio">{folio}</span>
    </div>
  )
}
