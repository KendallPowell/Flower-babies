import { baseURL, useSockets } from '../env.js'
import { logger } from './Logger.js'

const SOCKET_EVENTS = {
  connection: 'connection',
  connected: 'connected',
  disconnect: 'disconnect',
  authenticate: 'authenticate',
  authenticated: 'authenticated',
  userConnected: 'userConnected',
  userDisconnected: 'userDisconnected',
  error: 'error'
}

export class SocketHandler {
  queue = []
  authenticated = false
  requiresAuth = false
  /**
   * @param {String} url
   */
  constructor(requiresAuth = false, url = baseURL) {
    if (!useSockets) { return }
    // @ts-ignore
    // eslint-disable-next-line no-undef
    this.socket = io(url || baseURL)
    this.queue = []
    this.requiresAuth = requiresAuth
    this.authenticated = false
    // @ts-ignore
    this
      .on(SOCKET_EVENTS.connected, this.onConnected)
      .on(SOCKET_EVENTS.authenticated, this.onAuthenticated)
      .on(SOCKET_EVENTS.error, this.onError)
  }

  on(event, fn) {
    if (!this.socket) { return this }
    this.socket.on(event, fn.bind(this))
    return this
  }

  onConnected(connection) {
    logger.log('[SOCKET_CONNECTION]', connection)
    this.connected = true
    this.playback()
  }

  onAuthenticated(auth) {
    logger.log('[SOCKET_AUTHENTICATED]', auth)
    this.authenticated = true
    this.playback()
  }

  playback() {
    const playback = [...this.queue]
    this.queue = []
    playback.forEach(e => {
      this.emit(e.action, e.payload)
    })
  }

  authenticate(bearerToken) {
    if (!this.socket) { return }
    this.socket.emit(SOCKET_EVENTS.authenticate, bearerToken)
  }

  onError(error) {
    logger.error('[SOCKET_ERROR]', error)
  }

  enqueue(action, payload) {
    logger.log('[ENQUEING_ACTION]', { action, payload })
    this.queue.push({ action, payload })
  }

  /**
   * Send a Message to the Server with an optional payload
   * @param {string} action
   * @param {any} [payload]
   */
  emit(action, payload = undefined) {
    if (!this.socket) { return }
    if (this.requiresAuth && !this.authenticated) {
      return this.enqueue(action, payload)
    }
    if (!this.connected) {
      return this.enqueue(action, payload)
    }
    this.socket.emit(action, payload)
  }
}
