import { Container, PaperSection } from './shared/layout'
import { Button, HandwrittenNote, SectionHeader } from './shared/ui'
import styles from './App.module.css'

const typeSamples = [
  {
    label: 'Cormorant Garamond · 500',
    className: 'text-serif',
    sampleClassName: styles.serifSample,
    text: 'Егор & Полина',
  },
  {
    label: 'Onest · 400',
    className: 'text-sans',
    sampleClassName: styles.sansSample,
    text: 'Современное свадебное приглашение',
  },
  {
    label: 'Caveat · 500',
    className: 'text-handwriting',
    sampleClassName: styles.handwritingSample,
    text: 'наконец-то мы можем позвать тебя на нашу свадьбу',
  },
  {
    label: 'JetBrains Mono · 400',
    className: 'text-mono',
    sampleClassName: styles.monoSample,
    text: 'Status: In love ❤️',
  },
] as const

function App() {
  return (
    <main>
      <PaperSection tone="paper" size="story">
        <Container>
          <div className={styles.demoStack}>
            <SectionHeader
              eyebrow="Typography foundation"
              headingLevel={1}
              title="Project fonts"
              subtitle="This temporary screen verifies the approved local Fontsource families, weights, and Cyrillic rendering before real invitation sections are built."
              note="Handwritten notes use Caveat."
            />

            <div className={styles.typographyGrid}>
              {typeSamples.map((sample) => (
                <article className={styles.typeSpecimen} key={sample.label}>
                  <p className={styles.typeLabel}>{sample.label}</p>
                  <p
                    className={`${styles.typeSample} ${sample.className} ${sample.sampleClassName}`}
                  >
                    {sample.text}
                  </p>
                </article>
              ))}
            </div>

            <div>
              <Button>Onest button 500</Button>
            </div>
          </div>
        </Container>
      </PaperSection>

      <PaperSection tone="chapter" size="chapter">
        <Container size="narrow">
          <SectionHeader
            eyebrow="Chapter tone"
            title="Большой заголовок без финального контента"
            subtitle="The chapter spacing fills the viewport but still grows naturally when content needs more room."
            size="large"
            note="Красная рукописная пометка"
            notePosition="right"
          />
        </Container>
      </PaperSection>

      <PaperSection tone="wine" size="info">
        <Container>
          <SectionHeader
            eyebrow="Wine tone"
            title="Light text stays readable"
            subtitle="This verifies the contextual heading, body, secondary, and handwriting colors on the dark wine background."
            note="Pale handwriting remains legible."
            notePosition="corner"
          />
          <HandwrittenNote className={styles.demoNote} rotation="positive">
            наконец-то мы можем позвать тебя
          </HandwrittenNote>
        </Container>
      </PaperSection>

      <PaperSection tone="terminal" size="compact">
        <Container size="narrow">
          <SectionHeader
            eyebrow="Terminal tone"
            title="Terminal context"
            subtitle="The mono font is reserved for terminal-style footer content."
            size="small"
          />
          <div className={styles.terminalBlock}>
            <p>Status: In love ❤️</p>
            <p className={styles.terminalMuted}>font: JetBrains Mono · 400</p>
          </div>
        </Container>
      </PaperSection>
    </main>
  )
}

export default App
