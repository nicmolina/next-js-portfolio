import styled from 'styled-components'
import { colors } from 'styles/color'

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  background-color: ${colors.primary_dark};
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0rem auto;
  max-width: 134.5rem;
  justify-content: center;
  height: 100%;
`

export const HeadingContainer = styled.h1`
  font-size: 6rem;
  display: flex;
  align-items: center;
  margin-bottom: 20rem;
  text-align: center;
  color: ${colors.gray100};
  font-weight: 300;
  height: fit-content;
`
