import { appState } from "../AppState.js";
import { Hero } from "../Models/Hero.js";
import { server } from "./AxiosService.js";


class HerosService {
  setActive(heroId) {
    const activeHero = appState.heros.find(h => h.id == heroId)
    appState.activeHero = activeHero
    console.log(activeHero);
  }
  async removeHero(heroId) {
    const res = await server.delete('api/heros/' + heroId)
    console.log(res.data);
    let filtered = appState.heros.filter(h => h.id != heroId)
    appState.heros = filtered
  }

  async getHeros() {
    const res = await server.get('api/heros')
    console.log(res);
    appState.heros = res.data.map(h => new Hero(h))
    console.log(appState.heros, 'got heros')
  }


  async createHero(formData) {
    const res = await server.post('api/heros', formData)
    console.log(res);
    appState.heros.push(new Hero(res.data))
    appState.emit('heros')
  }

}

export const herosService = new HerosService()