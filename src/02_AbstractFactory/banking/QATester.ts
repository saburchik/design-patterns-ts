import { Tester } from '../interface/Tester'

export class QATester implements Tester {
  public testCode(): void {
    console.log('QA tester tests banking code...')
  }
}
