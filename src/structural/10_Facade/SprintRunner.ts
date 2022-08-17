import { Workflow } from './Workflow'

class SprintRunner {
	constructor() {
		const workflow: Workflow = new Workflow()

		workflow.solveProblems()
	}
}
new SprintRunner()
