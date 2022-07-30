export abstract class Pizza {
  protected sauce: string
  protected toppings: string
  protected crust: string

  public abstract assemble(): void
  public abstract qualityCheck(): void

  public getSauce(): string {
    return this.sauce
  }
  public setSauce(value: string) {
    this.sauce = value
  }
  public getToppings(): string {
    return this.toppings
  }
  public setToppings(value: string) {
    this.toppings = value
  }
  public getCrust(): string {
    return this.crust
  }
  public setCrust(value: string) {
    this.crust = value
  }
}
