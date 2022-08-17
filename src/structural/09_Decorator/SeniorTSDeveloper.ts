import { DeveloperDecorator } from './DeveloperDecorator'
import { Developer } from './interface/Developer'

export class SeniorTSDeveloper extends DeveloperDecorator {
  constructor(developer: Developer) {
    super(developer)
  }

  public makeCodeReview(): string {
    return '- Make code review.'
  }
  public makeJob(): string {
    return super.makeJob() + '\n' + this.makeCodeReview()
  }
}
