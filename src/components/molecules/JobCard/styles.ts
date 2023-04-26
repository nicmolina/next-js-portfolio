import styled from 'styled-components'
import { colors } from 'styles/color'

export const JobCardWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 6.4rem;
`

export const JobCardInfo = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 1.2rem;
  justify-content: center;

  h2 {
    font-size: 3.2rem;
  }

  p {
    font-size: 1.6rem;
    color: ${colors.gray500};
  }
`
