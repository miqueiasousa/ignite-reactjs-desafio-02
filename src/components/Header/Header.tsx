import { MapPin, ShoppingCart } from 'phosphor-react'

import coffeDeliveryLogo from '../../assets/coffee-delivery-logo.svg'

import { CartButton, HeaderContainer, LocationButton } from './Header.styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src={coffeDeliveryLogo} alt="Logotipo Coffe Delivery" />
      <div>
        <LocationButton type="button" className="location">
          <MapPin weight="fill" size={22} />
          <span>Porto Alegre, RS</span>
        </LocationButton>
        <CartButton to="/checkout">
          <ShoppingCart weight="fill" size={22} />
        </CartButton>
      </div>
    </HeaderContainer>
  )
}
