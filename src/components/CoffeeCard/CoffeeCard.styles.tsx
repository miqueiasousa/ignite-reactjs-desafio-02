import styled from 'styled-components'

export const CardContainer = styled.div`
  padding: 20px;
  background-color: ${props => props.theme.colors.base.card};
  border-radius: 6px 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

export const CardImage = styled.img`
  margin-top: -2.5rem;
  width: 7.5rem;
  height: 7.5rem;
  object-fit: cover;
`

export const CardTitle = styled.h3`
  font-family: 'Baloo 2', cursive;
  font-size: ${props => props.theme.fontSize.lg};
  color: ${props => props.theme.colors.base.subtitle};
  margin-bottom: 0.5rem;
`

export const CardDescription = styled.h4`
  font-size: ${props => props.theme.fontSize.sm};
  color: ${props => props.theme.colors.base.label};
  font-weight: 400;
`

export const CardFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
`

export const TagsContainer = styled.div`
  margin: 0.75rem 0 1rem 0;
  display: flex;
  gap: 0.25rem;
`

export const Tag = styled.span`
  background-color: ${props => props.theme.colors.yellow[100]};
  color: ${props => props.theme.colors.yellow[900]};
  font-size: ${props => props.theme.fontSize['2xs']};
  padding: 0.25rem 0.5rem;
  font-weight: 700;
  text-transform: uppercase;
  border-radius: 100px;
`

export const Price = styled.div`
  font-size: ${props => props.theme.fontSize.sm};

  span {
    font-family: 'Baloo 2', cursive;
    font-size: ${props => props.theme.fontSize['2xl']};
  }
`

export const ActionsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const BuyButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem;
  border-radius: 6px;
  border: none;
  background-color: ${props => props.theme.colors.purple[900]};
  color: ${props => props.theme.colors.white};
`
