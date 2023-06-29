import { Plus, Minus, ShoppingCart } from '@phosphor-icons/react'
import expresso from '../../../../assets/expresso.png'

import { CoffeeButtonContainer, CoffeeCart, CoffeeContainer, CoffeePlusMinus, CoffeeTypeContainer } from './styles'
import { useState } from 'react'
import { CoffeeInfo, coffeeTypes } from './coffeetypes'

export function CoffeeCard({CoffeeName, CoffeeDescription, CoffeeType, CoffeePrice}: CoffeeInfo) {
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

  
  function getCoffee(coffeeType: string) {
    if (coffeeType == 'expresso') return coffeeTypes[1]
  }

  return (
    <CoffeeContainer>
      <img src={expresso} alt="expresso" />

      <CoffeeTypeContainer>
        <span className='CoffeeType'>{CoffeeType}</span>
      </CoffeeTypeContainer>

      <p className='CoffeeName'>{CoffeeName}</p>
      <p className='CoffeeDescription'>{CoffeeDescription}</p>

      <CoffeeButtonContainer>
        <span>R$</span><span className='CoffeePrice'>{CoffeePrice}</span>
        
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