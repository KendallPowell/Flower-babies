import { logger } from './Logger.js'
import { Pop } from './Pop.js'

export class EventEmitter {
  _listeners = {}

  /**
   * @param {string | number} event
   * @param {function} fn
   * @param {any} thisContext
   */
  on(event, fn, thisContext = null) {
    if (typeof fn !== 'function') { return }
    if (!(event in this)) {
      const ERROR = new Error(`Unable to register listener for '${event}'`)
      Pop.error(ERROR)
      return logger.error(ERROR)
    }
    this._listeners[event] = Array.isArray(this._listeners[event]) ? this._listeners[event] : []
    this._listeners[event] = this._listeners[event] || []
    // @ts-ignore
    fn.ctx = thisContext
    this._listeners[event].push(fn)
  }

  /**
   * @param {string | number} event
   * @param {function} fn
   */
  off(event, fn) {
    this._listeners[event] = Array.isArray(this._listeners[event]) ? this._listeners[event] : []
    const i = this._listeners[event].indexOf(fn)
    if (i === -1) { return }
    this._listeners[event].splice(i, 1)
  }

  /**
   * @param {string | number | symbol} event
   * @param {any} [payload]
   */
  emit(event, payload) {
    this._listeners[event] = this._listeners[event] || []
    const length = this._listeners[event].length
    for (let i = 0; i < length; i++) {
      const fn = this._listeners[event][i]
      fn.ctx
        ? fn.call(fn.ctx, payload)
        : fn(payload)
    }
  }
}
