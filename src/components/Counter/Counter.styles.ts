import styled from 'styled-components'

export const CounterContainer = styled.div`
  display: flex;
`

export const CounterTotal = styled.span`
  display: flex;
  align-items: center;
  padding: 0.25rem;
  background-color: ${props => props.theme.colors.base.button};
  color: ${props => props.theme.colors.base.title};
`

export const CounterBaseButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background-color: ${props => props.theme.colors.base.button};
  color: ${props => props.theme.colors.purple[500]};
  z-index: 100;
  padding-block: 0.75rem;
`

export const CounterMinusButton = styled(CounterBaseButton)`
  padding-left: 0.5rem;
  padding-right: 0.25rem;
  border-radius: 6px 0 0 6px;
`

export const CounterPlusButton = styled(CounterBaseButton)`
  padding-left: 0.25rem;
  padding-right: 0.5rem;
  border-radius: 0 6px 6px 0;
`
