import { Plus, Minus, ShoppingCart } from '@phosphor-icons/react'
import expresso from '../../../../assets/expresso.png'

import { CoffeeButtonContainer, CoffeeCart, CoffeeContainer, CoffeePlusMinus, CoffeeTypeContainer } from './styles'
import { useState } from 'react'
import { CoffeeTypesExpresso } from './coffeetypes'

export interface CoffeeInfo {
  CoffeeImg: string;
  CoffeeType: string[];
  CoffeeName: string;
  CoffeeDescription: string;
  CoffeePrice: number;
}

export function CoffeeCard() {
  const [coffeeQtyScreen, setCoffeeQtyScreen] = useState<number>(1)

  function handleReduceCoffeeQtyScreen() {
    if (coffeeQtyScreen == 1) {
      setCoffeeQtyScreen((state) => {return state})
    } else {
      setCoffeeQtyScreen((state) => {return state-1})
    } 
  }

  function handleAddCoffeeQtyScreen() {
    if (coffeeQtyScreen == 9) {
      setCoffeeQtyScreen((state) => {return state})
    } else {
      setCoffeeQtyScreen((state) => {return state+1})
    } 
  }

  return (
    <CoffeeContainer>
      <img src={expresso} alt="expresso" />
      <CoffeeTypeContainer>
        <span className='CoffeeType'>{CoffeeTypesExpresso.TYPE1}</span>
        <span className='CoffeeType'>{CoffeeTypesExpresso.TYPE2}</span>
      </CoffeeTypeContainer>
      <p className='CoffeeName'>{CoffeeTypesExpresso.NAME}</p>
      <p className='CoffeeDescription'>{CoffeeTypesExpresso.DESCRIPTION}</p>

      <CoffeeButtonContainer>
        <span>R$</span><span className='CoffeePrice'>{CoffeeTypesExpresso.PRICE}</span>
        
        <CoffeePlusMinus>
          <button type='button' onClick={handleReduceCoffeeQtyScreen}>
            <Minus />
          </button>
          
          <span>{coffeeQtyScreen}</span>
          
          <button type='button' onClick={handleAddCoffeeQtyScreen}>
            <Plus />
          </button>
        </CoffeePlusMinus>
        
        <CoffeeCart>
          <ShoppingCart size={22} weight='fill' color='white'/>
        </CoffeeCart>
      </CoffeeButtonContainer>
      
    </CoffeeContainer>
  )
}