import { BugTracker } from './BugTracker'
import { Developer } from './Developer'
import { Job } from './Job'

export class Workflow {
	bugTracker: BugTracker = new BugTracker()
	job: Job = new Job()
	developer: Developer = new Developer()

	public solveProblems(): void {
		this.bugTracker.startSprint()
		this.job.doJob()
		this.developer.doJobBeforeDeadline(this.bugTracker)
	}
}
