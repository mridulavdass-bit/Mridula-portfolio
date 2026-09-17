import type { ProjectType } from '../data/work'

interface VisualProps {
  active: boolean
}

/**
 * Six type-driven visual systems for Selected Work. Each shares the same
 * language (line, node, olive/fuchsia restraint, one entrance pass on
 * scroll-into-view) but the *behaviour* differs by project type, so the
 * six cards read as related dialects rather than one repeated template.
 * The project's number is folded into each visual rather than floated
 * on top of it as a separate oversized numeral.
 */

function Flow({ active }: VisualProps) {
  return (
    <div className={`work-visual wv-flow${active ? ' is-active' : ''}`}>
      <svg viewBox="0 0 420 180" aria-hidden="true">
        <line className="wv-edge" x1="35" y1="96" x2="105" y2="96" style={{ '--i': 0 } as never} />
        <line className="wv-edge" x1="115" y1="93" x2="185" y2="48" style={{ '--i': 1 } as never} />
        <line className="wv-edge" x1="115" y1="96" x2="185" y2="96" style={{ '--i': 1 } as never} />
        <line className="wv-edge" x1="115" y1="99" x2="185" y2="144" style={{ '--i': 1 } as never} />
        <line className="wv-edge" x1="195" y1="48" x2="275" y2="92" style={{ '--i': 2 } as never} />
        <line className="wv-edge" x1="195" y1="96" x2="275" y2="96" style={{ '--i': 2 } as never} />
        <line className="wv-edge" x1="195" y1="144" x2="275" y2="100" style={{ '--i': 2 } as never} />
        <line className="wv-edge" x1="285" y1="93" x2="335" y2="68" style={{ '--i': 3 } as never} />
        <line className="wv-edge" x1="345" y1="68" x2="383" y2="93" style={{ '--i': 3 } as never} />

        <circle className="wv-node wv-node--origin" cx="30" cy="96" r="6" style={{ '--i': 0 } as never} />
        <circle className="wv-node" cx="110" cy="96" r="5" style={{ '--i': 1 } as never} />
        <circle className="wv-node wv-node--branch" cx="190" cy="48" r="3.5" style={{ '--i': 1 } as never} />
        <circle className="wv-node wv-node--branch" cx="190" cy="96" r="3.5" style={{ '--i': 1 } as never} />
        <circle className="wv-node wv-node--branch" cx="190" cy="144" r="3.5" style={{ '--i': 1 } as never} />
        <circle className="wv-node" cx="280" cy="96" r="5" style={{ '--i': 2 } as never} />
        <circle className="wv-node" cx="340" cy="68" r="5" style={{ '--i': 3 } as never} />
        <circle className="wv-node wv-node--end" cx="390" cy="93" r="7" style={{ '--i': 4 } as never} />
      </svg>
      <span className="wv-num wv-num--flow">01</span>
    </div>
  )
}

function Architecture({ active }: VisualProps) {
  return (
    <div className={`work-visual wv-architecture${active ? ' is-active' : ''}`}>
      <svg viewBox="0 0 320 200" aria-hidden="true">
        <line className="wv-edge" x1="130" y1="55" x2="190" y2="55" />
        <line className="wv-edge" x1="85" y1="90" x2="85" y2="115" />
        <line className="wv-edge" x1="235" y1="90" x2="235" y2="115" />
        <line className="wv-edge wv-edge--dashed" x1="130" y1="60" x2="200" y2="150" />
        <line className="wv-edge" x1="130" y1="145" x2="190" y2="145" />

        <rect className="wv-module" x="40" y="30" width="90" height="55" rx="1" style={{ '--i': 0 } as never} />
        <rect className="wv-module" x="190" y="30" width="90" height="55" rx="1" style={{ '--i': 1 } as never} />
        <rect className="wv-module" x="40" y="115" width="90" height="55" rx="1" style={{ '--i': 2 } as never} />
        <rect className="wv-module" x="190" y="115" width="90" height="55" rx="1" style={{ '--i': 3 } as never} />
      </svg>
      <span className="wv-num wv-num--architecture">
        02<span className="wv-crosshair" aria-hidden="true" />
      </span>
    </div>
  )
}

