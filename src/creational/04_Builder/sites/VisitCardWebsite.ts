import { Cms } from '../enum/Cms'
import { WebsiteBuilder } from '../base/WebsiteBuilder'

export class VisitCardWebsite extends WebsiteBuilder {
  buildName(): void {
    this.website.setName('Visit cards')
  }
  buildCMS(): void {
    this.website.setCMS(Cms.WORDPRESS)
  }
  buildPrice(): void {
    this.website.setPrice(1221)
  }
}
