import { createGlobalStyle } from 'styled-components'
import NormalizeStyles from './normalize'

const GlobalStyles = createGlobalStyle`
  ${NormalizeStyles}
  body {
    width: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
  }

  a {
    color: inherit;
    text-decoration: none;

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }

  img {
    max-width: 100%;
    position: relative;
    vertical-align: middle;
  }

  figure {
    margin: 2rem 0;
  }

  figcaption {
    font-size: 80%;
  }

  table {
    width: 100%;
    font-size: 85%;
    border-collapse: collapse;
  }
`

export default GlobalStyles
