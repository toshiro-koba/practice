export default class World {
  message: string

  constructor(message: string) {
    this.message = message
  }

  public syaHello(elem: HTMLElement | null): void {
    if (elem) {
      elem.innerText = this.message
    }
  }
}
