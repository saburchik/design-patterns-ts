import { JavaDeveloper } from './developers/JavaDeveloper'
import { RustDeveloper } from './developers/RustDeveloper'
import { Developer } from './interface/Developer'
import { Team } from './Team'

class Program {
  constructor() {
    const team: Team = new Team()

    const firstJavaDev: Developer = new JavaDeveloper()
    const secondJavaDev: Developer = new JavaDeveloper()
    const rustDev: Developer = new RustDeveloper()

    team.addDeveloper(firstJavaDev)
    team.addDeveloper(secondJavaDev)
    team.addDeveloper(rustDev)

    team.createProject()
  }
}
new Program()
