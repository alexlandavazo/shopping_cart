import { ADD_CREDIT_CARD, CreditCardActionType } from '../types/actions'
import { CreditCard } from '../types/CreditCard'

export const initialStateCreditCard: CreditCard = {
  nameOnCard: '',
  cardNumber: ''
}

const creditCardReducerDefaultState: CreditCard = initialStateCreditCard

const creditCardReducer = (state = creditCardReducerDefaultState, action: CreditCardActionType): CreditCard => {
  switch (action.type) {
    case ADD_CREDIT_CARD:
      return {
        ...state,
        ...action.creditCard
      }
    default:
      return state
  }
}

export { creditCardReducer }
