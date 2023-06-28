export interface CoffeeInfo {
  CoffeeImg: string;
  CoffeeType: string[];
  CoffeeName: string;
  CoffeeDescription: string;
  CoffeePrice: string;
}

const CoffeeTypes: CoffeeInfo[] = [{
  CoffeeName: 'Expresso Tradicional',
  CoffeeImg: '../../../../assets/expresso.png',
  CoffeeType: ['TRADICIONAL'],
  CoffeeDescription: 'O tradicional café feito com água quente e grãos moídos',
  CoffeePrice: '9,90',
}]

export function getCoffee(coffeeType: string) {
  if (coffeeType == 'expresso') return CoffeeTypes[1]
}