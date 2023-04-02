import styled from 'styled-components'
import { IButtonProps } from './interfaces'

export const Button = styled.button<IButtonProps>`
  display: flex;
  width: 100%;
  height: 100;
  background-color: ${(props) => props.variant === 'primary'? }
`
