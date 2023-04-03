import styled from 'styled-components'
import { IButtonProps } from './interfaces'
import { colors } from 'styles/color'

export const Button = styled.button<IButtonProps>`
  &:hover {
    color: ${colors.primary_dark};
    background-color: ${colors.gray100};
  }
  font-weight: ${({ variant }) => (variant === 'secondary' ? '600' : '400')}
  display: flex;
  width: 100%;
  height: 100%;
  padding: 6px;
  cursor: pointer;
  transition: 0.2s ease-in;
  border-radius: 8px;
  /* background-color: ${(props) =>
    props.variant === 'primary' ? colors.primary_dark : 'inherit'}; */
  color: ${(props) =>
    props.variant === 'primary' ? colors.gray100 : colors.primary_dark};
  ${(props) =>
    props.variant === 'primary'
      ? `border: 2px ${colors.gray100} solid; background-color: ${colors.primary_dark}`
      : ''}
`
