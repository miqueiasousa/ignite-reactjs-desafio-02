import { ShoppingCartSimple } from 'phosphor-react'
import { useState } from 'react'

import { Counter } from '../Counter/Counter'

import {
  ActionsContainer,
  BuyButton,
  CardContainer,
  CardDescription,
  CardFooter,
  CardImage,
  CardTitle,
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
  const [quantityCoffe, setQuantityCoffe] = useState(1)

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
          <Counter
            count={quantityCoffe}
            onChange={quantity => setQuantityCoffe(quantity)}
          />
          <BuyButton>
            <ShoppingCartSimple size={22} weight="fill" />
          </BuyButton>
        </ActionsContainer>
      </CardFooter>
    </CardContainer>
  )
}