function Data({ active }: VisualProps) {
  const bars = [0.62, 0.28, 0.74, 0.4, 0.5, 0.32, 0.58]
  return (
    <div className={`work-visual wv-data${active ? ' is-active' : ''}`}>
      <svg viewBox="0 0 200 250" aria-hidden="true">
        <line className="wv-baseline" x1="20" y1="210" x2="180" y2="210" />
        {bars.map((h, i) => (
          <rect
            key={i}
            className="wv-bar"
            x={28 + i * 21}
            y={40}
            width="12"
            height="160"
            style={{ '--i': i, '--h': h } as never}
          />
        ))}
      </svg>
      <span className="wv-num wv-num--data">
        03<span className="wv-signal" aria-hidden="true" />
      </span>
    </div>
  )
}

function Motion({ active }: VisualProps) {
  const frameCount = 7
  return (
    <div className={`work-visual wv-motion${active ? ' is-active' : ''}`}>
      <svg viewBox="0 0 420 140" aria-hidden="true">
        {Array.from({ length: 12 }).map((_, i) => (
          <rect key={`t-${i}`} className="wv-sprocket" x={4 + i * 36} y="6" width="10" height="6" />
        ))}
        {Array.from({ length: 12 }).map((_, i) => (
          <rect key={`b-${i}`} className="wv-sprocket" x={4 + i * 36} y="128" width="10" height="6" />
        ))}
        {Array.from({ length: frameCount }).map((_, i) => (
          <rect
            key={i}
            className="wv-frame"
            x={10 + i * 58}
            y="24"
            width="50"
            height="92"
            style={{ '--i': i } as never}
          />
        ))}
        <line className="wv-playhead" x1="10" y1="18" x2="10" y2="122" />
      </svg>
      <span className="wv-num wv-num--motion wv-num--motion-0">0</span>
      <span className="wv-num wv-num--motion wv-num--motion-4">4</span>
    </div>
  )
}

function Brand({ active }: VisualProps) {
  return (
    <div className={`work-visual wv-brand${active ? ' is-active' : ''}`}>
      <svg viewBox="0 0 240 240" aria-hidden="true">
        <rect className="wv-band" x="-30" y="100" width="300" height="46" transform="rotate(-8 120 120)" />
        <circle className="wv-stamp" cx="182" cy="66" r="30" transform="rotate(-8 120 120)" />
      </svg>
      <span className="wv-num wv-num--brand">05</span>
    </div>
  )
}

function Identity({ active }: VisualProps) {
  return (
    <div className={`work-visual wv-identity${active ? ' is-active' : ''}`}>
      <svg viewBox="0 0 320 180" aria-hidden="true">
        <polygon className="wv-piece wv-piece--top" points="160,40 178,72 142,72" style={{ '--i': 0 } as never} />
        <rect className="wv-piece wv-piece--core" x="148" y="80" width="24" height="24" style={{ '--i': 1 } as never} />
        <polygon
          className="wv-piece wv-piece--bottom"
          points="160,140 178,108 142,108"
          style={{ '--i': 2 } as never}
        />
      </svg>
      <span className="wv-num wv-num--identity wv-num--identity-0">0</span>
      <span className="wv-num wv-num--identity wv-num--identity-6">6</span>
    </div>
  )
}

export const projectVisuals: Record<ProjectType, (props: VisualProps) => JSX.Element> = {
  flow: Flow,
  architecture: Architecture,
  data: Data,
  motion: Motion,
  brand: Brand,
  identity: Identity,
}

export const placeholderLabels: Record<ProjectType, string> = {
  flow: 'Flow map — placeholder',
  architecture: 'System map — placeholder',
  data: 'Dashboard crop — placeholder',
  motion: 'Filmstrip — placeholder',
  brand: 'Brand artefact — placeholder',
  identity: 'Identity system — placeholder',
}
