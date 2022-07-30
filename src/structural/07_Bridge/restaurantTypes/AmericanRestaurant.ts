import { Pizza } from '../Pizza'
import { Restaurant } from '../Restaurant'

export class AmericanRestaurant extends Restaurant {
  constructor(pizza: Pizza) {
    super(pizza)
  }
  public addToppings(): void {
    this.pizza.setToppings('Everything')
  }
  public addSauce(): void {
    this.pizza.setSauce('Super secret recipe')
  }
  public makeCrust(): void {
    this.pizza.setCrust('Thick')
  }
}
