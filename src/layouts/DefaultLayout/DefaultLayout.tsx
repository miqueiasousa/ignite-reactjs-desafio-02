import { Outlet } from 'react-router-dom'

import { Header } from '../../components/Header/Header'

import { Container } from './DefaultLayout.styles'

export function DefaultLayout() {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  )
}
