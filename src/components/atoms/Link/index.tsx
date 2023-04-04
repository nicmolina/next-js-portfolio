import { FC, ReactNode } from 'react'
import * as S from './styles'

export interface ILinkProps {
  children?: ReactNode
  href: string
}

const Link: FC<ILinkProps> = ({ children, href }) => {
  return <S.LinkContainer href={href}>{children}</S.LinkContainer>
}

export default Link
