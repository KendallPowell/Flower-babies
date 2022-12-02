import { Pop } from "./Pop.js"

export function isValidProp(target, prop) {
  if (typeof target[prop] === 'function') { return }
  // eslint-disable-next-line no-prototype-builtins
  if (!target.hasOwnProperty(prop)) {
    const ERROR = new Error(`[BAD PROP]:[${prop}] Invalid Property Access via Proxy State`)
    Pop.error(ERROR)
    throw ERROR
  }
}
