import styled from 'styled-components'
import { colors } from 'styles/color'

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  max-height: 6%;
  background-color: ${colors.primary};
  color: ${colors.secondary_light};
  padding: 8px 0;
`

export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
