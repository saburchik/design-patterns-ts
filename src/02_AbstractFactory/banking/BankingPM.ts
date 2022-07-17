import { ProjectManager } from '../interface/ProjectManager'

export class BankingPM implements ProjectManager {
  public managerProject(): void {
    console.log('Banking PM manages banking project...')
  }
}
