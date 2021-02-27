import { User } from './User'
import { Article } from './Article'
import { Address } from './Address'
import { CreditCard } from './CreditCard'
import { Order } from './Order'

export const ADD_USER = 'ADD_USER'

export interface AddUserAction {
  type: typeof ADD_USER
  user: User
}

export type UserActionTypes = AddUserAction

export const SET_ALL_ARTICLES = 'SET_ALL_ARTICLES'

export interface SetAllArticlesAction {
  type: typeof SET_ALL_ARTICLES
  articles: Article[]
}

export type ArticlesActionType = SetAllArticlesAction

export const ADD_PRODUCT_CART = 'ADD_PRODUCT_CART'
export const REMOVE_PRODUCT_CART = 'REMOVE_PRODUCT_CART'
export const UPDATE_PRODUCT_CART = 'UPDATE_PRODUCT_CART'
export const ADD_TOTAL_CART = 'ADD_TOTAL_CART'

export interface AddProductCartAction {
  type: typeof ADD_PRODUCT_CART
  product: Article
}

export interface RemoveProductCartAction {
  type: typeof REMOVE_PRODUCT_CART
  id: number
}

export interface UpdateProductCartAction {
  type: typeof UPDATE_PRODUCT_CART
  product: Article
}

export interface AddTotalCartAction {
  type: typeof ADD_TOTAL_CART
  total: number
}

export type CartActionType =
  | AddProductCartAction
  | RemoveProductCartAction
  | UpdateProductCartAction
  | AddTotalCartAction

export const ADD_ADDRESS = 'ADD_ADDRESS'

export interface AddAddressAction {
  type: typeof ADD_ADDRESS
  address: Address
}

export type AddressActionType = AddAddressAction

export const ADD_CREDIT_CARD = 'ADD_CREDIT_CARD'

export interface AddCreditCardAction {
  type: typeof ADD_CREDIT_CARD
  creditCard: CreditCard
}

export type CreditCardActionType = AddCreditCardAction

export const CREATE_ORDER = 'CREATE_ORDER'

export interface CreateOrderAction {
  type: typeof CREATE_ORDER
  order: Order
}

export type OrderActionType = CreateOrderAction

export type AppActions = UserActionTypes &
  ArticlesActionType &
  CartActionType &
  AddressActionType &
  CreditCardActionType &
  OrderActionType
