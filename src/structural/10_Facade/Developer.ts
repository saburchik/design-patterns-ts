import { BugTracker } from './BugTracker'

export class Developer {
	public doJobBeforeDeadline(bugTracker: BugTracker): void {
		if (bugTracker.isActiveSprint()) {
			console.log('Developer is solving problems...')
		} else {
			console.log('Developer is reading Habr...')
		}
	}
}
