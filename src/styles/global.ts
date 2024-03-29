import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${props => props.theme.colors.purple[500]};
  }

  body {
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.base.text};
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: ${props => props.theme.fontSize.base};
    line-height: 1.3;
  }
`
