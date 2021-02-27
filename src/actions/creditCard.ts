import { ADD_CREDIT_CARD, CreditCardActionType } from '../types/actions'
import { CreditCard } from '../types/CreditCard'

export const addCreditCard = (creditCard: CreditCard): CreditCardActionType => ({
  type: ADD_CREDIT_CARD,
  creditCard
})
