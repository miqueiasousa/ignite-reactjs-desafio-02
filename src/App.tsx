import { ThemeProvider } from 'styled-components'

import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>Hello world!</h1>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App