import { MapPin } from '@phosphor-icons/react'

export function Header() {
  return (
    <div>
      <a>Coffee Delivery</a>
      <span>
        <MapPin size={24} weight='fill' />
      </span>
    </div>
  )
}