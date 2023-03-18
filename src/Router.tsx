import { Route, Routes } from 'react-router-dom'

import { DefaultLayout } from './layouts/DefaultLayout/DefaultLayout'
import { Checkout } from './pages/Checkout/Checkout'
import { Home } from './pages/Home/Home'
import { Success } from './pages/Success/Success'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/checkout/success" element={<Success />} />
      </Route>
    </Routes>
  )
}
