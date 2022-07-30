import { VeggiePizza } from './pizzaTypes/VeggiePizza'
import { ItalianRestaurant } from './restaurantTypes/ItalianRestaurant'

class Deliver {
  constructor() {
    const americanRestaurant: ItalianRestaurant = new ItalianRestaurant(
      new VeggiePizza()
    )

    americanRestaurant.deliver()
  }
}
new Deliver()
