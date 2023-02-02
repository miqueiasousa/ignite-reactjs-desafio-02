import { ThemeProvider } from 'styled-components'

import { Header } from './components/Header/Header'
import { defaultTheme } from './styles/themes/default'

import { Container } from './App.styles'
import { GlobalStyle } from './styles/global'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container>
        <Header />
      </Container>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
