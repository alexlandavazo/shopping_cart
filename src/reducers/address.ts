import { ADD_ADDRESS, AddressActionType } from '../types/actions'
import { Address } from '../types/Address'

export const initialStateAddress: Address = {
  name: '',
  city: '',
  fullAddress: '',
  state: '',
  zip: ''
}

const addressReducerDefaultState: Address = initialStateAddress

const addressReducer = (state = addressReducerDefaultState, action: AddressActionType): Address => {
  switch (action.type) {
    case ADD_ADDRESS:
      return {
        ...state,
        ...action.address
      }
    default:
      return state
  }
}

export { addressReducer }
