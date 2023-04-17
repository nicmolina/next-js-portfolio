import { createGlobalStyle } from 'styled-components'
import { colors } from './color'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    --main-font: Inter;
    color: ${colors.gray100};
  }
  html {
    font-size: 62.5%;
  }
  html, body, #__next {
    height: 100%;
  }
  body {
    font-family: Inter;
    font-size: 100%;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

export default GlobalStyles
