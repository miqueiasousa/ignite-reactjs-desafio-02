import { Minus, Plus } from 'phosphor-react'

import * as S from './Counter.styles'

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
    <S.CounterContainer>
      <S.CounterMinusButton onClick={handleDecrement}>
        <Minus size={14} weight="bold" />
      </S.CounterMinusButton>
      <S.CounterTotal>{count}</S.CounterTotal>
      <S.CounterPlusButton onClick={handleIncrement}>
        <Plus size={14} weight="bold" />
      </S.CounterPlusButton>
    </S.CounterContainer>
  )
}
