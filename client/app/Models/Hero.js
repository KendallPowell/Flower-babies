

export class Hero {
  constructor(data) {
    this.name = data.name
    this.universe = data.universe
    this.description = data.description
    this.homePlanet = data.homePlanet
    this.rating = data.rating
    this.superpowers = data.superpowers
    this.imgUrl = data.imgUrl
  }

  get HeroTemplate() {
    return `
    <div class="col-md-4 card p-2 m-2 elevation-3">
    <div>
      <img class="img-card" src="${this.imgUrl}" alt="">
    </div>
    <div class="text-center">
      <h1>${this.name}</h1>
    </div>
    <div class="d-flex justify-content-evenly">
      <i class="mdi mdi-thumb-up selectable"></i>
      <h4>${this.rating}</h4>
      <i class="mdi mdi-thumb-down selectable"></i>
    </div>
  </div>
    `
  }
}