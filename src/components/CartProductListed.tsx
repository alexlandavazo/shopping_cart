import React from 'react'
import CardProductInfo from './CartProductInfo'
import { Article } from '../types/Article'

interface Props {
  product: Article
}

const CartProductListed = ({ product }: Props): JSX.Element => {
  const getTotalPrice = (): number => {
    const price = +product.price
    const quantity = product.quantity || 0
    return price * quantity
  }
  return (
    <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
      <div className="flex w-2-5">
        <div className="w-20 mr-8">
          <div className="h-24 w-24 bg-gray-200" />
        </div>
        <CardProductInfo product={product} />
      </div>
      <div className="flex justify-center w-1-5">
        <button className="w-4 h-4 my-auto">
          <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
            <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
          </svg>
        </button>
        <span className="mx-2 text-center w-8 h-6 my-auto">{product.quantity}</span>
        <button className="w-4 h-4 my-auto">
          <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
            <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
          </svg>
        </button>
      </div>
      <span className="text-center w-1-5 font-semibold text-sm my-auto">${product.price}</span>
      <span className="text-center w-1-5 font-semibold text-sm my-auto">${getTotalPrice()}</span>
    </div>
  )
}
export default CartProductListed
