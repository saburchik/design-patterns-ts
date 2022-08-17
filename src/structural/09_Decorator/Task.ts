import { Developer } from './interface/Developer'
import { SeniorTSDeveloper } from './SeniorTSDeveloper'
import { TSDeveloper } from './TSDeveloper'
import { TSTeamLead } from './TSTeamLead'

class Task {
	constructor() {
		const developer: Developer = new TSTeamLead(
			new SeniorTSDeveloper(new TSDeveloper())
		)

		console.log(developer.makeJob())
	}
}
new Task()
