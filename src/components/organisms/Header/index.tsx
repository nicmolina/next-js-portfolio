import { FC } from 'react'
import * as S from './styles'
import { CodeView } from 'styled-icons/remix-editor'
import { Button, Link } from 'components/atoms'

const Header: FC = () => {
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
          <li>
            <Link href="/about">
              <Button variant="secondary" label={'About'} />
            </Link>
          </li>
          <li>
            <Link href="/works">
              <Button variant="secondary" label={'Works'} />
            </Link>
          </li>
          <li>
            <Link href="/resume">
              <Button variant="secondary" label={'Resume'} />
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
