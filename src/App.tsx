const colorSwatches = [
  ['Paper', 'paper'],
  ['Cotton', 'cotton'],
  ['Linen', 'linen'],
  ['Chapter', 'chapter'],
  ['Wine', 'wine'],
  ['Thread', 'thread'],
  ['Text', 'text'],
] as const

function App() {
  return (
    <main className="foundation-screen">
      <header className="foundation-header">
        <p className="foundation-kicker">Wedding Invitation</p>
        <h1 className="foundation-title">Foundation</h1>
        <p className="foundation-copy">
          This temporary screen verifies the design system, typography, color
          palette, and project structure before building the actual wedding
          invitation.
        </p>
      </header>

      <section className="foundation-panel" aria-labelledby="fonts-title">
        <h2 id="fonts-title">Font utilities</h2>
        <div className="font-examples">
          <p className="font-example text-serif">Cormorant Garamond serif</p>
          <p className="font-example text-sans">Onest sans</p>
          <p className="font-example text-handwriting">Caveat handwriting</p>
          <p className="font-example text-mono">JetBrains Mono monospace</p>
        </div>
      </section>

      <section className="foundation-panel" aria-labelledby="colors-title">
        <h2 id="colors-title">Main color tokens</h2>
        <div className="color-swatches">
          {colorSwatches.map(([name, token]) => (
            <span
              className={`color-swatch color-swatch--${token}`}
              key={name}
            >
              {name}
            </span>
          ))}
        </div>
      </section>
    </main>
  )
}

export default App
