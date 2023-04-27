import { FC, useRef } from 'react'
import { gsap } from 'gsap'
import { Link } from 'components/atoms'
import * as S from './styles'
import { colors } from 'styles/color'

export interface ITextLinkProps {
  href?: string
  label?: string
  size?: string
}

const TextLink: FC<ITextLinkProps> = ({ label, href }) => {
  const barRef = useRef<HTMLDivElement>(null)

  const handleMouseEnter = () => {
    gsap.to(barRef.current, {
      width: '100%',
      duration: 0.5,
      borderColor: colors.gray100,
      ease: 'power2.out'
    })
  }

  const handleMouseLeave = () => {
    gsap.to(barRef.current, {
      width: '20%',
      duration: 0.5,
      borderColor: colors.gray700,
      ease: 'power2.out'
    })
  }

  return (
    <S.TextLinkWrapper
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link href={href ?? '/'}>{label}</Link>
      <S.TextLinkBar ref={barRef}></S.TextLinkBar>
    </S.TextLinkWrapper>
  )
}

export default TextLink
