import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

import delivery from '../../assets/delivery.svg'

import {
  OrderInfo,
  SuccessContainer,
  SuccessSubtitle,
  SuccessTitle
} from './Success.styles'

export function Success() {
  return (
    <SuccessContainer>
      <div>
        <SuccessTitle>Uhu! Pedido confirmado</SuccessTitle>
        <SuccessSubtitle>
          Agora é só aguardar que logo o café chegará até você
        </SuccessSubtitle>
        <OrderInfo>
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
        </OrderInfo>
      </div>
      <img src={delivery} />
    </SuccessContainer>
  )
}
