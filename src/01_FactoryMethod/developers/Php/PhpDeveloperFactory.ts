import { Developer } from '../../interface/Developer'
import { DeveloperFactory } from '../../interface/DeveloperFactory'
import { PhpDeveloper } from './PhpDeveloper'

export class PhpDeveloperFactory implements DeveloperFactory {
  createDeveloper(): Developer {
    return new PhpDeveloper()
  }
}
