import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing:0;
    outline:0
  }

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    -webkit-font-smoothing: antialiased;
    font: 400 16px Quicksand, sans-serif;
  }

  h1, h2, h3, h4, h5, h6, strong {
    color: 'black';
    font: 700 Quicksand, sans-serif
  }

  button {
    cursor: pointer;
  }

  border-style, input, button {
    font: 500 Quicksand, sans-serif
  }

`

export default GlobalStyles
