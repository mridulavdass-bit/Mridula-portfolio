import { useEffect, useState } from 'react'

const TITLE = "Mridula's Portfolio"

interface SplashScreenProps {
  onEnter: () => void
}

export default function SplashScreen({ onEnter }: SplashScreenProps) {
  const [closing, setClosing] = useState(false)
  const [comingSoon, setComingSoon] = useState(false)

  useEffect(() => {
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prevOverflow
    }
  }, [])

  return (
    <div
      className={`splash${closing ? ' is-closing' : ''}`}
      onTransitionEnd={(e) => {
        if (closing && e.propertyName === 'opacity') onEnter()
      }}
    >
      <div className="splash-type">
        <h1 className="splash-title">{TITLE}</h1>
      </div>

      <p className="splash-sub">Choose your theme</p>

      <div className="splash-actions">
        <button className="splash-btn splash-btn-light" onClick={() => setClosing(true)}>
          Light Theme
        </button>
        <button className="splash-btn splash-btn-dark" onClick={() => setComingSoon(true)}>
          Dark Theme
        </button>
      </div>

      <p className={`splash-note${comingSoon ? ' is-visible' : ''}`} role="status">
        Dark theme is coming soon — try Light for now.
      </p>
    </div>
  )
}
