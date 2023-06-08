import { Plus, Minus, ShoppingCart } from '@phosphor-icons/react'
import expresso from '../../../../assets/expresso.png'

import { ButtonContainer } from './styles'

export function CoffeeCard() {
  return (
    <div>
      <img src={expresso} alt="expresso" />
      <p>TRADICIONAL</p>
      <p>Expresso Tradicional</p>
      <p>O tradicional café feito com água quente e grãos moídos</p>
      <span>R$</span><span>9,90</span>

      <ButtonContainer>
        <Plus />
        <span>1</span>
        <Minus />
      </ButtonContainer>




    </div>
  )
}