import { weddingContent } from './content'
import { Container, PaperSection } from './shared/layout'
import { SectionHeader } from './shared/ui'
import styles from './App.module.css'

const contentChecks = [
  {
    label: 'Hero title',
    value: weddingContent.hero.title,
  },
  {
    label: 'Hero handwritten note',
    value: weddingContent.hero.handwritten,
  },
  {
    label: 'Wedding date',
    value: weddingContent.hero.date,
  },
  {
    label: 'Wedding city',
    value: weddingContent.hero.city,
  },
  {
    label: 'Personal message body',
    value: weddingContent.personalMessage.body,
  },
  {
    label: 'Transition text',
    value: weddingContent.transition.text,
  },
  {
    label: 'Ten years title',
    value: weddingContent.tenYears.title,
  },
  {
    label: 'Timeline event count',
    value: String(weddingContent.timeline.items.length),
  },
  {
    label: 'Venue name',
    value: weddingContent.venue.name,
  },
  {
    label: 'Transfer route',
    value: [
      weddingContent.transfer.route.from,
      weddingContent.transfer.route.via,
      weddingContent.transfer.route.to,
    ].join(' -> '),
  },
  {
    label: 'Dress code palette',
    value: weddingContent.dressCode.palette.join(', '),
  },
  {
    label: 'RSVP button label',
    value: weddingContent.rsvp.submitLabel,
  },
  {
    label: 'RSVP additional info label',
    value: weddingContent.rsvp.additionalInfoLabel,
  },
  {
    label: 'Footer site name',
    value: weddingContent.footer.siteName,
  },
  {
    label: 'Footer couple',
    value: weddingContent.footer.couple,
  },
  {
    label: 'Footer status',
    value: weddingContent.footer.status,
  },
] as const

function App() {
  return (
    <main>
      <PaperSection tone="paper" size="compact">
        <Container size="narrow">
          <div className={styles.screen}>
            <SectionHeader
              eyebrow={weddingContent.hero.eyebrow}
              headingLevel={1}
              title={weddingContent.hero.title}
              subtitle={weddingContent.hero.subtitle}
              size="small"
            />

            <dl className={styles.details}>
              {contentChecks.map((item) => (
                <div className={styles.detail} key={item.label}>
                  <dt>{item.label}</dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </PaperSection>
    </main>
  )
}

export default App
