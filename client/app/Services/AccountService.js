import { appState } from '../AppState.js'
import { Account } from '../Models/Account.js'
import { logger } from '../Utils/Logger.js'
import { server } from './AxiosService.js'

class AccountService {
  async getAccount() {
    try {
      const res = await server.get('/account')
      appState.account = new Account(res.data)
    } catch (err) {
      logger.error(err)
    }
  }

  async editAccount(accountData) {
    const res = await server.put('/account', accountData)
    appState.account = new Account(res.data)
  }

}

export const accountService = new AccountService()
