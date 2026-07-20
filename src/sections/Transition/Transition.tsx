import type { WeddingContent } from '../../content'
import { Container, PaperSection } from '../../shared/layout'
import styles from './Transition.module.css'

type TransitionProps = {
  content: WeddingContent['transition']
}

export function Transition({ content }: TransitionProps) {
  return (
    <PaperSection className={styles.section} size="compact" tone="linen">
      <Container size="narrow">
        <p className={styles.text}>{content.text}</p>
      </Container>
    </PaperSection>
  )
}
