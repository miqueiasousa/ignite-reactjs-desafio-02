import styled from 'styled-components'

import { Stack } from '../../components/Stack'

export const BannerContainer = styled.div`
  display: flex;
  gap: 3.5rem;
  margin: 5.75rem 0;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 66px;
`

export const Subtitle = styled.h2`
  font-size: ${props => props.theme.fontSize.xl};
  font-weight: 400;
  color: ${props => props.theme.colors.base.subtitle};
`

export const ItemContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 20px;
`

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

export const IconContainer = styled.div`
  display: inline-flex;
  padding: 0.5rem;
  color: ${props => props.theme.colors.white};
  border-radius: 9999px;

  &.cart {
    background-color: ${props => props.theme.colors.yellow[900]};
  }

  &.package {
    background-color: ${props => props.theme.colors.base.text};
  }

  &.timer {
    background-color: ${props => props.theme.colors.yellow[500]};
  }

  &.coffee {
    background-color: ${props => props.theme.colors.purple[500]};
  }
`

export const FeedContainer = styled(Stack)`
  margin-top: 110px;
  margin-bottom: 157px;
`

export const Feed = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 2rem;
  row-gap: 2.5rem;
`
