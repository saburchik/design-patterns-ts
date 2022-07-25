import { DataBase } from './interface/DataBase'
import { TypeScriptApp } from './TypeScriptApp'

export class AdapterAppToDB extends TypeScriptApp implements DataBase {
  public insert(): void {
    this.saveObj()
  }
  public update(): void {
    this.updateObj()
  }
  public select(): void {
    this.loadObj()
  }
  public remove(): void {
    this.deleteObj()
  }
}
