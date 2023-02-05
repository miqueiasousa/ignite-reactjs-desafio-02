import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'

import cafeGelado from '../../assets/cafe-gelado.png'

import {
  ActionsContainer,
  BuyButton,
  CardContainer,
  CardDescription,
  CardFooter,
  CardImage,
  CardTitle,
  Counter,
  CounterMinusButton,
  CounterPlusButton,
  CounterTotal,
  Price,
  Tag,
  TagsContainer
} from './CoffeeCard.styles'

export function CoffeeCard() {
  return (
    <CardContainer>
      <CardImage src={cafeGelado} />
      <TagsContainer>
        <Tag>Tradicional</Tag>
        <Tag>Gelado</Tag>
      </TagsContainer>
      <CardTitle>Expresso Gelado</CardTitle>
      <CardDescription>
        Bebida preparada com café expresso e cubos de gelo
      </CardDescription>
      <CardFooter>
        <Price>
          R$ <span>9,90</span>
        </Price>
        <ActionsContainer>
          <Counter className="quantity">
            <CounterMinusButton>
              <Minus size={14} weight="bold" />
            </CounterMinusButton>
            <CounterTotal>1</CounterTotal>
            <CounterPlusButton>
              <Plus size={14} weight="bold" />
            </CounterPlusButton>
          </Counter>
          <BuyButton>
            <ShoppingCartSimple size={22} weight="fill" />
          </BuyButton>
        </ActionsContainer>
      </CardFooter>
    </CardContainer>
  )
}
