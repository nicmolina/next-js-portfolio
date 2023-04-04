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
  justify-content: center;
  height: 100%;
`

export const HeadingContainer = styled.h1`
  font-size: 7rem;
  text-align: center;
  color: ${colors.gray100};
  font-weight: bold;
  height: fit-content;
`
