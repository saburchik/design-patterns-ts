import { BankingTeamFactory } from './banking/BankingTeamFactory'
import { Developer } from './interface/Developer'
import { ProjectManager } from './interface/ProjectManager'
import { ProjectTeamFactory } from './interface/ProjectTeamFactory'
import { Tester } from './interface/Tester'

class SuperBankSystem {
  constructor() {
    const projectTeamFactory: ProjectTeamFactory = new BankingTeamFactory()
    const developer: Developer = projectTeamFactory.getDeveloper()
    const tester: Tester = projectTeamFactory.getTester()
    const projectManager: ProjectManager =
      projectTeamFactory.getProjectManager()

    console.log('Creating a bank system...')
    developer.writeCode()
    tester.testCode()
    projectManager.managerProject()
  }
}
new SuperBankSystem()
