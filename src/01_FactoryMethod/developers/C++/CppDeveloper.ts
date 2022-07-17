import { Developer } from '../../interface/Developer'

export class CppDeveloper implements Developer {
  writeCode(): void {
    console.log('C++ developer writes c++ code..')
  }
}
