import { appState } from "../AppState.js";
import { Hero } from "../Models/Hero.js";
import { server } from "./AxiosService.js";


class HerosService {

  async getHeros() {
    const res = await server.get('api/heros')
    console.log(res);
    appState.heros = res.data.map(h => new Hero(h))
    console.log(appState.heros, 'got heros')
  }



  async createHero(formData) {
    console.log(formData.value);
    const res = await server.post('api/heros', formData)
    appState.heros.push(new Hero(res.data))
    appState.emit('heros')
  }

}

export const herosService = new HerosService()