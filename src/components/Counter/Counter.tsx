import { Minus, Plus } from 'phosphor-react'

import {
  CounterContainer,
  CounterMinusButton,
  CounterPlusButton,
  CounterTotal
} from './Counter.styles'

interface CounterProps {
  count: number
  onChange: (count: number) => void
}

export function Counter({ count, onChange }: CounterProps) {
  const handleIncrement = () => {
    onChange(count + 1)
  }

  const handleDecrement = () => {
    onChange(count - 1)
  }

  return (
    <CounterContainer>
      <CounterMinusButton onClick={handleDecrement}>
        <Minus size={14} weight="bold" />
      </CounterMinusButton>
      <CounterTotal>{count}</CounterTotal>
      <CounterPlusButton onClick={handleIncrement}>
        <Plus size={14} weight="bold" />
      </CounterPlusButton>
    </CounterContainer>
  )
}
