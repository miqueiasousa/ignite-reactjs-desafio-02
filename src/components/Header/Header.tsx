import { MapPin, ShoppingCart } from 'phosphor-react'

import coffeDeliveryLogo from '../../assets/coffee-delivery-logo.svg'

import * as S from './Header.styles'

export function Header() {
  return (
    <S.HeaderContainer>
      <img src={coffeDeliveryLogo} alt="Logotipo Coffe Delivery" />
      <div>
        <S.LocationButton type="button" className="location">
          <MapPin weight="fill" size={22} />
          <span>Porto Alegre, RS</span>
        </S.LocationButton>
        <S.CartButton to="/checkout">
          <ShoppingCart weight="fill" size={22} />
        </S.CartButton>
      </div>
    </S.HeaderContainer>
  )
}
