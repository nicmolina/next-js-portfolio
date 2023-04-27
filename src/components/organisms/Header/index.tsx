import { FC, useEffect, useRef } from 'react'
import * as S from './styles'
import { Button, Link } from 'components/atoms'
import { gsap } from 'gsap'

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
          backdropFilter: 'saturate(180%) blur(1rem)',
          boxShadow: 'rgba(255, 255, 255, 0.1) 0px -0.1rem 0px 0px inset',
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
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
    <>
      <S.Wrapper ref={headerRef}>
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
      <S.BarWrapper ref={barRef} />
    </>
  )
}

export default Header
