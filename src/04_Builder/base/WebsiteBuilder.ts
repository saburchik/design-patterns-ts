import { Website } from './Website'

export abstract class WebsiteBuilder {
  website: Website

  createWebsite(): void {
    this.website = new Website()
  }

  abstract buildName(): void
  abstract buildCMS(): void
  abstract buildPrice(): void

  getWebsite(): Website {
    return this.website
  }
}
