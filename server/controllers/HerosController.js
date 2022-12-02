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
      res.send(hero)
    } catch (error) {
      next(error)
    }
  }

}