import { useState } from 'react'
import { useTheme } from 'styled-components'
import { ShoppingCartSimple } from 'phosphor-react'

import { Counter } from '../Counter/Counter'
import { Stack } from '../Stack'
import { Title } from '../Title'

import {
  ActionsContainer,
  BuyButton,
  CardContainer,
  CardDescription,
  CardFooter,
  CardImage,
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
  const theme = useTheme()

  return (
    <CardContainer>
      <CardImage src={imageUrl} />
      <TagsContainer>
        {tags.map(tag => (
          <Tag key={tag.id}>{tag.description}</Tag>
        ))}
      </TagsContainer>
      <Stack spacing={2}>
        <Title as="h3" variant="xs" color={theme.colors.base.subtitle}>
          {name}
        </Title>
        <CardDescription>{description}</CardDescription>
      </Stack>
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
