import { CREATE_ORDER, OrderActionType } from '../types/actions'
import { Order } from '../types/Order'

export const createOrder = (order: Order): OrderActionType => ({
  type: CREATE_ORDER,
  order
})
