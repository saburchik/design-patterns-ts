import { Developer } from './interface/Developer'
import { ProjectManager } from './interface/ProjectManager'
import { ProjectTeamFactory } from './interface/ProjectTeamFactory'
import { Tester } from './interface/Tester'
import { WebsiteTeamFactory } from './website/WebsiteTeamFactory'

class SportSiteProject {
  constructor() {
    const projectTeamFactory: ProjectTeamFactory = new WebsiteTeamFactory()
    const developer: Developer = projectTeamFactory.getDeveloper()
    const tester: Tester = projectTeamFactory.getTester()
    const projectManager: ProjectManager =
      projectTeamFactory.getProjectManager()

    console.log('Creating a sport site project...')
    developer.writeCode()
    tester.testCode()
    projectManager.managerProject()
  }
}
new SportSiteProject()
