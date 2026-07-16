import type { ElementType, ReactNode } from 'react'
import clsx from 'clsx'
import styles from './Container.module.css'

export type ContainerSize = 'narrow' | 'default' | 'large' | 'full'

type ContainerProps = {
  children: ReactNode
  size?: ContainerSize
  className?: string
  as?: 'div' | 'section'
}

const sizeClassName: Record<ContainerSize, string> = {
  narrow: styles.narrow,
  default: styles.default,
  large: styles.large,
  full: styles.full,
}

export function Container({
  children,
  size = 'default',
  className,
  as = 'div',
}: ContainerProps) {
  const Component = as as ElementType

  return (
    <Component className={clsx(styles.container, sizeClassName[size], className)}>
      {children}
    </Component>
  )
}
