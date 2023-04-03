import { FC } from 'react'
import * as S from './styles'
import { CodeView } from 'styled-icons/remix-editor'
import { Button } from 'components/atoms'

const Header: FC = () => {
  return (
    <S.Wrapper>
      <S.ContentContainer>
        <S.ListContainer>
          <li>
            <a href="/about">
              <Button
                variant="secondary"
                label={'</> Nícolas Marcondes Molina'}
              />
            </a>
          </li>
          <li>
            <a href="/about">
              <Button variant="secondary" label={'About'} />
            </a>
          </li>
          <li>
            <a href="/works">
              <Button variant="secondary" label={'Works'} />
            </a>
          </li>
          <li>
            <a href="/resume">
              <Button variant="secondary" label={'Resume'} />
            </a>
          </li>
        </S.ListContainer>
        <S.ContactMeContainer>
          <Button variant="primary" label={'Contact me'} />
        </S.ContactMeContainer>
      </S.ContentContainer>
    </S.Wrapper>
  )
}

export default Header
