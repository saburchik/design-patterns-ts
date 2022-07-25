import { Developer } from './Developer'

export interface DeveloperFactory {
  createDeveloper(): Developer
}
