import { Developer } from './interface/Developer'

export class Team {
  private developers: Array<Developer> = new Array<Developer>()

  public addDeveloper(developer: Developer): void {
    this.developers.push(developer)
  }
  public createProject(): void {
    console.log('Team creates project...\n')
    this.developers.forEach((developer) => {
      developer.writeCode()
    })
  }
}
