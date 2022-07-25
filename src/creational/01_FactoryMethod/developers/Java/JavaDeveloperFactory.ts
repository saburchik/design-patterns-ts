import { Developer } from '../../interface/Developer'
import { DeveloperFactory } from '../../interface/DeveloperFactory'
import { JavaDeveloper } from './JavaDeveloper'

export class JavaDeveloperFactory implements DeveloperFactory {
  createDeveloper(): Developer {
    return new JavaDeveloper()
  }
}
