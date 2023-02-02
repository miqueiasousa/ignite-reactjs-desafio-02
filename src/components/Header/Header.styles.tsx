import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 2rem 0;

  div {
    display: flex;
    gap: 12px;
  }
`

export const BaseButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem;
  border-radius: 6px;
  border: none;
  font-size: ${props => props.theme.fontSize.sm};
  line-height: 1.3;
`

export const LocationButton = styled(BaseButton)`
  background-color: ${props => props.theme.colors.purple[100]};
  color: ${props => props.theme.colors.purple[900]};
`

export const CartButton = styled(BaseButton)`
  background-color: ${props => props.theme.colors.yellow[100]};
  color: ${props => props.theme.colors.yellow[900]};
`
