import { ShoppingCart, Package, Timer, Coffee, IconContext } from "@phosphor-icons/react"
import copo from '../../assets/home_copo.png'
import { CoffeeCard } from "./components/CoffeeCard"
import { HomeCoffeeList, HomeCoffeeListCountainer, HomeContainer, HomeIntro, HomeItems, HomeTitle, ImageContainer } from "./styles"
import { coffeeTypes } from "./components/CoffeeCard/coffeetypes"

export function Home() {
  return (
    <HomeContainer>
      <HomeIntro>
        <div>
          <HomeTitle>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>Com o Coffee Delivery você rebece seu café onde estiver a qualquer hora</p>
          </HomeTitle>

          <IconContext.Provider value={{color: "white", size: 22, weight: "fill"}}>
            <HomeItems>
              <p>
                <ShoppingCart />
                Compra simples e segura
              </p>
              <p>
                <Package />
                Embalagem mantém o café intacto
              </p>
              <p>
                <Timer />
                Entrega rápida e rastreada
              </p>
              <p>
                <Coffee />
                O café chega fresquinho até você
              </p>
            </HomeItems>
          </IconContext.Provider>

        </div>
        <ImageContainer>
          <img src={copo} alt="copo de cafe" />
        </ImageContainer>
      </HomeIntro>
      <HomeCoffeeListCountainer>
        <h2>Nossos Cafés</h2>
        
        <HomeCoffeeList>
          {coffeeTypes.map((coffee) => {return (
            <CoffeeCard
              key={coffee.CoffeeName}
              CoffeeName={coffee.CoffeeName}
              CoffeeDescription={coffee.CoffeeDescription}
              CoffeeType={coffee.CoffeeType}
              CoffeePrice={coffee.CoffeePrice}
            />
          )})}    
        </HomeCoffeeList>

      </HomeCoffeeListCountainer>
    </HomeContainer>
  )
}