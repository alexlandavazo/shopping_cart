import { CreditCard } from './CreditCard'
import { Address } from './Address'
import { User } from './User'
import { Article } from './Article'

export interface Order {
  creditCard: CreditCard
  user: User
  address: Address
  products: Article[]
  total: number
}
