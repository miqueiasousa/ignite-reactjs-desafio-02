import styled from 'styled-components'

export const FeedContainer = styled.div`
  margin-top: 32px;
  margin-bottom: 157px;
`

export const Title = styled.h2`
  font-family: 'Baloo 2', cursive;
  font-size: ${props => props.theme.fontSize['3xl']};
  color: ${props => props.theme.colors.base.subtitle};
  margin-bottom: 54px;
`

export const Feed = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 2rem;
  row-gap: 2.5rem;
`
