import { Container, PaperSection } from './shared/layout'
import { Button, HandwrittenNote, SectionHeader } from './shared/ui'
import styles from './App.module.css'

function App() {
  return (
    <main>
      <PaperSection tone="paper" size="story">
        <Container>
          <div className={styles.demoStack}>
            <SectionHeader
              eyebrow="Shared foundation"
              headingLevel={1}
              title="Reusable layout and UI"
              subtitle="This temporary screen checks the approved primitives before real invitation sections are built."
              note="Handwritten notes inherit the section tone."
            />
            <div>
              <Button>Primary button</Button>
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
            The note color comes from the section context.
          </HandwrittenNote>
        </Container>
      </PaperSection>

      <PaperSection tone="terminal" size="compact">
        <Container size="narrow">
          <SectionHeader
            eyebrow="Terminal tone"
            title="Terminal context"
            subtitle="The component layer can inherit terminal text colors without introducing business logic."
            size="small"
          />
          <div className={styles.terminalBlock}>
            <p>status: layout primitives ready</p>
            <p className={styles.terminalMuted}>next: real sections later</p>
          </div>
        </Container>
      </PaperSection>
    </main>
  )
}

export default App
