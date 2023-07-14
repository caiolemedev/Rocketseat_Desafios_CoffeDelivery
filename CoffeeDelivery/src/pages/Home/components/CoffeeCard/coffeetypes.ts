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
  CoffeePrice: '9.90',
},{
  CoffeeName: 'Expresso Americano',
  CoffeeImg: '',
  CoffeeType: ['TRADICIONAL'],
  CoffeeDescription: 'Expresso diluído, menos intenso que o tradicional',
  CoffeePrice: '9.90',
},{
  CoffeeName: 'Expresso Cremoso',
  CoffeeImg: '',
  CoffeeType: ['TRADICIONAL'],
  CoffeeDescription: 'Café expresso tradicional com espuma cremosa',
  CoffeePrice: '9.90',
},{
  CoffeeName: 'Expresso Gelado',
  CoffeeImg: '',
  CoffeeType: ['TRADICIONAL','GELADO'],
  CoffeeDescription: 'Bebida preparada com café expresso e cubos de gelo',
  CoffeePrice: '9.90',
},{
  CoffeeName: 'Café com Leite',
  CoffeeImg: '',
  CoffeeType: ['TRADICIONAL','COM LEITE'],
  CoffeeDescription: 'Meio a meio de expresso tradicional com leite vaporizado',
  CoffeePrice: '9.90',
},{
  CoffeeName: 'Latte',
  CoffeeImg: '',
  CoffeeType: ['TRADICIONAL','COM LEITE'],
  CoffeeDescription: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
  CoffeePrice: '9.90',
},{
  CoffeeName: 'Capuccino',
  CoffeeImg: '',
  CoffeeType: ['TRADICIONAL','COM LEITE'],
  CoffeeDescription: 'Bebida com canela feita de doses iguais de café, leite e espuma',
  CoffeePrice: '9.90',
},{
  CoffeeName: 'Macchiato',
  CoffeeImg: '',
  CoffeeType: ['TRADICIONAL','COM LEITE'],
  CoffeeDescription: 'Café expresso misturado com um pouco de leite e espuma',
  CoffeePrice: '9.90',
},{
  CoffeeName: 'Moccacino',
  CoffeeImg: '',
  CoffeeType: ['TRADICIONAL','COM LEITE'],
  CoffeeDescription: 'Café expresso com calda de chocolate, pouco leite e espuma',
  CoffeePrice: '9.90',
},{
  CoffeeName: 'Chocolate Quente',
  CoffeeImg: '',
  CoffeeType: ['ESPECIAL','COM LEITE'],
  CoffeeDescription: 'Bebida feita com chocolate dissolvido no leite quente e café',
  CoffeePrice: '9.90',
},{
  CoffeeName: 'Cubano',
  CoffeeImg: '',
  CoffeeType: ['ESPECIAL','ALCOOLICO', 'GELADO'],
  CoffeeDescription: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
  CoffeePrice: '9.90',
},{
  CoffeeName: 'Haviano',
  CoffeeImg: '',
  CoffeeType: ['ESPECIAL'],
  CoffeeDescription: 'Bebida adocicada preparada com café e leite de coco',
  CoffeePrice: '9.90',
},{
  CoffeeName: 'Árabe',
  CoffeeImg: '',
  CoffeeType: ['ESPECIAL'],
  CoffeeDescription: 'Bebida preparada com grãos de café árabe e especiarias',
  CoffeePrice: '9.90',
},{
  CoffeeName: 'Irlandês',
  CoffeeImg: '',
  CoffeeType: ['ESPECIAL','ALCOOLICO'],
  CoffeeDescription: 'Bebida a base de café, uísque irlandês, açúcar e chantily',
  CoffeePrice: '9.90',
}
]