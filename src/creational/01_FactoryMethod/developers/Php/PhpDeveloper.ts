import { Developer } from '../../interface/Developer'

export class PhpDeveloper implements Developer {
  writeCode(): void {
    console.log('Php developer writes php code..')
  }
}
