import { Developer } from './Developer'
import { Tester } from './Tester'
import { ProjectManager } from './ProjectManager'

export interface ProjectTeamFactory {
  getDeveloper(): Developer
  getTester(): Tester
  getProjectManager(): ProjectManager
}
