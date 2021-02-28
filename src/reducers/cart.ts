import {
  ADD_PRODUCT_CART,
  ADD_TOTAL_CART,
  CartActionType,
  DELETE_CART,
  REMOVE_PRODUCT_CART,
  UPDATE_PRODUCT_CART
} from "../types/actions";
import { Cart } from "../types/Cart";

const initialStateCart: Cart = {
  products: [],
  total: 0,
  status: 'in_progress'
}

const cartReducerDefaultState: Cart = initialStateCart

const cartReducer = (state = cartReducerDefaultState, action: CartActionType): Cart => {
  switch (action.type) {
    case ADD_PRODUCT_CART: {
      return { ...state, products: [...state.products, action.product] }
    }
    case REMOVE_PRODUCT_CART: {
      const newListProducts = state.products.filter(product => product.id !== action.id)
      return { ...state, products: newListProducts }
    }
    case UPDATE_PRODUCT_CART: {
      const newListProducts = state.products.map(productInCart => {
        if (productInCart.id === action.product.id) return action.product
        return productInCart
      })
      return { ...state, products: newListProducts }
    }
    case ADD_TOTAL_CART:
      return { ...state, total: action.total }
    case DELETE_CART:
      return initialStateCart
    default:
      return state
  }
}

export { cartReducer }
