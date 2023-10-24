export class Gift {
  constructor(data) {
    this.id = data._id || data.id
    this.creatorId = data.creatorId
    this.tag = data.tag
    this.url = data.url
    this.opened = data.opened
  }
}