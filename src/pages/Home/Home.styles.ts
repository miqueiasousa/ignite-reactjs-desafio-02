import styled from 'styled-components'

import { Stack } from '../../components/Stack'

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
