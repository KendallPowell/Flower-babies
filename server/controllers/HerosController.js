import { Auth0Provider } from "@bcwdev/auth0provider";
import { herosService } from "../services/HerosService.js";
import BaseController from "../utils/BaseController.js";


export class HerosController extends BaseController {
  constructor() {
    super('api/heros')
    this.router
      .get('', this.getAllHeros)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createHero)
      .delete('/:heroId', this.removeHero)
  }

  async getAllHeros(req, res, next) {
    try {
      const heros = await herosService.getAllHeros()
      return res.send(heros)
    } catch (error) {
      next(error)
    }
  }

  async createHero(req, res, next) {
    try {
      const hero = await herosService.createHero(req.body)
      return res.send(hero)
    } catch (error) {
      next(error)
    }
  }

  async removeHero(req, res, next) {
    try {
      const message = await herosService.removeHero(req.params.heroId)
      res.send(message)
    } catch (error) {
      next(error)
    }
  }

}