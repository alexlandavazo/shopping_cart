import React, { Dispatch, SetStateAction, useState } from 'react'
import { AppState } from '../store/configureStore'
import { ThunkDispatch } from 'redux-thunk'
import { AppActions } from '../types/actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Address } from '../types/Address'
import { addAddress } from '../actions/address'

interface CartAddressInfoProps {
  setIndexComponent: Dispatch<SetStateAction<number>>
}

type Props = LinkStateProps & LinkDispatch & CartAddressInfoProps

const CartAddressInfo = ({ addAddress, setIndexComponent }: Props): JSX.Element => {
  const initialAddressValue: Address = {
    name: '',
    zip: '',
    state: '',
    city: '',
    fullAddress: ''
  }
  const [newAddress, setNewAddress] = useState<Address>(initialAddressValue)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setNewAddress({ ...newAddress, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault()
    if (
      newAddress.name === '' ||
      newAddress.city === '' ||
      newAddress.zip === '' ||
      newAddress.state === '' ||
      newAddress.fullAddress === ''
    )
      return
    addAddress(newAddress)
    setIndexComponent(2)
  }

  return (
    <form className="mt-4" onSubmit={handleSubmit}>
      <label htmlFor="" className="font-semibold inline-block my-2 text-sm uppercase">
        Name:
      </label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Enter your name"
        className="p-2 text-sm w-full"
        value={newAddress.name}
        onChange={handleChange}
        required={true}
      />
      <label htmlFor="fullAddress" className="font-semibold inline-block my-2  text-sm uppercase">
        Full Address:
      </label>
      <input
        type="text"
        id="fullAddress"
        name="fullAddress"
        placeholder="Full Address"
        className="p-2 text-sm w-full"
        value={newAddress.fullAddress}
        onChange={handleChange}
        required={true}
      />
      <label htmlFor="city" className="font-semibold inline-block my-2 text-sm uppercase">
        City:
      </label>
      <input
        type="text"
        id="city"
        name="city"
        placeholder="Enter your city"
        value={newAddress.city}
        className="p-2 text-sm w-full"
        onChange={handleChange}
        required={true}
      />
      <label htmlFor="state" className="font-semibold inline-block my-2 text-sm uppercase">
        State:
      </label>
      <input
        type="text"
        id="state"
        name="state"
        placeholder="Enter your state"
        className="p-2 text-sm w-full"
        value={newAddress.state}
        onChange={handleChange}
        required={true}
      />
      <label htmlFor="zip" className="font-semibold inline-block my-2  text-sm uppercase">
        Zip:
      </label>
      <input
        type="text"
        id="zip"
        name="zip"
        placeholder="Zip"
        className="p-2 text-sm w-full"
        value={newAddress.zip}
        onChange={handleChange}
        required={true}
      />
      <div className="border-t mt-8">
        <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
          Save Address
        </button>
      </div>
    </form>
  )
}

interface LinkStateProps {
  address: Address
}

const mapStateToProps = (state: AppState): LinkStateProps => ({
  address: state.address
})

interface LinkDispatch {
  addAddress: (address: Address) => void
}

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AppActions>): LinkDispatch => ({
  addAddress: bindActionCreators(addAddress, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(CartAddressInfo)
