import styled from 'styled-components'
import { ITextLinkProps } from '.'
import { colors } from 'styles/color'

export const TextLinkWrapper = styled.div<ITextLinkProps>`
  color: ${colors.gray100};
`

export const TextLinkBar = styled.div`
  width: '20%';
  border: 1px solid ${colors.gray700};
  transition: 'width 0.5s';
`
