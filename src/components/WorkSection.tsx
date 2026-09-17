import { work } from '../data/work'
import { placeholderLabels, projectVisuals } from './ProjectVisuals'
import { useReveal } from '../hooks/useReveal'

function ProjectCard({ entry }: { entry: (typeof work)[number] }) {
  const card = useReveal<HTMLElement>()
  const Visual = projectVisuals[entry.projectType]

  return (
    <article ref={card.ref} className={`project ${entry.sizeClass}`}>
      <div className="project-num mono-label">{entry.num}</div>
      <div className="project-visual">
        <span className="crop tl" aria-hidden="true"></span>
        <span className="crop tr" aria-hidden="true"></span>
        <span className="crop bl" aria-hidden="true"></span>
        <span className="crop br" aria-hidden="true"></span>
        <Visual active={card.visible} />
        <span className="ph-tag">{placeholderLabels[entry.projectType]}</span>
      </div>
      <div className="project-meta">
        <h3 className="project-title">{entry.title}</h3>
        <div className="project-tags">
          {entry.tags}
          <span className="yr">{entry.year}</span>
        </div>
      </div>
    </article>
  )
}

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
          <p className="note">
            Six projects, six kinds of complexity. The visual language shifts with the work — flows, systems,
            signals, sequences.
          </p>
        </div>

        <div className="work-list">
          {work.map((entry) => (
            <ProjectCard key={entry.id} entry={entry} />
          ))}
        </div>
      </div>
    </section>
  )
}
