import type { WeddingContent } from '../../content'
import cakeIcon from '../../assets/images/timeline/cake_32px.svg'
import cheersIcon from '../../assets/images/timeline/cheers_32px.svg'
import foodIcon from '../../assets/images/timeline/food_32px.svg'
import ringsIcon from '../../assets/images/timeline/rings_32px.svg'
import sparklesIcon from '../../assets/images/timeline/sparkles_32px.svg'
import clsx from 'clsx'
import { Container, PaperSection } from '../../shared/layout'
import { HandwrittenNote } from '../../shared/ui'
import styles from './Timeline.module.css'

type TimelineProps = {
  content: WeddingContent['timeline']
}

const eventIcons = [cheersIcon, ringsIcon, foodIcon, cakeIcon, sparklesIcon]

export function Timeline({ content }: TimelineProps) {
  return (
    <PaperSection className={styles.section} size="info" tone="paper">
      <Container size="large">
        <div className={styles.header}>
          <h2 className={styles.title}>{content.title}</h2>
        </div>

        <ol className={styles.list}>
          {content.items.map((item, index) => (
            <li className={styles.item} key={`${item.time}-${item.title}`}>
              <time className={styles.time}>{item.time}</time>
              <div className={styles.iconSlot} aria-hidden="true">
                <img
                  alt=""
                  className={styles.icon}
                  src={eventIcons[index]}
                />
              </div>
              <div className={styles.markerRow} aria-hidden="true">
                <span className={styles.marker} />
              </div>
              <div className={styles.content}>
                <div className={styles.titleRow}>
                  <img
                    alt=""
                    aria-hidden="true"
                    className={styles.mobileIcon}
                    src={eventIcons[index]}
                  />
                  <h3 className={styles.itemTitle}>{item.title}</h3>
                </div>
                <p className={styles.description}>{item.description}</p>
                {item.handwritten ? (
                  <div
                    className={clsx(
                      styles.noteWrapper,
                      index === 1 && styles.noteWrapperLong,
                    )}
                  >
                    <HandwrittenNote
                      as="div"
                      className={styles.note}
                      rotation="positive"
                      size="small"
                    >
                      {item.handwritten}
                    </HandwrittenNote>
                  </div>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </PaperSection>
  )
}
