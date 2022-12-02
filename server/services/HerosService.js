import { dbContext } from "../db/DbContext.js"


class HerosService {
  async getAllHeros() {
    const heros = await dbContext.Hero.find()
    return heros
    // console.log('get all heros service is up')
  }

  async createHero(heroData) {
    const newHero = await dbContext.Hero.create(heroData)
    return newHero
  }
}

export const herosService = new HerosService()