import { Project } from './Project'

export class ProjectFactory {
  project: Project

  constructor(project: Project) {
    this.project = project
  }

  public setProject(project: Project): void {
    this.project = project
  }

  cloneProject(): Project {
    return <Project>this.project.copy()
  }
}
