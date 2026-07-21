import type { WeddingContent } from '../../content'
import type { Invitation } from '../../invitations/model'
import heroCouple from '../../assets/images/hero/hero-couple.webp'
import heroCoupleMobile from '../../assets/images/hero/hero-couple-mobile.webp'
import { getInvitationGreeting } from '../../invitations/lib'
import { Container } from '../../shared/layout'
import { Button, HandwrittenNote } from '../../shared/ui'
import styles from './Hero.module.css'

type HeroContent = WeddingContent['hero']

type HeroProps = {
  content: HeroContent
  invitation?: Invitation | null
  nextSectionId: string
}

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

export function Hero({ content, invitation, nextSectionId }: HeroProps) {
  const handleOpenInvitation = () => {
    document.getElementById(nextSectionId)?.scrollIntoView({
      behavior: prefersReducedMotion() ? 'auto' : 'smooth',
      block: 'start',
    })
  }

  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <Container className={styles.container} size="large">
        <div className={styles.layout}>
          <div className={styles.content}>
            <p className={styles.greeting}>
              {getInvitationGreeting(invitation, content)}
            </p>
            <h1 className={styles.title} id="hero-title">
              <span>{content.firstName}</span>
              <span className={styles.ampersand}>{content.ampersand}</span>
              <span>{content.secondName}</span>
            </h1>
            <p className={styles.subtitle}>{content.subtitle}</p>
            <dl className={styles.meta}>
              <div>
                <dt
                  className={styles.date}
                  aria-label={`${content.date.day} ${content.date.month} ${content.date.year}`}
                >
                  <span className={styles.dateNumber}>{content.date.day}</span>
                  <span>{content.date.month}</span>
                  <span className={styles.dateNumber}>{content.date.year}</span>
                </dt>
                <dd>{content.city}</dd>
              </div>
            </dl>
          </div>

          <figure className={styles.media}>
            <picture>
              <source media="(min-width: 721px)" srcSet={heroCouple} />
              <source media="(max-width: 720px)" srcSet={heroCoupleMobile} />
              <img
                alt={content.imageAlt}
                className={styles.image}
                decoding="async"
                fetchPriority="high"
                height="980"
                loading="eager"
                src={heroCouple}
                width="820"
              />
            </picture>
            <HandwrittenNote className={styles.note} rotation="negative" size="large">
              {content.handwritten}
            </HandwrittenNote>
          </figure>

          <Button className={styles.button} onClick={handleOpenInvitation}>
            {content.actionLabel}
          </Button>
        </div>
      </Container>
    </section>
  )
}
