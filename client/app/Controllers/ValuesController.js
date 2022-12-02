import { appState } from '../AppState.js'
import { valuesService } from '../Services/ValuesService.js'
import { logger } from '../Utils/Logger.js'

// Private
function _draw() {
  const values = appState.values
  logger.log(values)
}

// Public
export class ValuesController {
  constructor() {
    appState.on('values', _draw)
  }

  addValue() {
    valuesService.addValue()
  }
}
