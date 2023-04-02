import { FC } from 'react'
import * as S from './styles'
import { IButtonProps } from './interfaces'

const Button: FC<IButtonProps> = ({
  icon,
  label,
  onClick,
  variant,
  type,
  children
}) => {
  return (
    <S.Button onClick={onClick} type={type} variant={variant}>
      {label}
      {icon}
      {children}
    </S.Button>
  )
}

export default Button
