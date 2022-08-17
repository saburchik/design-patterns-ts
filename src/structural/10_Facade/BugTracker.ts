export class BugTracker {
	private activeSprint: boolean

	public isActiveSprint(): boolean {
		return this.activeSprint
	}
	public startSprint(): void {
		this.activeSprint = true
		console.log('Sprint is active.')
	}
	public finishSprint(): void {
		this.activeSprint = false
		console.log('Sprint is not active.')
	}
}
