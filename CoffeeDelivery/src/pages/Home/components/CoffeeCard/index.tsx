import { Plus, Minus, ShoppingCart } from '@phosphor-icons/react'
import expresso from '../../../../assets/expresso.png'

import { CoffeeButtonContainer, CoffeeCart, CoffeeCountainer, CoffeePlusMinus, CoffeeTypeContainer } from './styles'

export function CoffeeCard() {
  return (
    <CoffeeCountainer>
      <img src={expresso} alt="expresso" />
      <CoffeeTypeContainer>
        <span className='CoffeeType'>TRADICIONAL</span>
        <span className='CoffeeType'>ESPECIAL</span>
        <span className='CoffeeType'>GELADO</span>
      </CoffeeTypeContainer>
      <p className='CoffeeName'>Expresso Tradicional</p>
      <p className='CoffeeDescription'>O tradicional café feito com água quente e grãos moídos</p>

      <CoffeeButtonContainer>
        <span>R$</span><span className='CoffeePrice'>9,90</span>
        <CoffeePlusMinus>
          <Minus />
          <span>1</span>
          <Plus />
        </CoffeePlusMinus>
        <CoffeeCart>
          <ShoppingCart size={22} weight='fill' color='white'/>
        </CoffeeCart>
      </CoffeeButtonContainer>
      
    </CoffeeCountainer>
  )
}