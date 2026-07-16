import type { ElementType, ReactNode } from 'react'
import clsx from 'clsx'
import styles from './HandwrittenNote.module.css'

type HandwrittenNoteProps = {
  children: ReactNode
  className?: string
  as?: 'p' | 'span' | 'div'
  rotation?: 'negative' | 'none' | 'positive'
  size?: 'small' | 'default' | 'large'
}

const rotationClassName = {
  negative: styles.negative,
  none: styles.none,
  positive: styles.positive,
}

const sizeClassName = {
  small: styles.small,
  default: styles.default,
  large: styles.large,
}

export function HandwrittenNote({
  children,
  className,
  as = 'p',
  rotation = 'negative',
  size = 'default',
}: HandwrittenNoteProps) {
  const Component = as as ElementType

  return (
    <Component
      className={clsx(styles.note, rotationClassName[rotation], sizeClassName[size], className)}
    >
      {children}
    </Component>
  )
}
