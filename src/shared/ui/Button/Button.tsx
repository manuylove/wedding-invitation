import type { ButtonHTMLAttributes, ReactNode } from 'react'
import clsx from 'clsx'
import styles from './Button.module.css'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  fullWidth?: boolean
}

export function Button({
  children,
  className,
  fullWidth = false,
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(styles.button, fullWidth && styles.fullWidth, className)}
      type={type}
      {...props}
    >
      {children}
    </button>
  )
}
