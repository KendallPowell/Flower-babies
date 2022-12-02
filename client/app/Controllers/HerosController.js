import { appState } from "../AppState.js"
import { herosService } from "../Services/HerosService.js"
import { getFormData } from "../Utils/FormHandler.js"
import { setHTML } from "../Utils/Writer.js"

function _drawHeros() {
  let template = ''
  appState.heros.forEach(h => template += h.HeroTemplate)
  setHTML('heros', template)
}
export class HerosController {
  constructor() {
    appState.on('heros', _drawHeros)
  }

  async createHero() {
    window.event.preventDefault()
    let form = window.event.target
    let formData = getFormData(form)
    console.log(formData);
    await herosService.createHero(formData)
  }

}