import { ReactNode } from 'react'

export type ButtonVariant = 'primary' | 'secondary'

export interface IButtonProps {
  variant: ButtonVariant
  icon?: ReactNode
  onClick?: (event?: any) => void
  type?: 'button' | 'submit' | 'reset'
  label?: string
  children?: ReactNode
  isLoading?: boolean
  disabled?: boolean
  size?: 'small' | 'medium' | 'large'
}
