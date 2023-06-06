import { MapPin } from '@phosphor-icons/react'

import logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom'
import { Cart } from './Cart'

export function Header() {
  return (
    <div>
      <NavLink to="/" title='logo'>
        <img src={logo} alt="logo" />
      </NavLink>
      
      <MapPin size={24} weight='fill' />
      <span>Location</span>
      
      <NavLink to="/Checkout" title="checkout">
        <Cart />
      </NavLink>
    </div>
  )
}