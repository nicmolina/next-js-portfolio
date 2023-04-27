import styled from 'styled-components'
import { colors } from 'styles/color'
import { motion } from 'framer-motion'

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  background-color: ${colors.primary_dark};
`

export const ContentContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  margin: 20rem auto;
  gap: 14rem;
  max-width: 134.5rem;
  justify-content: center;
`

export const HeadingContainer = styled.h1`
  font-size: 6rem;
  display: flex;
  text-align: left;
  color: ${colors.gray100};
  font-weight: 600;
  height: fit-content;
`

export const InfoContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 6.4rem;

  p {
    font-size: 2.2rem;
    color: ${colors.gray500};
    max-width: 75%;
  }
`
