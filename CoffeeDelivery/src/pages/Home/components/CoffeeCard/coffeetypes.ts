export interface CoffeeInfo {
  CoffeeImg: string;
  CoffeeType: string[];
  CoffeeName: string;
  CoffeeDescription: string;
  CoffeePrice: string;
}

export enum CoffeeTypesExpresso {
  NAME = 'Expresso Tradicional',
  IMG = '../../../../assets/expresso.png',
  TYPE1 = ['TRADICIONAL'],
  DESCRIPTION = 'O tradicional café feito com água quente e grãos moídos',
  PRICE = '9,90',
}
