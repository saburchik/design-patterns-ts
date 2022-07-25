import { Developer } from '../../interface/Developer'

export class JavaDeveloper implements Developer {
  writeCode(): void {
    console.log('Java developer writes java code..')
  }
}
