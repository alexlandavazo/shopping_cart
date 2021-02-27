import { ADD_USER, UserActionTypes } from '../types/actions'
import { User } from '../types/User'

export const addUser = (user: User): UserActionTypes => ({
  type: ADD_USER,
  user
})
