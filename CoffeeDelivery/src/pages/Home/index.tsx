import { ShoppingCart, Package, Timer, Coffee } from "@phosphor-icons/react"
import copo from '../../assets/home_copo.png'
import { CoffeeCard } from "./components/CoffeeCard"
import { HomeContainer, HomeIntro, HomeItems, HomeTitle, ImageContainer } from "./styles"

export function Home() {
  return (
    <HomeContainer>
      <HomeIntro>
        <div>
          <HomeTitle>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>Com o Coffee Delivery você rebece seu café onde estiver a qualquer hora</p>
          </HomeTitle>

          <HomeItems>
            <ShoppingCart weight="fill" />
            <span>Compra simples e segura</span>
            <Package weight="fill" />
            <span>Embalagem mantém o café intacto</span>
            <Timer weight="fill" />
            <span>Entrega rápida e rastreada</span>
            <Coffee weight="fill" />
            <span>O café chega fresquinho até você</span>
          </HomeItems>
        </div>
        <ImageContainer>
          <img src={copo} alt="copo de cafe" />
        </ImageContainer>
      </HomeIntro>
      <div>
        <h2>Nossos Cafés</h2>
        <CoffeeCard />
      </div>
    </HomeContainer>
  )
}