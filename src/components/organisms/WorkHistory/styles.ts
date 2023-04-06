import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  padding: 2rem 14rem;
  width: 100%;
  justify-content: space-between;
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 6rem;
`
export const HeadingContainer = styled.div`
  font-size: 4rem;
  font-weight: 400;
  margin-left: 1rem;
`

export const JobsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 100px);
  column-gap: 3rem;
  row-gap: 2rem;
`
