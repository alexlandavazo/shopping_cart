import { ADD_ADDRESS, AddressActionType } from '../types/actions'
import { Address } from '../types/Address'

export const addAddress = (address: Address): AddressActionType => ({
  type: ADD_ADDRESS,
  address
})
