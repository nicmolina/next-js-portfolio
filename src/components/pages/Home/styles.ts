import styled from 'styled-components'
import { colors } from 'styles/color'

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  background-color: ${colors.primary_dark};
  padding-bottom: 6rem;
  gap: 12rem;
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 24rem auto;
  justify-content: center;
  height: 100%;
`

export const HeadingContainer = styled.h1`
  font-size: 6rem;
  text-align: center;
  color: ${colors.gray100};
  font-weight: 300;
  height: fit-content;
`
