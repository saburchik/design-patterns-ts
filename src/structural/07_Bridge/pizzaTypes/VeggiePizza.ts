import { Pizza } from '../Pizza'

export class VeggiePizza extends Pizza {
  public assemble(): void {
    console.log('Adding sauce: ' + this.sauce)
    console.log('Adding toppings: ' + this.toppings)
    console.log('Adding Pepperoni')
  }
  public qualityCheck(): void {
    console.log('Crust is: ' + this.crust)
  }
}
