import { CREATE_ORDER, OrderActionType } from '../types/actions'
import { Order } from '../types/Order'
import { initialStateArticles } from './articles'
import { initialStateUser } from './users'
import { initialStateCreditCard } from './creditCard'
import { initialStateAddress } from './address'

export const initialStateOrder: Order = {
  address: initialStateAddress,
  creditCard: initialStateCreditCard,
  products: initialStateArticles,
  user: initialStateUser,
  total: 0
}

const orderReducerDefaultState: Order = initialStateOrder

const orderReducer = (state = orderReducerDefaultState, action: OrderActionType): Order => {
  switch (action.type) {
    case CREATE_ORDER:
      return {
        ...state,
        ...action.order
      }
    default:
      return state
  }
}

export { orderReducer }
