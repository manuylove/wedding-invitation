import type { ElementType, ReactNode } from 'react'
import clsx from 'clsx'
import styles from './PaperSection.module.css'

export type PaperTone =
  | 'paper'
  | 'cotton'
  | 'linen'
  | 'chapter'
  | 'wine'
  | 'terminal'

export type SectionSize = 'chapter' | 'story' | 'info' | 'compact'

type PaperSectionProps = {
  children: ReactNode
  id?: string
  className?: string
  tone?: PaperTone
  size?: SectionSize
  as?: 'section' | 'div' | 'footer'
}

const toneClassName: Record<PaperTone, string> = {
  paper: styles.paper,
  cotton: styles.cotton,
  linen: styles.linen,
  chapter: styles.chapterTone,
  wine: styles.wine,
  terminal: styles.terminal,
}

const sizeClassName: Record<SectionSize, string> = {
  chapter: styles.chapter,
  story: styles.story,
  info: styles.info,
  compact: styles.compact,
}

export function PaperSection({
  children,
  id,
  className,
  tone = 'paper',
  size = 'story',
  as = 'section',
}: PaperSectionProps) {
  const Component = as as ElementType

  return (
    <Component
      className={clsx(styles.section, toneClassName[tone], sizeClassName[size], className)}
      id={id}
    >
      {children}
    </Component>
  )
}
