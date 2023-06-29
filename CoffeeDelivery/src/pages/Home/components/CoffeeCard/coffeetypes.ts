export interface CoffeeInfo {
  CoffeeImg?: string;
  CoffeeType: string[];
  CoffeeName: string;
  CoffeeDescription: string;
  CoffeePrice: string;
}

export const coffeeTypes: CoffeeInfo[] = [{
  CoffeeName: 'Expresso Tradicional',
  CoffeeImg: '../../../../assets/expresso.png',
  CoffeeType: ['TRADICIONAL'],
  CoffeeDescription: 'O tradicional café feito com água quente e grãos moídos',
  CoffeePrice: '9,90',
},{
  CoffeeName: 'Outro nome de café',
  CoffeeImg: '../../../../assets/expresso.png',
  CoffeeType: ['TRADICIONAL','OUTRO'],
  CoffeeDescription: 'BLABLA BLA BLA BLA BLA BLA BLA',
  CoffeePrice: '19,90',
}
]