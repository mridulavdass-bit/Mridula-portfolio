export default function Hero() {
  return (
    <header className="section hero container grid" id="top" data-hud="Intro">
      <svg className="hero-mark" viewBox="0 0 74 74" fill="none" aria-hidden="true">
        <circle cx="37" cy="37" r="36" stroke="#111111" strokeWidth="1" />
        <line x1="37" y1="1" x2="37" y2="73" stroke="#6B6F2D" strokeWidth="1" />
        <line x1="1" y1="37" x2="73" y2="37" stroke="#111111" strokeWidth="0.5" strokeDasharray="2 3" />
        <circle cx="37" cy="37" r="4" fill="#9B0047" />
      </svg>
      <span className="hand-note" aria-hidden="true">complex in, clear out</span>

      <span className="hero-eyebrow mono-label">01 / Portfolio / 2026</span>

      <h1 className="hero-title">
        <span className="line">
          <span>I Design</span>
        </span>
        <span className="line">
          <span>
            Products.<span className="accent-dot"></span>
          </span>
        </span>
        <span className="line">
          <span>Systems & Experience.</span>
        </span>
        <span className="hero-spec hero-spec-1">the line I always write first</span>
        <span className="hero-spec hero-spec-2">still the loudest word here</span>
        <span className="hero-spec hero-spec-3">the quieter, truer half</span>
      </h1>

      <div className="hero-foot">
        <p className="hero-desc">
          A working record of product design, systems thinking and creative technology — assembled here as an
          evolving body of work.
        </p>
        <div className="hero-tags">
          <span>Product Design</span>
          <span>Systems</span>
          <span>Fintech</span>
          <span>Creative Technology</span>
        </div>
      </div>
    </header>
  )
}
