import { useTheme } from 'styled-components'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

import { Stack } from '../../components/Stack'
import { Title } from '../../components/Title'
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
        <S.OrderInfo>
          <div className="item">
            <span className="local">
              <MapPin size={16} weight="fill" />
            </span>
            <div>
              <span>Entrega em Rua João Daniel Martinelli, 102</span>
              <span>Farrapos - Porto Alegre, RS</span>
            </div>
          </div>
          <div className="item">
            <span className="time">
              <Timer size={16} weight="fill" />
            </span>
            <div>
              <span>Previsão de entrega</span>
              <span>20 min - 30 min</span>
            </div>
          </div>
          <div className="item">
            <span className="payment">
              <CurrencyDollar size={16} />
            </span>
            <div>
              <span>Pagamento na entrega</span>
              <span>Cartão de Crédito</span>
            </div>
          </div>
        </S.OrderInfo>
      </Stack>
      <img src={delivery} />
    </S.SuccessContainer>
  )
}
