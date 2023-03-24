import styled from 'styled-components'

interface FormBodyProps {
  gridTemplateColumns: string
}

interface FormItemProps {
  gridColumns: number
}

export const CheckoutContainer = styled.main`
  display: grid;
  grid-template-columns: 1fr 28rem;
  gap: 2rem;
  padding-block: 2.5rem;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: ${props => props.theme.colors.base.card};
  border-radius: 6px;
  padding: 2.5rem;
`

export const FormHeader = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const FormTitle = styled.h4`
  font-size: ${props => props.theme.fontSize.base};
  font-weight: 400;
  color: ${props => props.theme.colors.base.subtitle};
`

export const FormDescription = styled.p`
  font-size: ${props => props.theme.fontSize.sm};
  color: ${props => props.theme.colors.base.text};
`

export const FormBody = styled.div<FormBodyProps>`
  display: grid;
  grid-template-columns: ${props =>
    props.gridTemplateColumns.replaceAll('_', ' ')};
  column-gap: 0.75rem;
  row-gap: 1rem;
`

export const FormItem = styled.div<FormItemProps>`
  grid-column: span ${props => props.gridColumns};
`

export const Input = styled.input`
  background-color: ${props => props.theme.colors.base.input};
  border: 1px solid ${props => props.theme.colors.base.button};
  padding: 0.75rem;
  border-radius: 4px;
  width: 100%;
  font-size: ${props => props.theme.fontSize.sm};

  &::placeholder {
    color: ${props => props.theme.colors.base.label};
  }

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${props => props.theme.colors.yellow[900]};
  }
`

export const LabelSelect = styled.label`
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

export const Summary = styled.div`
  background-color: ${props => props.theme.colors.base.card};
  border-radius: 6px 44px;
  padding: 2.5rem;
`

export const ItemContainer = styled.ul`
  list-style: none;

  li::after {
    content: '';
    display: block;
    height: 1px;
    width: 100%;
    background-color: ${props => props.theme.colors.base.button};
    margin-block: 1.5rem;
  }
`

export const OrderSummary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1.5rem;

  div {
    display: flex;
    justify-content: space-between;
    font-size: ${props => props.theme.fontSize.sm};

    :last-child {
      font-size: ${props => props.theme.fontSize.xl};
      font-weight: 700;
    }
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
