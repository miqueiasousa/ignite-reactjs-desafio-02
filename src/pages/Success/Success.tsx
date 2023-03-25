import { useTheme } from 'styled-components'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

import { Stack } from '../../components/Stack'
import { Title } from '../../components/Title'
import { Avatar } from '../../components/Avatar'
import delivery from '../../assets/delivery.svg'

import * as S from './Success.styles'

export function Success() {
  const theme = useTheme()

  return (
    <S.SuccessContainer>
      <Stack spacing={14}>
        <Stack spacing={1}>
          <Title variant="lg" color={theme.colors.yellow[900]}>
            Uhu! Pedido confirmado
          </Title>
          <S.SuccessSubtitle>
            Agora é só aguardar que logo o café chegará até você
          </S.SuccessSubtitle>
        </Stack>
        <S.OrderDetail>
          <S.Detail>
            <Avatar bgColor={theme.colors.purple[500]}>
              <MapPin size={16} weight="fill" />
            </Avatar>
            <Stack spacing={0}>
              <span>
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
              </span>
              <span>Farrapos - Porto Alegre, RS</span>
            </Stack>
          </S.Detail>
          <S.Detail>
            <Avatar bgColor={theme.colors.yellow[500]}>
              <Timer size={16} weight="fill" />
            </Avatar>
            <Stack spacing={0}>
              <span>Previsão de entrega</span>
              <strong>20 min - 30 min</strong>
            </Stack>
          </S.Detail>
          <S.Detail>
            <Avatar bgColor={theme.colors.yellow[900]}>
              <CurrencyDollar size={16} />
            </Avatar>
            <Stack spacing={0}>
              <span>Pagamento na entrega</span>
              <strong>Cartão de Crédito</strong>
            </Stack>
          </S.Detail>
        </S.OrderDetail>
      </Stack>
      <img src={delivery} />
    </S.SuccessContainer>
  )
}
