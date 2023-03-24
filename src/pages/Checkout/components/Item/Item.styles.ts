import styled from 'styled-components'

export const Item = styled.div`
  display: flex;
  gap: 1.25rem;
  padding: 0.5rem 0.25rem;
`

export const ItemImage = styled.img`
  width: 4rem;
  height: 4rem;
`

export const ItemDetails = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 0.5rem;
  justify-items: start;
`

export const ItemTitle = styled.h3`
  grid-column: span 2;
  font-size: ${props => props.theme.fontSize.base};
  font-weight: 400;
  color: ${props => props.theme.colors.base.subtitle};
`

export const RemoveButton = styled.button`
  display: flex;
  gap: 0.25rem;
  align-items: center;
  border: none;
  background-color: ${props => props.theme.colors.base.button};
  padding: 0.5rem;
  border-radius: 6px;
  color: ${props => props.theme.colors.base.text};
  font-size: ${props => props.theme.fontSize.xs};
  line-height: 1.6;
`
