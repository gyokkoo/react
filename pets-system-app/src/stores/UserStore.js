import { EventEmitter } from 'events'
import dispatcher from '../dispatcher'
import UserActions from '../actions/UserActions'
import UserData from '../data/UserData'

class UserStore extends EventEmitter {
  register (user) {
    UserData
      .register(user)
      .then(data => this.emit(this.eventTypes.USER_REGISTERED, data))
  }

  handleAction (action) {
    switch (action.type) {
      case UserActions.types.REGISTER_USER: {
        this.register(action.user)
        break
      }
      default:
        break
    }
  }
}

let userStore = new UserStore()

userStore.eventTypes = {
  USER_REGISTERED: 'user_registered'
}

dispatcher.register(userStore.handleAction.bind(userStore))

export default userStore
