import { Plus, Minus, ShoppingCart } from '@phosphor-icons/react'
import expresso from '../../../../assets/expresso.png'

import { CoffeeButtonContainer, CoffeeCart, CoffeeContainer, CoffeePlusMinus, CoffeeTypeContainer } from './styles'
import { useState } from 'react'

export interface CoffeeInfo {
  CoffeeImg: string;
  CoffeeType: string[];
  CoffeeName: string;
  CoffeeDescription: string;
  CoffeePrice: number;
}

export function CoffeeCard() {
  const [coffeeQtyScreen, setCoffeeQtyScreen] = useState<number>(5)

  function handleReduceCoffeeQtyScreen(coffeeQtyScreen: number) {
    if (coffeeQtyScreen == 1) setCoffeeQtyScreen(1);
    setCoffeeQtyScreen(coffeeQtyScreen-1) }

  return (
    <CoffeeContainer>
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
          <button type='button' onClick={handleReduceCoffeeQtyScreen}>
            <Minus />
          </button>
          <span>{coffeeQtyScreen}</span>
          <Plus />
        </CoffeePlusMinus>
        <CoffeeCart>
          <ShoppingCart size={22} weight='fill' color='white'/>
        </CoffeeCart>
      </CoffeeButtonContainer>
      
    </CoffeeContainer>
  )
}