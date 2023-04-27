import { FC, useEffect, useRef } from 'react'
import * as S from './styles'
import { Button, Link } from 'components/atoms'
import { gsap } from 'gsap'
import { colors } from 'styles/color'

const Header: FC = () => {
  const headerRef = useRef<HTMLDivElement>(null)
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset
      const scrollTop = window.pageYOffset
      const maxScroll = document.body.scrollHeight - window.innerHeight
      const scrollPercent = scrollTop / maxScroll
      const barWidth = `${scrollPercent * 100}%`

      gsap.to(barRef.current, {
        width: barWidth,
        duration: 0.5,
        ease: 'power2.out'
      })

      if (scrollPosition > 0) {
        gsap.to(headerRef.current, {
          backgroundColor: colors.primary,
          duration: 0.5
        })
      } else {
        gsap.to(headerRef.current, {
          backgroundColor: 'transparent',
          duration: 0.5
        })
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <S.Wrapper>
      <S.ContentContainer>
        <S.ListContainer>
          <li>
            <Link href="/">
              <Button
                variant="secondary"
                label={'</> Nícolas Marcondes Molina'}
              />
            </Link>
          </li>
        </S.ListContainer>
        <S.ContactMeContainer>
          <Button variant="secondary" label={'Contact me'} />
        </S.ContactMeContainer>
      </S.ContentContainer>
    </S.Wrapper>
  )
}

export default Header
