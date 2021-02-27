import React, { Dispatch, SetStateAction, useState } from 'react'
import { AppState } from '../store/configureStore'
import { ThunkDispatch } from 'redux-thunk'
import { AppActions } from '../types/actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { CreditCard } from '../types/CreditCard'
import { addCreditCard } from '../actions/creditCard'

interface CartCreditCardInfo {
  setIndexComponent: Dispatch<SetStateAction<number>>
}

type Props = LinkStateProps & LinkDispatch & CartCreditCardInfo

const CartCardInfo = ({ addCreditCard, setIndexComponent }: Props): JSX.Element => {
  const initialCreditCardValue: CreditCard = {
    cardNumber: '',
    nameOnCard: '',
    cvv: '',
    expirationYear: '',
    expirationMonth: ''
  }
  const [newCreditCard, setNewCreditCard] = useState<CreditCard>(initialCreditCardValue)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setNewCreditCard({ ...newCreditCard, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault()
    if (
      newCreditCard.nameOnCard === '' ||
      newCreditCard.cardNumber === '' ||
      newCreditCard.cvv === '' ||
      newCreditCard.expirationYear === '' ||
      newCreditCard.expirationMonth === ''
    )
      return
    const { nameOnCard, cardNumber } = newCreditCard,
      creditCard = { nameOnCard, cardNumber }
    addCreditCard(creditCard)
    setIndexComponent(3)
  }

  return (
    <form className=" p-5 bg-gray-800 rounded overflow-visible" onSubmit={handleSubmit}>
      <span className="text-xl font-medium text-gray-100 block pb-3">Card Details</span>{' '}
      <span className="text-xs text-gray-400 ">Card Type</span>
      <div className="overflow-visible flex justify-between items-center mt-2">
        <div className="rounded w-52 h-28 bg-gray-500 py-2 px-4 relative right-10">
          <span className="italic text-lg font-medium text-gray-200 underline">VISA</span>
          <div className="flex justify-between items-center pt-4 ">
            <span className="text-xs text-gray-200 font-medium">****</span>{' '}
            <span className="text-xs text-gray-200 font-medium">****</span>{' '}
            <span className="text-xs text-gray-200 font-medium">****</span>{' '}
            <span className="text-xs text-gray-200 font-medium">****</span>
          </div>
          <div className="flex justify-between items-center mt-3">
            <span className="text-xs text-gray-200">Alejandro Landavazo</span>
            <span className="text-xs text-gray-200">02/21</span>
          </div>
        </div>
        <div className="flex justify-center items-center flex-col">
          <img
            src="https://img.icons8.com/color/96/000000/mastercard-logo.png"
            width="40"
            className="relative right-5"
            alt=""
          />
          <span className="text-xs font-medium text-gray-200 bottom-2 relative right-5">mastercard.</span>
        </div>
      </div>
      <div className="flex justify-center flex-col pt-3">
        <label className="text-xs text-gray-400 ">Name on Card</label>
        <input
          type="text"
          value={newCreditCard.nameOnCard}
          name="nameOnCard"
          onChange={handleChange}
          className="focus:outline-none w-full h-3 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-2"
          placeholder="Alejandro Landavazo"
          required
        />
      </div>
      <div className="flex justify-center flex-col pt-3">
        <label className="text-xs text-gray-400 ">Card Number</label>
        <input
          type="text"
          name="cardNumber"
          value={newCreditCard.cardNumber}
          onChange={handleChange}
          className="focus:outline-none w-full h-3 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-2"
          placeholder="**** **** **** ****"
          required
        />
      </div>
      <div className="grid grid-cols-3 gap-2 pt-2 mb-3">
        <div className="col-span-2 ">
          <label className="text-xs text-gray-400">Expiration Date</label>
          <div className="grid grid-cols-2 gap-2">
            <input
              type="text"
              className="focus:outline-none w-full h-3 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-2"
              placeholder="mm"
              maxLength={2}
              value={newCreditCard.expirationMonth}
              name="expirationMonth"
              onChange={handleChange}
              required
            />
            <input
              type="text"
              className="focus:outline-none w-full h-3 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-2"
              placeholder="yyyy"
              maxLength={4}
              value={newCreditCard.expirationYear}
              name="expirationYear"
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="">
          <label className="text-xs text-gray-400">CVV</label>
          <input
            type="text"
            className="focus:outline-none w-full h-3 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-2"
            placeholder="XXX"
            maxLength={3}
            value={newCreditCard.cvv}
            name="cvv"
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <button className="h-12 w-full bg-blue-500 rounded focus:outline-none text-white hover:bg-blue-600">
        Check Out
      </button>
    </form>
  )
}

interface LinkStateProps {
  creditCard: CreditCard
}

const mapStateToProps = (expirationDay: AppState): LinkStateProps => ({
  creditCard: expirationDay.creditCard
})

interface LinkDispatch {
  addCreditCard: (creditCard: CreditCard) => void
}

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AppActions>): LinkDispatch => ({
  addCreditCard: bindActionCreators(addCreditCard, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(CartCardInfo)
