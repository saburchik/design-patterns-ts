import { Cms } from '../enum/Cms'

export class Website {
  private name: string
  private CMS: Cms
  private price: number

  public setName(name: string): void {
    this.name = name
  }
  public setCMS(CMS: Cms): void {
    this.CMS = CMS
  }
  public setPrice(price: number): void {
    this.price = price
  }

  public toString(): String {
    return (
      'Website {' +
      "name: '" +
      this.name +
      "'" +
      ", cms: '" +
      this.CMS +
      "'" +
      ', price: ' +
      this.price +
      '}'
    )
  }
}
