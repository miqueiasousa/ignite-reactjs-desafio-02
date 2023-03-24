import { useState } from 'react'
import { Trash } from 'phosphor-react'

import { Counter } from '../../../../components/Counter/Counter'

import * as S from './Item.styles'

export function Item() {
  const [quantityCoffe, setQuantityCoffe] = useState(1)

  return (
    <S.Item>
      <S.ItemImage src="/src/assets/expresso.png" />
      <S.ItemDetails>
        <S.ItemTitle>Expresso Tradicional</S.ItemTitle>
        <strong>R$ 9,90</strong>
        <Counter
          count={quantityCoffe}
          onChange={quantity => setQuantityCoffe(quantity)}
        />
        <S.RemoveButton>
          <Trash size={16} color="#8047F8" />
          <span>REMOVER</span>
        </S.RemoveButton>
      </S.ItemDetails>
    </S.Item>
  )
}
