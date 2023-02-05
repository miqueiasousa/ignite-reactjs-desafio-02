import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'

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

interface Tag {
  id: number
  description: string
}

interface CoffeeCardProps {
  name: string
  description: string
  imageUrl: string
  tags: Tag[]
  price: string
}

export function CoffeeCard({
  name,
  description,
  imageUrl,
  tags,
  price
}: CoffeeCardProps) {
  return (
    <CardContainer>
      <CardImage src={imageUrl} />
      <TagsContainer>
        {tags.map(tag => (
          <Tag key={tag.id}>{tag.description}</Tag>
        ))}
      </TagsContainer>
      <CardTitle>{name}</CardTitle>
      <CardDescription>{description}</CardDescription>
      <CardFooter>
        <Price>
          R$ <span>{price}</span>
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
