import { MapPin, ShoppingCart } from '@phosphor-icons/react'

import logo from '../../assets/logo.png'
import { NavLink } from 'react-router-dom'
import { HeaderCart, HeaderContainer, HeaderInfo, HeaderLocation } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/" title='logo'>
        <img src={logo} alt="logo" />
      </NavLink>
      
      <HeaderInfo>
        <HeaderLocation>
          <MapPin size={20} weight='fill' color='#8047F8' />
          <span>Sorocaba, SP</span>
        </HeaderLocation>

        <HeaderCart>
          <NavLink to="/Checkout" title="checkout">
            <ShoppingCart size={20} weight='fill' color='#C47F17' />
          </NavLink>
        </HeaderCart>

      </HeaderInfo>     
    </HeaderContainer>
  )
}