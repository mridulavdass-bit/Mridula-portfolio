const items = [
  'Product Design',
  'UX',
  'Systems',
  'Fintech',
  'Onboarding',
  'Strategy',
  'Leadership',
  'Brand',
  'Motion',
  'AI',
]

export default function Marquee() {
  const track = [...items, ...items]

  return (
    <div className="marquee-strip">
      <div className="marquee-track">
        {track.map((item, i) => (
          <span key={`${item}-${i}`}>{item}</span>
        ))}
      </div>
    </div>
  )
}
