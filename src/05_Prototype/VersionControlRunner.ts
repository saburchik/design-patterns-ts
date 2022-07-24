import { Project } from './Project'
import { ProjectFactory } from './ProjectFactory'

class VersionControlRunner {
  constructor() {
    const master: Project = new Project(
      1001,
      'New-Project',
      'const sourceCode: SourceCode = new SourceCode();'
    )
    console.log(master)
    const factory: ProjectFactory = new ProjectFactory(master)
    const masterClone: Project = factory.cloneProject()
    console.log('\n===============================\n')
    console.log(masterClone)
  }
}
new VersionControlRunner()
