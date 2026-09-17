import { useMemo, useState } from 'react'
import { expertise, expertiseEdges } from '../data/expertise'
import { useReveal } from '../hooks/useReveal'

const DEFAULT_NOTE = 'A map of how the disciplines actually connect. Hover or select a node — on a phone, tap one in the list.'

export default function ExpertiseSection() {
  const head = useReveal<HTMLDivElement>()
  const [hoverId, setHoverId] = useState<string | null>(null)
  const [selectedId, setSelectedId] = useState<string | null>(null)

  const activeId = hoverId ?? selectedId

  const relatedIds = useMemo(() => {
    if (!activeId) return new Set<string>()
    const related = new Set<string>()
    expertiseEdges.forEach((edge) => {
      if (edge.from === activeId) related.add(edge.to)
      if (edge.to === activeId) related.add(edge.from)
    })
    return related
  }, [activeId])

  const nodeById = useMemo(() => Object.fromEntries(expertise.map((n) => [n.id, n])), [])
  const active = activeId ? nodeById[activeId] : null

  const select = (id: string) => setSelectedId((cur) => (cur === id ? null : id))

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
          <p className="note">Eight disciplines, one way of thinking. None of them work alone.</p>
        </div>

        <div className="expertise-network">
          <svg className="network-svg" viewBox="0 0 960 520" aria-hidden="true">
            {expertiseEdges.map((edge) => {
              const a = nodeById[edge.from]
              const b = nodeById[edge.to]
              const isLive = activeId === edge.from || activeId === edge.to
              return (
                <line
                  key={`${edge.from}-${edge.to}`}
                  className={`network-edge${isLive ? ' is-live' : ''}`}
                  x1={a.x}
                  y1={a.y}
                  x2={b.x}
                  y2={b.y}
                />
              )
            })}

            {expertise.map((entry) => {
              const isActive = activeId === entry.id
              const isRelated = relatedIds.has(entry.id)
              const isDim = Boolean(activeId) && !isActive && !isRelated
              return (
                <g
                  key={entry.id}
                  tabIndex={0}
                  role="button"
                  aria-pressed={selectedId === entry.id}
                  aria-label={`${entry.title}: ${entry.desc}`}
                  className={`network-node tier-${entry.tier}${entry.accent ? ' accent' : ''}${
                    isActive ? ' is-active' : ''
                  }${isRelated ? ' is-related' : ''}${isDim ? ' is-dim' : ''}`}
                  transform={`translate(${entry.x} ${entry.y})`}
                  onMouseEnter={() => setHoverId(entry.id)}
                  onMouseLeave={() => setHoverId(null)}
                  onFocus={() => setHoverId(entry.id)}
                  onBlur={() => setHoverId(null)}
                  onClick={() => select(entry.id)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      select(entry.id)
                    }
                  }}
                >
                  <circle className="network-node-dot" r={entry.tier === 1 ? 15 : entry.tier === 2 ? 12 : 10} />
                  <text className="network-node-label" y={entry.tier === 1 ? -26 : -20}>
                    {entry.title}
                  </text>
                </g>
              )
            })}
          </svg>

          <div className="network-detail">
            {active ? (
              <>
                <span className="network-detail-idx mono-label">{active.idx}</span>
                <h3>{active.title}</h3>
                <p>{active.desc}</p>
              </>
            ) : (
              <p className="network-detail-default">{DEFAULT_NOTE}</p>
            )}
          </div>
        </div>

        <ul className="network-mobile">
          {expertise.map((entry) => (
            <li key={entry.id} className={entry.accent ? 'accent' : undefined}>
              <button
                className={`network-mobile-row${selectedId === entry.id ? ' is-active' : ''}`}
                aria-expanded={selectedId === entry.id}
                onClick={() => select(entry.id)}
              >
                <span className="exp-idx">{entry.idx}</span>
                <span className="network-mobile-title">{entry.title}</span>
              </button>
              {selectedId === entry.id && <p className="network-mobile-desc">{entry.desc}</p>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
