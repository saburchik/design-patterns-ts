import { Developer } from '../interface/Developer'

export class PhpDeveloper implements Developer {
  public writeCode(): void {
    console.log('Php dev writes php code...')
  }
}
