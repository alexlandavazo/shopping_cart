import { Article } from './Article'

export interface Cart {
  total?: number
  products: Article[]
  status: string
}
