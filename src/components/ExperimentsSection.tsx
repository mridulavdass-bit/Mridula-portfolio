import { useReveal } from '../hooks/useReveal'

const cards = [
  { num: '01', label: 'Motion' },
  { num: '02', label: 'Illustration' },
  { num: '03', label: 'Brand' },
  { num: '04', label: 'Web' },
  { num: '05', label: 'AI Experiments', spark: true },
  { num: '06', label: 'Creative Direction' },
]

export default function ExperimentsSection() {
  const head = useReveal<HTMLDivElement>()

  return (
    <section className="section section-pad experiments" id="experiments" data-hud="Experiments">
      <div className="container grid">
        <div ref={head.ref} className={`section-head ${head.className}`}>
          <div>
            <span className="label mono-label">06 / Aside</span>
            <h2>
              The Other
              <br />
              Stuff
            </h2>
          </div>
          <p className="note">Smaller explorations, outside the main body of work.</p>
        </div>

        <div className="exp-grid">
          {cards.map((card) => (
            <div className={`exp-card${card.spark ? ' spark' : ''}`} key={card.num}>
              <span className="exp-num mono-label">{card.num}</span>
              <h4>{card.label}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
