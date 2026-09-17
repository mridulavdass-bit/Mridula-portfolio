import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'

const filters = ['All', 'Completed', 'In Progress', 'Explorations']

export default function ArchiveSection() {
  const head = useReveal<HTMLDivElement>()
  const [active, setActive] = useState('All')

  return (
    <section className="section section-pad container" id="archive" data-hud="Archive">
      <div className="grid">
        <div ref={head.ref} className={`section-head ${head.className}`}>
          <div>
            <span className="label mono-label">07 / Full List</span>
            <h2>Archive</h2>
          </div>
          <p className="note">Complete work archive — populated as case studies are documented.</p>
        </div>

        <div className="archive-filters" role="tablist" aria-label="Archive filters">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`filter-btn${active === filter ? ' is-active' : ''}`}
              role="tab"
              aria-selected={active === filter}
              onClick={() => setActive(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="archive-empty">
          <div className="big">Archive in progress</div>
          <p>Verified project entries will appear here.</p>
        </div>
      </div>
    </section>
  )
}
