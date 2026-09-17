export default function ContactSection() {
  return (
    <section className="section section-pad container contact" id="contact" data-hud="Contact">
      <div className="grid">
        <span className="label mono-label about-eyebrow">08 / Close</span>
        <h2 className="contact-title">
          Have a good
          <br />
          problem?
        </h2>
        <a href="mailto:hello@mridula.design" className="contact-cta">
          Let&apos;s talk <span className="arrow">→</span>
        </a>

        <div className="contact-links">
          <a href="mailto:hello@mridula.design">Email</a>
          <a href="#">LinkedIn</a>
          <a href="#">Resume</a>
        </div>
      </div>
    </section>
  )
}
