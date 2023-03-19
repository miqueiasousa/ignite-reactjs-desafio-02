import { useNavigate } from 'react-router-dom'
import { useTheme } from 'styled-components'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money
} from 'phosphor-react'

import { Title } from '../../components/Title'
import { Stack } from '../../components/Stack'

import { CoffeSelected } from './components/CoffeSelected/CoffeSelected'
import * as S from './Checkout.styles'

export function Checkout() {
  const navigate = useNavigate()
  const theme = useTheme()

  return (
    <S.CheckoutContainer>
      <Stack spacing={4}>
        <Title as="h2" variant="xs" color={theme.colors.base.subtitle}>
          Complete seu pedido
        </Title>
        <S.FormContainer>
          <S.Form>
            <S.FormHeader>
              <MapPinLine size={22} color="#C47F17" />
              <div>
                <S.FormTitle>Endereço de Entrega</S.FormTitle>
                <S.FormDescription>
                  Informe o endereço onde deseja receber seu pedido
                </S.FormDescription>
              </div>
            </S.FormHeader>
            <S.FormGroup>
              <S.Input id="cep" type="text" placeholder="CEP" />
              <S.Input id="rua" type="text" placeholder="Rua" />
              <S.Input id="numero" type="number" placeholder="Número" />
              <S.Input id="complemento" type="text" placeholder="Complemento" />
              <S.Input id="bairro" type="text" placeholder="Bairro" />
              <S.Input id="cidade" type="text" placeholder="Cidade" />
              <S.Input id="uf" type="text" placeholder="UF" />
            </S.FormGroup>
          </S.Form>
          <S.Form>
            <S.FormHeader>
              <CurrencyDollar size={22} color="#8047F8" />
              <div>
                <S.FormTitle>Pagamento</S.FormTitle>
                <S.FormDescription>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </S.FormDescription>
              </div>
            </S.FormHeader>
            <S.Select>
              <S.SelectItem>
                {/* <input type="radio" name="payment" value="credit" /> */}
                <CreditCard size={16} />
                <span>Cartão de crédito</span>
              </S.SelectItem>
              <S.SelectItem>
                {/* <input type="radio" name="payment" value="debit" /> */}
                <Bank size={16} />
                <span>cartão de débito</span>
              </S.SelectItem>
              <S.SelectItem>
                {/* <input type="radio" name="payment" value="cash" /> */}
                <Money size={16} />
                <span>dinheiro</span>
              </S.SelectItem>
            </S.Select>
          </S.Form>
        </S.FormContainer>
      </Stack>
      <Stack spacing={4}>
        <Title as="h2" variant="xs" color={theme.colors.base.subtitle}>
          Cafés selecionados
        </Title>
        <S.CheckoutDetails>
          <div>
            <CoffeSelected />
            <S.Divider />
            <CoffeSelected />
            <S.Divider />
          </div>
          <S.PriceInfo>
            <div className="price">
              <span>Total de itens</span>
              <span>R$ 29,70</span>
            </div>
            <div className="price">
              <span>Entrega</span>
              <span>R$ 3,50</span>
            </div>
            <div className="price">
              <span>Total</span>
              <span>R$ 33,20</span>
            </div>
          </S.PriceInfo>
          <S.ConfirmButton onClick={() => navigate('/checkout/success')}>
            Confirmar pedido
          </S.ConfirmButton>
        </S.CheckoutDetails>
      </Stack>
    </S.CheckoutContainer>
  )
}
