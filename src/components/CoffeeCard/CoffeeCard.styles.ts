import styled from 'styled-components'

import { Stack } from '../Stack'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
  background-color: ${props => props.theme.colors.base.card};
  padding: 1.25rem;
  border-radius: 6px 36px;
`

export const CardImage = styled.img`
  width: 7.5rem;
  height: 7.5rem;
  object-fit: cover;
  margin-top: calc(0rem - 1.25rem - 1.25rem);
`

export const CardHeader = styled(Stack)`
  align-items: center;
`

export const CardBody = styled(Stack)`
  margin-top: 1rem;
  margin-bottom: 2rem;
  text-align: center;

  p {
    font-size: ${props => props.theme.fontSize.sm};
    color: ${props => props.theme.colors.base.label};
    font-weight: 400;
  }
`

export const CardFooter = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto auto;
  column-gap: 0.5rem;
  align-items: center;

  > :nth-child(1) {
    grid-column: 1 / 2;
  }

  > :nth-child(2) {
    grid-column: 3 / 4;
  }

  > :nth-child(3) {
    grid-column: 4 / 5;
  }
`

export const TagContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.25rem;
  flex-wrap: wrap;
`

export const Tag = styled.span`
  background-color: ${props => props.theme.colors.yellow[100]};
  color: ${props => props.theme.colors.yellow[900]};
  font-size: ${props => props.theme.fontSize['2xs']};
  font-weight: 700;
  padding: 0.25rem 0.5rem;
  text-transform: uppercase;
  border-radius: 100px;
`

export const Price = styled.span`
  font-size: ${props => props.theme.fontSize.sm};

  strong {
    font-family: 'Baloo 2', cursive;
    font-size: ${props => props.theme.fontSize['2xl']};
  }
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
