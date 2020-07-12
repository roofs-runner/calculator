import { createGlobalStyle } from 'styled-components'
import fonts from '../style/fonts'

export const GlobalStyle = createGlobalStyle`  
  * {
   box-sizing: border-box;
  }
  
  html {
    ${fonts};
    font-size: 10px;
  }
  
  body {
    ${fonts};
    margin: 0;
    padding: 0;

    width: 100vw;
    min-height: 100vh;

    #root {
      min-height: 100vh;
    }
    &.prevent-body-scroll {
      position: fixed;
      overflow-y: hidden;
    }
  }
`
