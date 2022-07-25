import { Developer } from '../interface/Developer'
import { ProjectManager } from '../interface/ProjectManager'
import { ProjectTeamFactory } from '../interface/ProjectTeamFactory'
import { Tester } from '../interface/Tester'
import { BankingPM } from './BankingPM'
import { JavaDeveloper } from './JavaDeveloper'
import { QATester } from './QATester'

export class BankingTeamFactory implements ProjectTeamFactory {
  public getDeveloper(): Developer {
    return new JavaDeveloper()
  }
  public getTester(): Tester {
    return new QATester()
  }
  public getProjectManager(): ProjectManager {
    return new BankingPM()
  }
}
