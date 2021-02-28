import React, { useState } from "react";
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
import { Modal } from './Modal'
import { deleteCart } from '../actions/cart';
import { Link } from 'react-router-dom'

interface CartUserInfoProps {
  cart: Cart
  user: User
  address: Address
  creditCard: CreditCard
}

type Props = LinkDispatch & CartUserInfoProps

const CartOrderSummaryInfo = ({ user, cart, creditCard, address, createOrder, deleteCart }: Props): JSX.Element => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleClick = (): void => {
    const order: Order = {
      address: address,
      products: cart.products,
      user: user,
      total: cart.total || 0,
      creditCard: creditCard
    }
    createOrder(order)
    setShowModal(true);
  }
  const resetCart = (): void => {
    deleteCart()
  }

  return (
    <>
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
      { showModal?
      <Modal>
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
          <span className="font-semibold text-sm uppercase">Products:</span>
            {cart.products.map(product => (
              <span className="font-semibold text-sm">{product.quantity} x {product.prodName}</span>
            ))}
        </div>
        <div className="flex justify-between mt-10 mb-5">
          <span className="font-semibold text-sm uppercase">TOTAL:</span>
          <span className="font-semibold text-sm">${cart.total}</span>
        </div>
        <Link onClick={() =>resetCart()} to="/">
          <span
            className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full"
          >
            GO TO HOME
          </span>
        </Link>
      </Modal>: null}
    </>
  )
}

interface LinkDispatch {
  createOrder: (order: Order) => void
  deleteCart: () =>void
}

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AppActions>): LinkDispatch => ({
  createOrder: bindActionCreators(createOrder, dispatch),
  deleteCart: bindActionCreators(deleteCart, dispatch)
})

export default connect(null, mapDispatchToProps)(CartOrderSummaryInfo)
