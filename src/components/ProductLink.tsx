import React, { useEffect, useState } from 'react'
import { Article } from '../types/Article'
import { ThunkDispatch } from 'redux-thunk'
import { AppActions } from '../types/actions'
import { bindActionCreators } from 'redux'
import { addProductToCart, addToCart, removeProductFromCart } from '../actions/cart'
import { connect } from 'react-redux'

interface ProductLinkProps {
  product: Article
}

type Props = ProductLinkProps & LinkDispatchProps

const ProductLink: React.FC<Props> = ({ product, addToCart, removeProductFromCart }) => {
  const [quantity, setQuantity] = useState<number>(0)

  useEffect(() => {
    if (quantity > 0) {
      addToCart({ ...product, quantity })
    }
  }, [quantity])

  const add = (): void => {
    if (quantity >= product.availableQuantity) return
    setQuantity(quantity + 1)
  }

  const min = (): void => {
    if (quantity <= 1) {
      removeProductFromCart(product.id)
      setQuantity(0)
      return
    }
    setQuantity(quantity - 1)
  }

  return (
    <div className="md:w-1/3 xl:w-1/4 lg:w-1/3 flex flex-col">
      <span>
        <img
          className="hover:grow hover:shadow-lg"
          src="https://images.unsplash.com/photo-1555982105-d25af4182e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80"
          alt=""
        />
        <div className="pt-3 flex items-center justify-between">
          <p className="">{product.prodName}</p>
          <div className="flex border border-black rounded-md">
            <button className="flex items-center px-2 py-1" onClick={(): void => min()}>
              -
            </button>
            <span className="py-1 px-4 mx-auto">{quantity}</span>
            <button className="flex items-center py-1 px-2" onClick={(): void => add()}>
              +
            </button>
          </div>
        </div>
        <p className="pt-1 text-gray-900">${product.price}</p>
        <p className="pt-1 text-gray-600">{product.category}</p>
      </span>
    </div>
  )
}

interface LinkDispatchProps {
  addToCart: (product: Article) => void
  removeProductFromCart: (id: number) => void
}

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AppActions>): LinkDispatchProps => ({
  addToCart: bindActionCreators(addToCart, dispatch),
  removeProductFromCart: bindActionCreators(removeProductFromCart, dispatch)
})

export default connect(null, mapDispatchToProps)(ProductLink)
