import styled from 'styled-components'
import { colors } from 'styles/color'

export const JobCardWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 6.4rem;

  img {
    transition: 0.2s ease-in-out;
    &:hover {
      transform: scale(1.05);
    }
  }
`

export const JobCardInfo = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 1.2rem;
  justify-content: center;

  h3 {
    font-size: 3.2rem;
  }

  p {
    display: flex;
    gap: 0.4rem;
    font-size: 1.6rem;
    color: ${colors.gray500};
  }
`
