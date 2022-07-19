import { Website } from './Website'
import { WebsiteBuilder } from './WebsiteBuilder'

export class Director {
  builder: WebsiteBuilder

  public setBuilder(builder: WebsiteBuilder): void {
    this.builder = builder
  }

  buildWebsite(): Website {
    this.builder.createWebsite()
    this.builder.buildName()
    this.builder.buildCMS()
    this.builder.buildPrice()

    const website: Website = this.builder.getWebsite()
    return website
  }
}
