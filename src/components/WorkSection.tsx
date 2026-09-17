import { work } from '../data/work'
import { useReveal } from '../hooks/useReveal'

export default function WorkSection() {
  const head = useReveal<HTMLDivElement>()

  return (
    <section className="section section-pad container" id="work" data-hud="Work">
      <div className="grid">
        <div ref={head.ref} className={`section-head ${head.className}`}>
          <div>
            <span className="label mono-label">02 / Index</span>
            <h2>
              Selected
              <br />
              Work
            </h2>
          </div>
          <p className="note">Six projects spanning product, systems and brand. Case detail to follow.</p>
        </div>

        <div className="work-list">
          {work.map((entry) => (
            <article key={entry.id} className={`project ${entry.sizeClass}`}>
              <div className="project-num mono-label">{entry.num}</div>
              <span className="ghost-num" aria-hidden="true">
                {entry.num}
              </span>
              <div className="project-visual">
                <span className="crop tl" aria-hidden="true"></span>
                <span className="crop tr" aria-hidden="true"></span>
                <span className="crop bl" aria-hidden="true"></span>
                <span className="crop br" aria-hidden="true"></span>
                {entry.visual}
                <span className="ph-tag">Visual Placeholder</span>
              </div>
              <div className="project-meta">
                <h3 className="project-title">{entry.title}</h3>
                <div className="project-tags">
                  {entry.tags}
                  <span className="yr">{entry.year}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
