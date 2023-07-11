import { Plus, Minus, ShoppingCart } from '@phosphor-icons/react'
import expresso from '../../../../assets/expresso.png'

import { CoffeeButtonContainer, CoffeeCart, CoffeeContainer, CoffeePlusMinus, CoffeeTypeContainer } from './styles'
import { useEffect, useState } from 'react'
import { CoffeeInfo } from './coffeetypes'

interface CoffeeCartItem {
  CartCoffeeName: string
  CartCoffeeQty: number
}

type CoffeeCart = Array<CoffeeCartItem>

export function CoffeeCard({CoffeeName, CoffeeDescription, CoffeeType, CoffeePrice}: CoffeeInfo) {
  const [coffeeQtyScreen, setCoffeeQtyScreen] = useState<number>(1)
  const [coffeeCart , setCoffeeCart] = useState<CoffeeCart>([])

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

  function addToCart() {
    const updatedCoffeeItem = coffeeCart.findIndex((item) => {
      return item.CartCoffeeName == CoffeeName
    })

    if (updatedCoffeeItem < 0) {
      const newCoffeeCart = [...coffeeCart, {CartCoffeeName: CoffeeName, CartCoffeeQty: coffeeQtyScreen}]

      setCoffeeCart(newCoffeeCart)
    } else {
      console.log("item já cadastrado")
    }
    
/*     const updatedCoffeeItem = coffeeCart.findIndex((item) => {
      return item.CartCoffeeName === CoffeeName
    })

    if (updatedCoffeeItem < 0 ) {
      return coffeeCart
    }

    return coffeeCart[updatedCoffeeItem].CartCoffeeQty = coffeeQtyScreen

    coffeeCart.map(item => {
      if (item.CartCoffeeName == CoffeeName) {
        updatedCoffeeItemQty = item.CartCoffeeQty+coffeeQtyScreen
      }
      else {
        updatedCoffeeItemQty = coffeeQtyScreen
      }
    })



    setCoffeeCart() */
  }

  useEffect(() => {
    console.log(coffeeCart)
  },[coffeeCart])

  return (
    <CoffeeContainer>
      <img src={expresso} alt="expresso" />

      <CoffeeTypeContainer>
        {CoffeeType.map((type) => {return (
          <span key={type} className='CoffeeType'>{type}</span>
        )})}
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
        
        <CoffeeCart onClick={addToCart}>
            <ShoppingCart size={22} weight='fill' color='white'/>
        </CoffeeCart>
      </CoffeeButtonContainer>
      
      
    </CoffeeContainer>
  )
}