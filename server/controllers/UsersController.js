import { usersService } from "../services/UsersService.js";
import BaseController from "../utils/BaseController.js";

export class UsersController extends BaseController {
  constructor() {
    super('api/users')
    this.router
      .put('', this.becomeUser)
  }

  async becomeUser(req, res, next) {
    try {
      req.body.userId = req.userInfo.id
      const user = await usersService.becomeUser(req.body)
      return res.send(user)
    } catch (error) {
      next(error)
    }
  }
}