import { ShoppingCart, Package, Timer, Coffee } from "@phosphor-icons/react"
import copo from '../../assets/home_copo.png'
import { CoffeeCard } from "./components/CoffeeCard"

export function Home() {
  return (
    <div>
      <h1>Encontre o café perfeito para qualquer hora do dia</h1>
      <p>Com o Coffee Delivery você rebece seu café onde estiver a qualquer hora</p>
      <div>
        <ShoppingCart weight="fill" />
        <span>Compra simples e segura</span>
        <Package weight="fill" />
        <span>Embalagem mantém o café intacto</span>
        <Timer weight="fill" />
        <span>Entrega rápida e rastreada</span>
        <Coffee weight="fill" />
        <span>O café chega fresquinho até você</span>
      </div>
      <img src={copo} alt="copo de cafe" />
      <div>
        <h2>Nossos Cafés</h2>
        <CoffeeCard />
      </div>
    </div>
  )
}