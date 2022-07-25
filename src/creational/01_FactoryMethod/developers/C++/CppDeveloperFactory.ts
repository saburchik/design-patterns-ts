import { Developer } from '../../interface/Developer'
import { DeveloperFactory } from '../../interface/DeveloperFactory'
import { CppDeveloper } from './CppDeveloper'

export class CppDeveloperFactory implements DeveloperFactory {
  createDeveloper(): Developer {
    return new CppDeveloper()
  }
}
