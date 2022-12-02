import { dbContext } from "../db/DbContext.js"


class UsersService {


  async becomeUser(body) {
    const user = dbContext.User.create(body)
    await user.populate('user', 'name picture')
  }



}

export const usersService = new UsersService()