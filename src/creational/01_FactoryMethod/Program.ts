import { CppDeveloperFactory } from './developers/C++/CppDeveloperFactory'
import { JavaDeveloperFactory } from './developers/Java/JavaDeveloperFactory'
import { PhpDeveloperFactory } from './developers/Php/PhpDeveloperFactory'
import { Developer } from './interface/Developer'
import { DeveloperFactory } from './interface/DeveloperFactory'

class Program {
  constructor() {
    let developerFactory: DeveloperFactory =
      this.createDeveloperBySpecialty('php')
    let developer: Developer = developerFactory.createDeveloper()

    developer.writeCode()
  }

  createDeveloperBySpecialty(specialty: string) {
    if (specialty === 'java') {
      return new JavaDeveloperFactory()
    } else if (specialty === 'c++') {
      return new CppDeveloperFactory()
    } else if (specialty === 'php') {
      return new PhpDeveloperFactory()
    } else {
      throw Error(specialty + ' is unknown specialty.')
    }
  }
}
new Program()
