import styled from 'styled-components'

import { Stack } from '../../components/Stack'

export const BannerContainer = styled.div`
  display: flex;
  gap: 3.5rem;
  padding-top: 5.875rem;
  padding-bottom: 6.75rem;
`

export const Description = styled.p`
  font-size: ${props => props.theme.fontSize.xl};
  font-weight: 400;
  color: ${props => props.theme.colors.base.subtitle};
`

export const ItemContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  row-gap: 1.25rem;
  column-gap: 2.5rem;
`

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const FeedWrapper = styled(Stack)`
  padding-top: 2rem;
  padding-bottom: 9.875rem;
`

export const Feed = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 2rem;
  row-gap: 2.5rem;
`
