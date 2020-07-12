import { css } from 'styled-components'
import { Weights } from '../types'

export const weight: Weights = {
  light: 300,
  regular: 400,
  semibold: 600,
  bold: 700,
}

export default css`
  & {
    -webkit-font-smoothing: antialiased;
    font-variant-ligatures: no-common-ligatures;
    -moz-osx-font-smoothing: grayscale;

    letter-spacing: 0;
    line-height: 1.9375em;

    font-family: 'Open Sans', 'Roboto+Condensed', -apple-system, BlinkMacSystemFont,
      'Helvetica Neue', Arial, sans-serif;
    font-weight: ${weight.regular};
    font-size: 10px;
  }
`
