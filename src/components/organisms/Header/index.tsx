import { FC } from 'react'
import * as S from './styles'
import { CodeView } from 'styled-icons/remix-editor'
import { Button } from 'components/atoms'

const Header: FC = () => {
  return (
    <S.Wrapper>
      <S.ContentContainer>
        <ul></ul>
        <Button variant="primary" label={'About'} />
      </S.ContentContainer>
    </S.Wrapper>
  )
}

export default Header
