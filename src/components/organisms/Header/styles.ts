import styled from 'styled-components'
import { colors } from 'styles/color'

export const Wrapper = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  height: 6rem;
  background-color: transparent;
  color: ${colors.secondary_light};
  padding: 8px 16px;
  z-index: 2;
`

export const BarWrapper = styled.div`
  position: fixed;
  top: 6rem;
  left: 0;
  width: 0%;
  height: 5px;
  background-color: ${colors.gray400};
  z-index: 998;
`

export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const ContactMeContainer = styled.div`
  display: flex;
  width: 100px;
`

export const ListContainer = styled.ul`
  display: flex;
  list-style-type: none;
  gap: 8px;
  width: 100%;
`
