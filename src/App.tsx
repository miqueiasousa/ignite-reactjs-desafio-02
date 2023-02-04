import { ThemeProvider } from 'styled-components'

import { Banner } from './components/Banner/Banner'
import { Header } from './components/Header/Header'
import { defaultTheme } from './styles/themes/default'

import { Container } from './App.styles'
import { GlobalStyle } from './styles/global'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container>
        <Header />
        <main>
          <Banner />
        </main>
      </Container>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
