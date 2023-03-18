import { useNavigate } from 'react-router-dom'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money
} from 'phosphor-react'

import { CoffeSelected } from './components/CoffeSelected/CoffeSelected'

import {
  CheckoutContainer,
  Form,
  FormContainer,
  FormDescription,
  FormHeader,
  FormTitle,
  FormGroup,
  Input,
  Select,
  Title,
  SelectItem,
  CheckoutDetails,
  Divider,
  PriceInfo,
  ConfirmButton
} from './Checkout.styles'

export function Checkout() {
  const navigate = useNavigate()

  return (
    <CheckoutContainer>
      <div>
        <Title>Complete seu pedido</Title>
        <FormContainer>
          <Form>
            <FormHeader>
              <MapPinLine size={22} color="#C47F17" />
              <div>
                <FormTitle>Endereço de Entrega</FormTitle>
                <FormDescription>
                  Informe o endereço onde deseja receber seu pedido
                </FormDescription>
              </div>
            </FormHeader>
            <FormGroup>
              <Input id="cep" type="text" placeholder="CEP" />
              <Input id="rua" type="text" placeholder="Rua" />
              <Input id="numero" type="number" placeholder="Número" />
              <Input id="complemento" type="text" placeholder="Complemento" />
              <Input id="bairro" type="text" placeholder="Bairro" />
              <Input id="cidade" type="text" placeholder="Cidade" />
              <Input id="uf" type="text" placeholder="UF" />
            </FormGroup>
          </Form>
          <Form>
            <FormHeader>
              <CurrencyDollar size={22} color="#8047F8" />
              <div>
                <FormTitle>Pagamento</FormTitle>
                <FormDescription>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </FormDescription>
              </div>
            </FormHeader>
            <Select>
              <SelectItem>
                {/* <input type="radio" name="payment" value="credit" /> */}
                <CreditCard size={16} />
                <span>Cartão de crédito</span>
              </SelectItem>
              <SelectItem>
                {/* <input type="radio" name="payment" value="debit" /> */}
                <Bank size={16} />
                <span>cartão de débito</span>
              </SelectItem>
              <SelectItem>
                {/* <input type="radio" name="payment" value="cash" /> */}
                <Money size={16} />
                <span>dinheiro</span>
              </SelectItem>
            </Select>
          </Form>
        </FormContainer>
      </div>
      <div>
        <Title>Cafés selecionados</Title>
        <CheckoutDetails>
          <div>
            <CoffeSelected />
            <Divider />
            <CoffeSelected />
            <Divider />
          </div>
          <PriceInfo>
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
          </PriceInfo>
          <ConfirmButton onClick={() => navigate('/checkout/success')}>
            Confirmar pedido
          </ConfirmButton>
        </CheckoutDetails>
      </div>
    </CheckoutContainer>
  )
}
