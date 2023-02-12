import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

import bannerImage from '../../../../assets/banner.png'

import {
  BannerContainer,
  IconContainer,
  Item,
  ItemContainer,
  Subtitle,
  Title,
  Wrapper
} from './Banner.styles'

export function Banner() {
  return (
    <BannerContainer>
      <Wrapper>
        <div>
          <Title>Encontre o café perfeito para qualquer hora do dia</Title>
          <Subtitle>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </Subtitle>
        </div>
        <ItemContainer>
          <Item>
            <IconContainer className="cart">
              <ShoppingCart size={16} weight="fill" />
            </IconContainer>
            <span>Compra simples e segura</span>
          </Item>
          <Item>
            <IconContainer className="package">
              <Package size={16} weight="fill" />
            </IconContainer>
            <span>Embalagem mantém o café intacto</span>
          </Item>
          <Item>
            <IconContainer className="timer">
              <Timer size={16} weight="fill" />
            </IconContainer>
            <span>Entrega rápida e rastreada</span>
          </Item>
          <Item>
            <IconContainer className="coffee">
              <Coffee size={16} weight="fill" />
            </IconContainer>
            <span>O café chega fresquinho até você</span>
          </Item>
        </ItemContainer>
      </Wrapper>
      <img src={bannerImage} />
    </BannerContainer>
  )
}
