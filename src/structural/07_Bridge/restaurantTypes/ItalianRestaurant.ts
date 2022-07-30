import { Pizza } from '../Pizza'
import { Restaurant } from '../Restaurant'

export class ItalianRestaurant extends Restaurant {
  constructor(pizza: Pizza) {
    super(pizza)
  }
  public addToppings(): void {
    this.pizza.setToppings('')
  }
  public addSauce(): void {
    this.pizza.setSauce('Oil')
  }
  public makeCrust(): void {
    this.pizza.setCrust('Thin')
  }
}
