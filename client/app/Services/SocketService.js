import { appState } from '../AppState.js'
import { useSockets } from '../env.js'
import { SocketHandler } from '../utils/SocketHandler.js'
class SocketService extends SocketHandler {
  constructor() {
    super()
    if (!useSockets) { return }
    this
      .on('IS_TESTED', this.onTested)
      .on('IS_AUTHED', this.onIsAuthed)
  }

  onTested(payload) {
    appState.socketData = [...appState.socketData, payload]
  }

  onIsAuthed(payload) {
    appState.socketData = [...appState.socketData, payload]
  }
}

export const socketService = new SocketService()
