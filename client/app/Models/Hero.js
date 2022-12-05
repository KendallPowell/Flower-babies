

export class Hero {
  constructor(data) {
    this.id = data.id
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
    <div class="col-md-3 card p-2 m-2 elevation-3">
    <div>
      <img data-bs-toggle="modal" data-bs-target="#heroModal" class="img-card selectable" src="${this.imgUrl}" alt="" onclick="app.herosController.setActive('${this.id}')">
    </div>
    <div class="text-center">
      <h1>${this.name}</h1>
    </div>
    <div class="d-flex justify-content-evenly">
      <i class="mdi mdi-thumb-up selectable"></i>
      <h4>${this.rating}</h4>
      <i class="mdi mdi-thumb-down selectable"></i>
      <i class="mdi mdi-delete selectable text-danger" onclick="app.herosController.removeHero('${this.id}')"></i>
    </div>
  </div>
    `
  }

  get ActiveHeroTemplate() {
    return `
    
    <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">New Hero</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body ">
      <div class="col-5 p-1">
        <img class="img-card" src="${this.imgUrl}" alt="">
      </div>
      <div class="col-5 card">
        <h1>${this.description}</h1>
      </div>
      <div class="row card">
        <h4>Comments</h4>
      </div>
    </div>
    `
  }
  static GetActiveForm() {
    return `
    <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">New Hero</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <section class="row">
            <div>
              <form onsubmit="app.herosController.createHero()" class="card p-3">
                <div class="form-group">
                  <label for="heroName">Name</label>
                  <input type="text" class="form-control" id="heroName" name="name" aria-describedby="emailHelp"
                    placeholder="Enter Name">
                </div>
                <div class="form-group">
                  <label for="heroDescription">Description</label>
                  <input type="text" class="form-control" id="heroDescription" placeholder="Tell us about the hero!"
                    name="description">
                </div>
                <div class="form-group">
                  <label for="heroPlanet">Home Planet</label>
                  <input type="text" class="form-control" id="heroPlanet" placeholder="What planet is your hero from?"
                    name="homePlanet">
                </div>
                <div class="form-group">
                  <label for="imgUrl">Url</label>
                  <input type="imgUrl" class="form-control" id="imgUrl" placeholder="Give me a URL!!!!" name="imgUrl">
                </div>
                <div class="form-check">
                  <input type="checkbox" class="form-check-input" id="isMarvel" name="universe">
                  <label class="form-check-label" for="exampleCheck1">Are they from Marvel?</label>
                </div>
                <div class="form-check">
                  <input type="checkbox" class="form-check-input" id="hasPowers" name="superpowers">
                  <label class="form-check-label" for="hasPowers">Super Powers?</label>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
              </form>
    `
  }
}