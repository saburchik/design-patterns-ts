import { Copyable } from './interface/Copyable'

export class Project implements Copyable {
  private id: number
  private projectName: string
  private sourceCode: string

  constructor(id: number, projectName: string, sourceCode: string) {
    this.id = id
    this.projectName = projectName
    this.sourceCode = sourceCode
  }

  public getId(): number {
    return this.id
  }
  public setId(id: number): void {
    this.id = id
  }

  public getProjectName(): string {
    return this.projectName
  }
  public setProjectName(projectName: string): void {
    this.projectName = projectName
  }

  public getSourceCode(): string {
    return this.sourceCode
  }
  public setSourceCode(sourceCode: string): void {
    this.sourceCode = sourceCode
  }

  public copy(): object {
    const copy: Project = new Project(
      this.id,
      this.projectName,
      this.sourceCode
    )
    return copy
  }
  public toString(): string {
    return `Project: {
      id: ${this.id},
      projectName: '${this.projectName}',
      sourceCode: '${this.sourceCode}',
    }`
  }
}
