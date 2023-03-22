import { useState } from 'react'
import { useTheme } from 'styled-components'
import { ShoppingCartSimple } from 'phosphor-react'

import { Counter } from '../../../../components/Counter/Counter'
import { Title } from '../../../../components/Title'

import * as S from './Card.styles'

interface Tag {
  id: number
  description: string
}

interface CardProps {
  name: string
  description: string
  imageUrl: string
  tags: Tag[]
  price: string
}

export function Card({ name, description, imageUrl, tags, price }: CardProps) {
  const [quantityCoffe, setQuantityCoffe] = useState(1)
  const theme = useTheme()

  return (
    <S.CardContainer>
      <S.CardHeader spacing={3}>
        <S.CardImage src={imageUrl} />
        <S.TagContainer>
          {tags.map(tag => (
            <S.Tag key={tag.id}>{tag.description}</S.Tag>
          ))}
        </S.TagContainer>
      </S.CardHeader>
      <S.CardBody spacing={2}>
        <Title as="h2" variant="xs" color={theme.colors.base.subtitle}>
          {name}
        </Title>
        <p>{description}</p>
      </S.CardBody>
      <S.CardFooter>
        <S.Price>
          R$ <strong>{price}</strong>
        </S.Price>
        <Counter
          count={quantityCoffe}
          onChange={quantity => setQuantityCoffe(quantity)}
        />
        <S.BuyButton>
          <ShoppingCartSimple size={22} weight="fill" />
        </S.BuyButton>
      </S.CardFooter>
    </S.CardContainer>
  )
}
