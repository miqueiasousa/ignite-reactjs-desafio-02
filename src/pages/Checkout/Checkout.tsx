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

import { Item } from './components/Item/Item'
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
        <Stack spacing={3}>
          <S.Form>
            <S.FormHeader>
              <MapPinLine size={22} color="#C47F17" />
              <Stack spacing={0.5}>
                <S.FormTitle>Endereço de Entrega</S.FormTitle>
                <S.FormDescription>
                  Informe o endereço onde deseja receber seu pedido
                </S.FormDescription>
              </Stack>
            </S.FormHeader>
            <S.FormBody gridTemplateColumns="12.5rem_1fr_3.75rem">
              <S.FormItem gridColumns={1}>
                <S.Input id="cep" type="text" placeholder="CEP" />
              </S.FormItem>
              <S.FormItem gridColumns={3}>
                <S.Input id="rua" type="text" placeholder="Rua" />
              </S.FormItem>
              <S.FormItem gridColumns={1}>
                <S.Input id="numero" type="number" placeholder="Número" />
              </S.FormItem>
              <S.FormItem gridColumns={2}>
                <S.Input
                  id="complemento"
                  type="text"
                  placeholder="Complemento"
                />
              </S.FormItem>
              <S.FormItem gridColumns={1}>
                <S.Input id="bairro" type="text" placeholder="Bairro" />
              </S.FormItem>
              <S.FormItem gridColumns={1}>
                <S.Input id="cidade" type="text" placeholder="Cidade" />
              </S.FormItem>
              <S.FormItem gridColumns={1}>
                <S.Input id="uf" type="text" placeholder="UF" />
              </S.FormItem>
            </S.FormBody>
          </S.Form>
          <S.Form>
            <S.FormHeader>
              <CurrencyDollar size={22} color="#8047F8" />
              <Stack spacing={0.5}>
                <S.FormTitle>Pagamento</S.FormTitle>
                <S.FormDescription>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </S.FormDescription>
              </Stack>
            </S.FormHeader>
            <S.FormBody gridTemplateColumns="repeat(3, 1fr)">
              <div>
                <input
                  type="radio"
                  name="payment"
                  value="credit"
                  id="credit"
                  hidden
                />
                <S.LabelSelect htmlFor="credit">
                  <CreditCard size={16} />
                  <span>Cartão de crédito</span>
                </S.LabelSelect>
              </div>
              <div>
                <input
                  type="radio"
                  name="payment"
                  value="debit"
                  id="debit"
                  hidden
                />
                <S.LabelSelect htmlFor="debit">
                  <Bank size={16} />
                  <span>cartão de débito</span>
                </S.LabelSelect>
              </div>
              <div>
                <input
                  type="radio"
                  name="payment"
                  value="cash"
                  id="cash"
                  hidden
                />
                <S.LabelSelect htmlFor="cash">
                  <Money size={16} />
                  <span>dinheiro</span>
                </S.LabelSelect>
              </div>
            </S.FormBody>
          </S.Form>
        </Stack>
      </Stack>
      <Stack spacing={4}>
        <Title as="h2" variant="xs" color={theme.colors.base.subtitle}>
          Cafés selecionados
        </Title>
        <S.Summary>
          <S.ItemContainer>
            <li>
              <Item />
            </li>
            <li>
              <Item />
            </li>
          </S.ItemContainer>
          <S.OrderSummary>
            <div>
              <span>Total de itens</span>
              <span>R$ 29,70</span>
            </div>
            <div>
              <span>Entrega</span>
              <span>R$ 3,50</span>
            </div>
            <div>
              <span>Total</span>
              <span>R$ 33,20</span>
            </div>
          </S.OrderSummary>
          <S.ConfirmButton onClick={() => navigate('/checkout/success')}>
            Confirmar pedido
          </S.ConfirmButton>
        </S.Summary>
      </Stack>
    </S.CheckoutContainer>
  )
}
