import React from 'react'
import { User } from '../types/User'
import { ThunkDispatch } from 'redux-thunk'
import { AppActions } from '../types/actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Address } from '../types/Address'
import { CreditCard } from '../types/CreditCard'
import { Cart } from '../types/Cart'
import { Order } from '../types/Order'
import { createOrder } from '../actions/order'

interface CartUserInfoProps {
  cart: Cart
  user: User
  address: Address
  creditCard: CreditCard
}

type Props = LinkDispatch & CartUserInfoProps

const CartOrderSummaryInfo = ({ user, cart, creditCard, address, createOrder }: Props): JSX.Element => {
  const handleClick = (): void => {
    const order: Order = {
      address: address,
      products: cart.products,
      user: user,
      total: cart.total || 0,
      creditCard: creditCard
    }
    createOrder(order)
  }

  return (
    <div className="mt-4">
      <div className="flex justify-between mt-10 mb-5">
        <span className="font-semibold text-sm uppercase">User:</span>
        <span className="font-semibold text-sm">{user.userName}</span>
      </div>
      <div className="flex justify-between mt-10 mb-5">
        <span className="font-semibold text-sm uppercase">Address:</span>
        <span className="font-semibold text-sm">{address.fullAddress}</span>
      </div>
      <div className="flex justify-between mt-10 mb-5">
        <span className="font-semibold text-sm uppercase">City:</span>
        <span className="font-semibold text-sm">
          {address.city}, {address.state}
        </span>
      </div>
      <div className="flex justify-between mt-10 mb-5">
        <span className="font-semibold text-sm uppercase">Credit Card:</span>
        <span className="font-semibold text-sm">
          {' '}
          ***** {creditCard.cardNumber.substr(creditCard.cardNumber.length - 4)}
        </span>
      </div>
      <div className="flex justify-between mt-10 mb-5">
        <span className="font-semibold text-sm uppercase">TOTAL:</span>
        <span className="font-semibold text-sm">${cart.total}</span>
      </div>
      <div className="border-t mt-8">
        <button
          className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full"
          onClick={handleClick}
        >
          Finalize the payment
        </button>
      </div>
    </div>
  )
}

interface LinkDispatch {
  createOrder: (order: Order) => void
}

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AppActions>): LinkDispatch => ({
  createOrder: bindActionCreators(createOrder, dispatch)
})

export default connect(null, mapDispatchToProps)(CartOrderSummaryInfo)
