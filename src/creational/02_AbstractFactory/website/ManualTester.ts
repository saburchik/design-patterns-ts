import { Tester } from '../interface/Tester'

export class ManualTester implements Tester {
  public testCode(): void {
    console.log('Manual tester tests website...')
  }
}
