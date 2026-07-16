import type { ReactNode } from 'react'
import clsx from 'clsx'
import { HandwrittenNote } from '../HandwrittenNote'
import styles from './SectionHeader.module.css'

type SectionHeaderProps = {
  title: ReactNode
  eyebrow?: ReactNode
  subtitle?: ReactNode
  note?: ReactNode
  align?: 'left' | 'center' | 'right'
  size?: 'large' | 'default' | 'small'
  notePosition?: 'below' | 'right' | 'overlap' | 'corner'
  headingLevel?: 1 | 2 | 3
  className?: string
}

const alignClassName = {
  left: styles.left,
  center: styles.center,
  right: styles.right,
}

const sizeClassName = {
  large: styles.large,
  default: styles.default,
  small: styles.small,
}

const notePositionClassName = {
  below: styles.noteBelow,
  right: styles.noteRight,
  overlap: styles.noteOverlap,
  corner: styles.noteCorner,
}

export function SectionHeader({
  title,
  eyebrow,
  subtitle,
  note,
  align = 'left',
  size = 'default',
  notePosition = 'below',
  headingLevel = 2,
  className,
}: SectionHeaderProps) {
  const Heading = `h${headingLevel}` as const

  return (
    <header
      className={clsx(
        styles.header,
        alignClassName[align],
        sizeClassName[size],
        notePositionClassName[notePosition],
        className,
      )}
    >
      <div className={styles.content}>
        {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
        <Heading className={styles.title}>{title}</Heading>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>
      {note && (
        <HandwrittenNote className={styles.note} as="div">
          {note}
        </HandwrittenNote>
      )}
    </header>
  )
}
