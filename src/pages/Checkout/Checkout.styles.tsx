import styled from 'styled-components'

export const CheckoutContainer = styled.main`
  display: grid;
  grid-template-columns: 1fr 28rem;
  gap: 2rem;
`

export const Title = styled.h2`
  font-size: ${props => props.theme.fontSize.lg};
  line-height: 1.3;
  color: ${props => props.theme.colors.base.subtitle};
  margin-bottom: 1rem;
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
  display: flex;
  gap: 0.75rem;
`

export const SelectItem = styled.div`
  flex: 1;
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
`
