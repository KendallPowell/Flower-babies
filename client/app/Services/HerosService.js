import { dbContext } from "../../../server/db/DbContext.js";
import { appState } from "../AppState.js";
import { Hero } from "../Models/Hero.js";
import { server } from "./AxiosService.js";


class HerosService {
  async removeHero(heroId) {
    const res = await dbContext.Hero.remove('api/heros/' + heroId)
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