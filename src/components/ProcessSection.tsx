import { useReveal } from '../hooks/useReveal'

const steps = ['Understand', 'Frame', 'Explore', 'Systemise', 'Prototype', 'Refine', 'Ship']

export default function ProcessSection() {
  const head = useReveal<HTMLDivElement>()

  return (
    <section className="section section-pad container" id="process" data-hud="Process">
      <div className="grid">
        <div ref={head.ref} className={`section-head ${head.className}`}>
          <div>
            <span className="label mono-label">04 / Process</span>
            <h2>
              How I
              <br />
              Work
            </h2>
          </div>
          <p className="note">A working sequence, not a fixed formula.</p>
        </div>

        <div className="process-line">
          {steps.map((step, i) => (
            <div className="process-step" key={step}>
              <span className="step-idx">{String(i + 1).padStart(2, '0')}</span>
              <div className="step-name">{step}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
