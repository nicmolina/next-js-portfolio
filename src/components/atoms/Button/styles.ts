import styled from 'styled-components'
import { IButtonProps } from './interfaces'
import { colors } from 'styles/color'

export const Button = styled.button<IButtonProps>`
  &:hover {
    color: ${colors.primary_dark};
    background-color: ${colors.gray100};
    transform: scale(1.05);
  }
  font-weight: ${({ variant }) => (variant === 'secondary' ? '600' : '400')};
  font-family: var(--main-font);
  display: flex;
  height: 100%;
  align-items: center;
  padding: 6px;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  border-radius: 8px;
  color: ${colors.gray100};
  ${(props) =>
    props.variant === 'primary'
      ? `border: 2px ${colors.gray100} solid; background-color: ${colors.primary_dark}`
      : `border: none; background-color: inherit`}
`
