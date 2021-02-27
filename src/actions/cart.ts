import {
  ADD_PRODUCT_CART,
  ADD_TOTAL_CART,
  CartActionType,
  REMOVE_PRODUCT_CART,
  UPDATE_PRODUCT_CART
} from '../types/actions'
import { Article } from '../types/Article'
import { store } from '../store/configureStore'

export const addProductToCart = (product: Article): CartActionType => ({
  type: ADD_PRODUCT_CART,
  product
})

export const removeProductFromCart = (id: number): CartActionType => ({
  type: REMOVE_PRODUCT_CART,
  id
})
export const updateProductFromCart = (product: Article): CartActionType => ({
  type: UPDATE_PRODUCT_CART,
  product
})

export const addTotalToCart = (total: number): CartActionType => ({
  type: ADD_TOTAL_CART,
  total
})

export const addToCart = (product: Article) => {
  return (dispatch: (arg0: CartActionType) => void): void => {
    const productExist = store.getState().cart.products.some(productInCart => productInCart.id === product.id)
    if (!productExist) {
      dispatch(addProductToCart(product))
    } else {
      dispatch(updateProductFromCart(product))
    }
  }
}
export const getTotalOfProducts = (products: Article[]) => {
  return (dispatch: (arg0: CartActionType) => void): void => {
    let total = 0
    products.map(product => {
      total += +product.price * product.quantity
    })
    dispatch(addTotalToCart(total))
  }
}
