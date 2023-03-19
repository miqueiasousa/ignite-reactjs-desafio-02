import { useTheme } from 'styled-components'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

import { CoffeeCard } from '../../components/CoffeeCard/CoffeeCard'
import { Stack } from '../../components/Stack'
import { Title } from '../../components/Title'
import bannerImage from '../../assets/banner.png'

import {
  BannerContainer,
  IconContainer,
  Item,
  ItemContainer,
  Subtitle,
  Wrapper,
  Feed,
  FeedContainer
} from './Home.styles'

const coffeeList = [
  {
    id: 1,
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    imageUrl: `/src/assets/expresso.png`,
    tags: [{ id: 1, description: 'Tradicional' }],
    price: '9,90'
  },
  {
    id: 2,
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    imageUrl: `/src/assets/americano.png`,
    tags: [{ id: 1, description: 'Tradicional' }],
    price: '9,90'
  },
  {
    id: 3,
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    imageUrl: `/src/assets/expresso-cremoso.png`,
    tags: [{ id: 1, description: 'Tradicional' }],
    price: '9,90'
  },
  {
    id: 4,
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    imageUrl: `/src/assets/cafe-gelado.png`,
    tags: [
      { id: 1, description: 'Tradicional' },
      { id: 2, description: 'Gelado' }
    ],
    price: '9,90'
  },
  {
    id: 5,
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    imageUrl: `/src/assets/cafe-com-leite.png`,
    tags: [
      { id: 1, description: 'Tradicional' },
      { id: 2, description: 'Com leite' }
    ],
    price: '9,90'
  },
  {
    id: 6,
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    imageUrl: `/src/assets/latte.png`,
    tags: [
      { id: 1, description: 'Tradicional' },
      { id: 2, description: 'Com leite' }
    ],
    price: '9,90'
  },
  {
    id: 7,
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    imageUrl: `/src/assets/capuccino.png`,
    tags: [
      { id: 1, description: 'Tradicional' },
      { id: 2, description: 'Com leite' }
    ],
    price: '9,90'
  },
  {
    id: 8,
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    imageUrl: `/src/assets/macchiato.png`,
    tags: [
      { id: 1, description: 'Tradicional' },
      { id: 2, description: 'Com leite' }
    ],
    price: '9,90'
  },
  {
    id: 9,
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    imageUrl: `/src/assets/mochaccino.png`,
    tags: [
      { id: 1, description: 'Tradicional' },
      { id: 2, description: 'Com leite' }
    ],
    price: '9,90'
  },
  {
    id: 10,

    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    imageUrl: `/src/assets/chocolate-quente.png`,
    tags: [
      { id: 1, description: 'Especial' },
      { id: 2, description: 'Com leite' }
    ],
    price: '9,90'
  },
  {
    id: 11,

    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    imageUrl: `/src/assets/cubano.png`,
    tags: [
      { id: 1, description: 'Especial' },
      { id: 2, description: 'Alcoólico' },
      { id: 3, description: 'Gelado' }
    ],
    price: '9,90'
  },
  {
    id: 12,
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    imageUrl: `/src/assets/havaiano.png`,
    tags: [{ id: 1, description: 'Especial' }],
    price: '9,90'
  },
  {
    id: 13,
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    imageUrl: `/src/assets/arabe.png`,
    tags: [{ id: 1, description: 'Especial' }],
    price: '9,90'
  },
  {
    id: 14,
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    imageUrl: `/src/assets/irlandes.png`,
    tags: [
      { id: 1, description: 'Especial' },
      { id: 2, description: 'Alcoólico' }
    ],
    price: '9,90'
  }
]

export function Home() {
  const theme = useTheme()

  return (
    <main>
      <BannerContainer>
        <Wrapper>
          <Stack spacing={2}>
            <Title variant="xl">
              Encontre o café perfeito para qualquer hora do dia
            </Title>
            <Subtitle>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </Subtitle>
          </Stack>
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
      <FeedContainer spacing={18}>
        <Title as="h2" variant="lg" color={theme.colors.base.subtitle}>
          Nossos cafés
        </Title>
        <Feed>
          {coffeeList.map(coffe => (
            <CoffeeCard
              key={coffe.id}
              name={coffe.name}
              description={coffe.description}
              imageUrl={coffe.imageUrl}
              tags={coffe.tags}
              price={coffe.price}
            />
          ))}
        </Feed>
      </FeedContainer>
    </main>
  )
}
