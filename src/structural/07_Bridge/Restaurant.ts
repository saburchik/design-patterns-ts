import { Pizza } from './Pizza'

export abstract class Restaurant {
  protected pizza: Pizza

  constructor(pizza: Pizza) {
    this.pizza = pizza
  }

  abstract addSauce(): void
  abstract addToppings(): void
  abstract makeCrust(): void

  public deliver(): void {
    this.makeCrust()
    this.addSauce()
    this.addToppings()
    this.pizza.assemble()
    this.pizza.qualityCheck()
    console.log('Order in Progress!')
  }
}
