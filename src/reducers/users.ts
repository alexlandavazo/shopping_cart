import { ADD_USER, UserActionTypes } from '../types/actions'
import { User } from '../types/User'
export const initialStateUser: User = {
  email: '',
  userName: '',
  mobile: ''
}

const userReducerDefaultState: User = initialStateUser

const userReducer = (state = userReducerDefaultState, action: UserActionTypes): User => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        ...action.user
      }
    default:
      return state
  }
}

export { userReducer }
