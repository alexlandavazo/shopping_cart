import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import CartProductListed from '../components/CartProductListed'
import { AppState } from '../store/configureStore'
import { Cart } from '../types/Cart'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getTotalOfProducts } from '../actions/cart'
import { ThunkDispatch } from 'redux-thunk'
import { AppActions } from '../types/actions'
import { Article } from '../types/Article'
import CartUserInfo from '../components/CartUserInfo'
import CartAddressInfo from '../components/CartAddressInfo'
import { Address } from '../types/Address'
import { User } from '../types/User'
import CartCreditCardInfo from '../components/CartCreditCardInfo'
import CartOrderSummaryInfo from "../components/CartOrderSummaryInfo";
import { CreditCard } from "../types/CreditCard";

type Props = LinkStateProps & LinkDispatchProps

const CartView = ({ cart, getTotalOfProducts, user, address, creditCard }: Props): JSX.Element => {
  useEffect(() => {
    getTotalOfProducts(cart.products)
  }, [])

  const [indexComponent, setIndexComponent] = useState<number>(0)

  const RenderComponent = (): JSX.Element => {
    switch (indexComponent) {
      case 0:
        return <CartUserInfo setIndexComponent={setIndexComponent} />
      case 1:
        return <CartAddressInfo setIndexComponent={setIndexComponent} />
      case 2:
        return <CartCreditCardInfo setIndexComponent={setIndexComponent} />
      case 3:
        return <CartOrderSummaryInfo cart={cart} address={address} creditCard={creditCard} user={user} />
      default:
        return <CartUserInfo setIndexComponent={setIndexComponent} />
    }
  }

  return (
    <div className="container mx-auto mt-10 font-sans w-full">
      <div className="flex shadow-md my-10">
        <div className="w-3-4 bg-white px-10 py-10">
          <div className="flex justify-between border-b pb-8">
            <h1 className="font-semibold text-2xl">Shopping Cart</h1>
            <h2 className="font-semibold text-2xl">{cart.products.length} Items</h2>
          </div>
          <div className="flex mt-10 mb-5">
            <h3 className="font-semibold text-gray-600 text-xs uppercase w-2-5">Product Details</h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1-5 text-center">Quantity</h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1-5 text-center">Price</h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1-5 text-center">Total</h3>
          </div>
          {cart.products.map(product => (
            <CartProductListed product={product} key={product.id} />
          ))}
          <Link to="/">
            <span className="flex font-semibold text-indigo-600 text-sm mt-10">
              <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512">
                <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
              </svg>
              Continue Shopping
            </span>
          </Link>
        </div>
        <div id="summary" className="w-1-4 px-8 py-10 bg-gray-100">
          <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
          <RenderComponent />
        </div>
      </div>
    </div>
  )
}
interface LinkDispatchProps {
  getTotalOfProducts: (products: Article[]) => void
}

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AppActions>): LinkDispatchProps => ({
  getTotalOfProducts: bindActionCreators(getTotalOfProducts, dispatch)
})

interface LinkStateProps {
  cart: Cart
  user: User
  address: Address
  creditCard: CreditCard
}

const mapStateToProps = (state: AppState): LinkStateProps => ({
  cart: state.cart,
  user: state.user,
  address: state.address,
  creditCard: state.creditCard
})

export default connect(mapStateToProps, mapDispatchToProps)(CartView)
