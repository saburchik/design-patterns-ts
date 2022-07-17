import { ProjectManager } from '../interface/ProjectManager'

export class WebsitePM implements ProjectManager {
  public managerProject(): void {
    console.log('Website PM manages website project...')
  }
}
