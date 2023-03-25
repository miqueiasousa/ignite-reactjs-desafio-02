import { useTheme } from 'styled-components'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

import { Stack } from '../../components/Stack'
import { Title } from '../../components/Title'
import { Avatar } from '../../components/Avatar'
import bannerImage from '../../assets/banner.png'
import coffeeList from '../../data.json'

import { Card } from './components/Card/Card'
import * as S from './Home.styles'

export function Home() {
  const theme = useTheme()

  return (
    <main>
      <S.BannerContainer>
        <Stack spacing={20}>
          <Stack spacing={4}>
            <Title variant="xl">
              Encontre o café perfeito para qualquer hora do dia
            </Title>
            <S.Description>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </S.Description>
          </Stack>
          <S.HighlightContainer>
            <S.Highlight>
              <Avatar bgColor={theme.colors.yellow[900]}>
                <ShoppingCart size={16} weight="fill" />
              </Avatar>
              <span>Compra simples e segura</span>
            </S.Highlight>
            <S.Highlight>
              <Avatar bgColor={theme.colors.base.text}>
                <Package size={16} weight="fill" />
              </Avatar>
              <span>Embalagem mantém o café intacto</span>
            </S.Highlight>
            <S.Highlight>
              <Avatar bgColor={theme.colors.yellow[500]}>
                <Timer size={16} weight="fill" />
              </Avatar>
              <span>Entrega rápida e rastreada</span>
            </S.Highlight>
            <S.Highlight>
              <Avatar bgColor={theme.colors.purple[500]}>
                <Coffee size={16} weight="fill" />
              </Avatar>
              <span>O café chega fresquinho até você</span>
            </S.Highlight>
          </S.HighlightContainer>
        </Stack>
        <img src={bannerImage} />
      </S.BannerContainer>
      <S.FeedWrapper spacing={18}>
        <Title as="h2" variant="lg" color={theme.colors.base.subtitle}>
          Nossos cafés
        </Title>
        <S.Feed>
          {coffeeList.map(coffe => (
            <Card
              key={coffe.id}
              name={coffe.name}
              description={coffe.description}
              imageUrl={coffe.imageUrl}
              tags={coffe.tags}
              price={coffe.price}
            />
          ))}
        </S.Feed>
      </S.FeedWrapper>
    </main>
  )
}
