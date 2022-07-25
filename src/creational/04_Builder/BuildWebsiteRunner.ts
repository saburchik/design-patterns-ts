import { Director } from './base/Director'
import { VisitCardWebsite } from './sites/VisitCardWebsite'
import { Website } from './base/Website'

class BuildWebsiteRunner {
  constructor() {
    const director: Director = new Director()
    director.setBuilder(new VisitCardWebsite())
    const website: Website = director.buildWebsite()

    console.log(website)
  }
}
new BuildWebsiteRunner()
