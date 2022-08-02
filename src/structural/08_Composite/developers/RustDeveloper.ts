import { Developer } from '../interface/Developer'

export class RustDeveloper implements Developer {
  public writeCode(): void {
    console.log('Rust developer writes rust code...')
  }
}
