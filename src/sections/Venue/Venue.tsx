import type { WeddingContent } from '../../content'
import instagramIcon from '../../assets/images/venue/instagram_24px.svg'
import locationIcon from '../../assets/images/venue/location_24px.svg'
import venueDesktop from '../../assets/images/venue/utes_desktop.webp'
import venueMobile from '../../assets/images/venue/utes_mobile.webp'
import { Container } from '../../shared/layout'
import { HandwrittenNote } from '../../shared/ui'
import styles from './Venue.module.css'

type VenueProps = {
  content: WeddingContent['venue']
}

export function Venue({ content }: VenueProps) {
  return (
    <section className={styles.section} aria-labelledby="venue-title">
      <picture className={styles.background} aria-hidden="true">
        <source media="(max-width: 768px)" srcSet={venueMobile} />
        <img
          alt=""
          className={styles.image}
          decoding="async"
          loading="lazy"
          src={venueDesktop}
        />
      </picture>

      <Container className={styles.container} size="large">
        <div className={styles.content}>
          <p className={styles.eyebrow}>{content.title}</p>
          <h2 className={styles.title} id="venue-title">
            {content.name}
          </h2>

          <div className={styles.description}>
            <p className={styles.intro}>{content.description.intro}</p>
          </div>

          <HandwrittenNote className={styles.note} rotation="negative" size="default">
            {content.handwritten}
          </HandwrittenNote>

          <a
            aria-label={content.instagramLabel}
            className={styles.instagramLink}
            href={content.instagramUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              alt=""
              aria-hidden="true"
              className={styles.instagramIcon}
              src={instagramIcon}
            />
            <span>{content.instagramLabel}</span>
          </a>

          <div className={styles.meta}>
            <img
              alt=""
              aria-hidden="true"
              className={styles.locationIcon}
              src={locationIcon}
            />
            <address>{content.address}</address>
          </div>

          <a
            className={styles.mapLink}
            href={content.mapUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            {content.mapLabel}
            <span className={styles.mapArrow} aria-hidden="true">
              &#8599;
            </span>
          </a>
        </div>
      </Container>
    </section>
  )
}
