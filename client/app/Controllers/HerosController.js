import { appState } from "../AppState.js"
import { Hero } from "../Models/Hero.js"
import { herosService } from "../Services/HerosService.js"
import { getFormData } from "../Utils/FormHandler.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML } from "../Utils/Writer.js"

function _drawHeros() {
  let template = ''
  appState.heros.forEach(h => template += h.HeroTemplate)
  setHTML('heros', template)
}

function _drawActive() {
  setHTML('heroModalContent', appState.activeHero.ActiveHeroTemplate)
}


export class HerosController {
  constructor() {
    this.getHeros()
    appState.on('heros', _drawHeros)
    appState.on('activeHero', _drawActive)
  }
  drawActiveForm() {
    setHTML('heroModalContent', Hero.GetActiveForm())
  }
  async getHeros() {
    try {
      await herosService.getHeros()
    } catch (error) {
      Pop.error(error.message)
      console.error(error)
    }
  }
  async createHero() {
    window.event.preventDefault()
    let form = window.event.target
    let formData = getFormData(form)
    console.log(formData);
    if (formData.universe == "on") {
      formData.universe = true
    } else {
      formData.universe = false
    }
    if (formData.superpowers == 'on') {
      formData.superpowers = true
    } else {
      formData.superpowers = false
    }
    await herosService.createHero(formData)
  }

  async removeHero(heroId) {
    try {
      if (await Pop.confirm()) {
        await herosService.removeHero(heroId)
      }
    } catch (error) {
      Pop.error(error.message)
      console.error(error);
    }
  }

  setActive(heroId) {
    try {
      herosService.setActive(heroId)
    } catch (error) {
      Pop.error(error.message)
      console.error(error);
    }
  }


}