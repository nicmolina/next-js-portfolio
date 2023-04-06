import styled from 'styled-components'
import { colors } from 'styles/color'

export const Wrapper = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  height: 6rem;
  background-color: 'transparent';
  color: ${colors.secondary_light};
  padding: 8px 16px;
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
