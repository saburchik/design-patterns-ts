import { Developer } from './interface/Developer'

export class TSDeveloper implements Developer {
  public makeJob(): string {
    return '- Write TypeScript code.'
  }
}
