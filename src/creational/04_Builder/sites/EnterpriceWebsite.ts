import { Cms } from '../enum/Cms'
import { WebsiteBuilder } from '../base/WebsiteBuilder'

export class EnterpriceWebsite extends WebsiteBuilder {
  buildName(): void {
    this.website.setName('Enterprice web site')
  }
  buildCMS(): void {
    this.website.setCMS(Cms.WORDPRESS)
  }
  buildPrice(): void {
    this.website.setPrice(997)
  }
}
