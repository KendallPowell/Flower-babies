import { herosService } from "../services/HerosService.js";
import BaseController from "../utils/BaseController.js";


export class HerosController extends BaseController {
  constructor() {
    super('api/heros')
    this.router
      .get('', this.getAllHeros)
  }

  async getAllHeros(req, res, next) {
    try {
      const heros = await herosService.getAllHeros()
      return res.send(heros)
      // console.log('Heros Controller is on!')
    } catch (error) {
      next(error)
    }
  }
}