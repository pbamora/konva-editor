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
    font-family: 'Quicksand', serif;
    font-size: 16px;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    color: 'black';
    font-family: 'Quicksand', serif;
    font-size: 16px;
    font-weight: 700;
  }


  border-style, input, button {
    font-family: Quicksand;
    font-size: 14px;
    font-weight: 600;
  }

`

export default GlobalStyles
