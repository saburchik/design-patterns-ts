import { Developer } from '../interface/Developer'
import { ProjectTeamFactory } from '../interface/ProjectTeamFactory'
import { Tester } from '../interface/Tester'
import { PhpDeveloper } from './PhpDeveloper'
import { ManualTester } from './ManualTester'
import { ProjectManager } from '../interface/ProjectManager'
import { WebsitePM } from './WebsitePM'

export class WebsiteTeamFactory implements ProjectTeamFactory {
  getDeveloper(): Developer {
    return new PhpDeveloper()
  }
  getTester(): Tester {
    return new ManualTester()
  }
  getProjectManager(): ProjectManager {
    return new WebsitePM()
  }
}
