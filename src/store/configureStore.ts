import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk, { ThunkMiddleware } from 'redux-thunk'
import { AppActions } from '../types/actions'
import { userReducer } from '../reducers/users'
import { articlesReducer } from '../reducers/articles'
import { cartReducer } from '../reducers/cart'
import { addressReducer } from '../reducers/address'
import { creditCardReducer } from '../reducers/creditCard'
import { orderReducer } from '../reducers/order'

export const rootReducer = combineReducers({
  user: userReducer,
  articles: articlesReducer,
  cart: cartReducer,
  address: addressReducer,
  creditCard: creditCardReducer,
  order: orderReducer
})


export type AppState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>))
