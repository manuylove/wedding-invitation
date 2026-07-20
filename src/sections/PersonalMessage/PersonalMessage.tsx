import type { WeddingContent } from '../../content'
import { Container, PaperSection } from '../../shared/layout'
import { HandwrittenNote } from '../../shared/ui'
import styles from './PersonalMessage.module.css'

type PersonalMessageProps = {
  content: WeddingContent['personalMessage']
  id: string
}

export function PersonalMessage({ content, id }: PersonalMessageProps) {
  return (
    <PaperSection className={styles.section} id={id} size="info" tone="cotton">
      <Container>
        <div className={styles.layout}>
          <h2 className={styles.body}>{content.body}</h2>
          <HandwrittenNote
            className={styles.note}
            rotation="positive"
            size="default"
          >
            {content.handwritten}
          </HandwrittenNote>
        </div>
      </Container>
    </PaperSection>
  )
}
