import { dbContext } from "../db/DbContext.js"
import { BadRequest } from "../utils/Errors.js"


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

  async removeHero(heroId) {
    const deleted = await dbContext.Hero.findById(heroId)
    if (!deleted) throw new BadRequest('sucks to suck bad delete request')
    await deleted.remove()
    return `${deleted.name} was "killed"`
  }
}

export const herosService = new HerosService()