import { useState } from 'react'
import { useTheme } from 'styled-components'
import { ShoppingCartSimple } from 'phosphor-react'

import { Counter } from '../Counter/Counter'
import { Stack } from '../Stack'
import { Title } from '../Title'

import * as S from './CoffeeCard.styles'

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
    <S.CardContainer>
      <S.CardImage src={imageUrl} />
      <S.TagsContainer>
        {tags.map(tag => (
          <S.Tag key={tag.id}>{tag.description}</S.Tag>
        ))}
      </S.TagsContainer>
      <Stack spacing={2}>
        <Title as="h3" variant="xs" color={theme.colors.base.subtitle}>
          {name}
        </Title>
        <S.CardDescription>{description}</S.CardDescription>
      </Stack>
      <S.CardFooter>
        <S.Price>
          R$ <span>{price}</span>
        </S.Price>
        <S.ActionsContainer>
          <Counter
            count={quantityCoffe}
            onChange={quantity => setQuantityCoffe(quantity)}
          />
          <S.BuyButton>
            <ShoppingCartSimple size={22} weight="fill" />
          </S.BuyButton>
        </S.ActionsContainer>
      </S.CardFooter>
    </S.CardContainer>
  )
}
