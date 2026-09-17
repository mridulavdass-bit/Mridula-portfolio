import { useReveal } from '../hooks/useReveal'

export default function AboutSection() {
  const eyebrow = useReveal<HTMLSpanElement>()
  const title = useReveal<HTMLHeadingElement>()

  return (
    <section className="section section-pad container" id="about" data-hud="About">
      <div className="grid">
        <span ref={eyebrow.ref} className={`label mono-label about-eyebrow ${eyebrow.className}`}>
          05 / Note
        </span>
        <h2 ref={title.ref} className={`about-title ${title.className}`}>
          Different problems.
          <br />
          Same curiosity.
        </h2>
        <p className="about-body">
          The work here moves across product, systems, brand, web, leadership and creative technology — different
          problems, tackled with the same underlying approach: understand the system before styling the surface.
        </p>
      </div>
    </section>
  )
}
