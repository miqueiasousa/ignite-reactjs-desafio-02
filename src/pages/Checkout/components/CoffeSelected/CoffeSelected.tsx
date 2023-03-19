import { useState } from 'react'
import { Trash } from 'phosphor-react'

import { Counter } from '../../../../components/Counter/Counter'

import * as S from './CoffeSelected.styles'

export function CoffeSelected() {
  const [quantityCoffe, setQuantityCoffe] = useState(1)

  return (
    <S.Item>
      <img src="/src/assets/expresso.png" />
      <div className="details">
        <div className="title">
          <span>Expresso Tradicional</span>
          <strong>R$ 9,90</strong>
        </div>
        <div className="actions">
          <Counter
            count={quantityCoffe}
            onChange={quantity => setQuantityCoffe(quantity)}
          />
          <button className="remove">
            <Trash size={16} color="#8047F8" />
            <span>REMOVER</span>
          </button>
        </div>
      </div>
    </S.Item>
  )
}
