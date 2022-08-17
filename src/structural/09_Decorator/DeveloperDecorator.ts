import { Developer } from './interface/Developer'

export class DeveloperDecorator implements Developer {
  developer: Developer

  constructor(developer: Developer) {
    this.developer = developer
  }

  public makeJob(): string {
    return this.developer.makeJob()
  }
}
