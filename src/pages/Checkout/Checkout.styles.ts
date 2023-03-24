import styled from 'styled-components'

export const CheckoutContainer = styled.main`
  display: grid;
  grid-template-columns: 1fr 28rem;
  gap: 2rem;
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const Form = styled.form`
  background-color: ${props => props.theme.colors.base.card};
  border-radius: 6px;
  padding: 2.5rem;
`

export const FormHeader = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;
`

export const FormTitle = styled.h3`
  font-size: ${props => props.theme.fontSize.base};
  font-weight: 400;
  color: ${props => props.theme.colors.base.subtitle};
`

export const FormDescription = styled.span`
  font-size: ${props => props.theme.fontSize.sm};
  color: ${props => props.theme.colors.base.text};
`

export const FormGroup = styled.div`
  display: grid;
  grid-template-columns: 12.5rem 1fr 3.75rem;
  column-gap: 0.75rem;
  row-gap: 1rem;

  #cep {
    grid-column: 1 / 2;
  }

  #rua {
    grid-column: 1 / span 3;
  }

  #numero {
    grid-column: 1 / 2;
  }

  #complemento {
    grid-column: 2 / span 2;
  }

  #bairro {
    grid-column: 1 / 2;
  }

  #cidade {
    grid-column: 2 / 3;
  }

  #uf {
    grid-column: 3 / 4;
  }
`

export const Input = styled.input`
  background-color: ${props => props.theme.colors.base.input};
  border: 1px solid ${props => props.theme.colors.base.button};
  padding: 0.75rem;
  border-radius: 4px;

  &::placeholder {
    color: ${props => props.theme.colors.base.label};
  }

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${props => props.theme.colors.yellow[900]};
  }
`

export const Select = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
`

export const SelectItem = styled.label`
  display: flex;
  gap: 0.75rem;
  padding: 1rem;
  text-transform: uppercase;
  font-size: ${props => props.theme.fontSize.xs};
  color: ${props => props.theme.colors.base.text};
  background-color: ${props => props.theme.colors.base.button};
  border-radius: 6px;
  line-height: 1.6;

  & svg {
    color: ${props => props.theme.colors.purple[500]};
  }

  input:is(:checked) ~ & {
    background-color: ${props => props.theme.colors.purple[100]};
    outline: 2px solid ${props => props.theme.colors.purple[500]};
  }
`

export const CheckoutDetails = styled.div`
  background-color: ${props => props.theme.colors.base.card};
  border-radius: 6px 44px;
  padding: 2.5rem;
`

export const Divider = styled.span`
  display: flex;
  height: 1px;
  background-color: ${props => props.theme.colors.base.button};
  margin-block: 1.5rem;
`

export const PriceInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1.5rem;

  .price {
    display: flex;
    justify-content: space-between;
    font-size: ${props => props.theme.fontSize.sm};
  }

  .price:last-child {
    font-size: ${props => props.theme.fontSize.xl};
    font-weight: 700;
  }
`

export const ConfirmButton = styled.button`
  width: 100%;
  border: none;
  background-color: ${props => props.theme.colors.yellow[500]};
  padding-block: 0.75rem;
  display: flex;
  justify-content: center;
  border-radius: 6px;
  text-transform: uppercase;
  font-weight: 700;
  color: ${props => props.theme.colors.white};
`
