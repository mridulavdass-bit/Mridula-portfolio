import { useState } from 'react'
import { expertise } from '../data/expertise'
import { useReveal } from '../hooks/useReveal'

export default function ExpertiseSection() {
  const head = useReveal<HTMLDivElement>()
  const [activeIdx, setActiveIdx] = useState<string | null>(null)

  return (
    <section className="section section-pad container" id="expertise" data-hud="Expertise">
      <div className="grid">
        <div ref={head.ref} className={`section-head ${head.className}`}>
          <div>
            <span className="label mono-label">03 / Range</span>
            <h2>
              The Many
              <br />
              Hats
            </h2>
          </div>
          <p className="note">Hover each discipline. Scope varies by project.</p>
        </div>

        <div className="expertise-list">
          {expertise.map((entry) => (
            <div
              key={entry.idx}
              tabIndex={0}
              className={`expertise-row${entry.accent ? ' accent' : ''}${
                activeIdx === entry.idx ? ' is-active' : ''
              }`}
              onClick={() => setActiveIdx((cur) => (cur === entry.idx ? null : entry.idx))}
            >
              <span className="exp-idx">{entry.idx}</span>
              <h3>{entry.title}</h3>
              <svg className="exp-visual" viewBox="0 0 100 44" aria-hidden="true">
                {entry.visual}
              </svg>
              <span className="exp-desc">{entry.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
