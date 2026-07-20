import type { WeddingContent } from '../../content'
import tenYearsCouple from '../../assets/images/tenYears/ten-years-couple.webp'
import { Container, PaperSection } from '../../shared/layout'
import { HandwrittenNote } from '../../shared/ui'
import styles from './TenYears.module.css'

type TenYearsProps = {
  content: WeddingContent['tenYears']
}

export function TenYears({ content }: TenYearsProps) {
  return (
    <PaperSection className={styles.section} size="info" tone="chapter">
      <Container>
        <div className={styles.layout}>
          <div className={styles.copy}>
            <div className={styles.storyComposition}>
              <p className={styles.intro}>{content.intro}</p>
              <h2 className={styles.srOnly}>
                {content.years} {content.caption}
              </h2>
              <div className={styles.heading} aria-hidden="true">
                <span className={styles.numberBlock}>
                  <span className={styles.years}>{content.years}</span>
                  <span className={styles.numberCaption}>{content.caption}</span>
                </span>
              </div>
            </div>
          </div>

          <div className={styles.visual}>
            <figure className={styles.polaroid}>
              <div className={styles.photoFrame}>
                <img
                  className={styles.photo}
                  src={tenYearsCouple}
                  alt="Егор и Полина на совместной фотографии"
                  width="820"
                  height="1024"
                />
              </div>
              <figcaption className={styles.caption}>
                <div className={styles.captionNote}>
                  <HandwrittenNote
                    as="div"
                    className={styles.note}
                    rotation="negative"
                    size="large"
                  >
                    {content.handwritten}
                  </HandwrittenNote>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </Container>
    </PaperSection>
  )
}
