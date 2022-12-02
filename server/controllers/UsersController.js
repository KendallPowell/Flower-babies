import BaseController from "../utils/BaseController.js";

export class UsersController extends BaseController {
  constructor() {
    super('api/users')
    this.router
  }
}