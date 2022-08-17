import { DeveloperDecorator } from './DeveloperDecorator'
import { Developer } from './interface/Developer'

export class TSTeamLead extends DeveloperDecorator {
  constructor(developer: Developer) {
    super(developer)
  }

  public sendWeekReport(): string {
    return '- Send week report to customer.'
  }
  public makeJob(): string {
    return super.makeJob() + '\n' + this.sendWeekReport()
  }
}
