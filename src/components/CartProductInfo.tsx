import React from 'react'
import { Article } from '../types/Article'
interface Props {
  product: Article
}

const CardProductInfo = ({ product }: Props): JSX.Element => {
  return (
    <div className="flex flex-col justify-between ml-4 flex-grow capitalize">
      <span className="font-bold text-sm">{product.prodName}</span>
      <span className="text-blue-800 text-xs">{product.category}</span>
      {product.category === 'APPAREL' ? (
        <div className="flex flex-col justify-between flex-grow">
          <span className="text-blue-500 text-xs">{product.type}</span>
          <span className="text-blue-500 text-xs">{product.brand}</span>
          <span className="text-blue-500 text-xs">{product.design}</span>
        </div>
      ) : (
        <div className="flex flex-col justify-between flex-grow">
          <span className="text-blue-500 text-xs">{product.genre}</span>
          <span className="text-blue-500 text-xs">{product.author}</span>
          <span className="text-blue-500 text-xs">{product.publications}</span>
        </div>
      )}
    </div>
  )
}

export default CardProductInfo
