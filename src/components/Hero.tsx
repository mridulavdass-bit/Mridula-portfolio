export default function Hero() {
  return (
    <header className="section hero container grid" id="top" data-hud="Intro">
      <svg className="hero-mark" viewBox="0 0 74 74" fill="none" aria-hidden="true">
        <circle cx="37" cy="37" r="36" stroke="#111111" strokeWidth="1" />
        <line x1="37" y1="1" x2="37" y2="73" stroke="#6B6F2D" strokeWidth="1" />
        <line x1="1" y1="37" x2="73" y2="37" stroke="#111111" strokeWidth="0.5" strokeDasharray="2 3" />
        <circle cx="37" cy="37" r="4" fill="#9B0047" />
      </svg>
      <span className="hand-note" aria-hidden="true">complexity in, clarity out</span>

      <span className="hero-eyebrow mono-label">Portfolio / 2026</span>

      <h1 className="hero-title">
        <span className="line">
          <span>I Make Complex</span>
        </span>
        <span className="line">
          <span>Things Feel</span>
        </span>
        <span className="line">
          <span>
            Obvious.<span className="accent-dot"></span>
          </span>
        </span>
      </h1>

      <div className="hero-foot">
        <p className="hero-desc">
          Product, systems and brand — mostly for fintech, occasionally for the fun of it. I take the tangle of
          flows, edge cases and stakeholders nobody wants to untangle, and turn it into something a person can
          actually use. Motion and AI-assisted tools help me get there faster.
        </p>
        <p className="hero-aside">A working record, not a highlight reel.</p>
      </div>
    </header>
  )
}
