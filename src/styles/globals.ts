import { createGlobalStyle } from 'styled-components'
import NormalizeStyles from './normalize'

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Open+Sans:wght@400;600&display=swap');
  ${NormalizeStyles}
  body {
    font-family: 'Bebas Neue', sans-serif;
    font-family: 'Open Sans', sans-serif;
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
