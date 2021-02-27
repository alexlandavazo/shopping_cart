import React, { Dispatch, SetStateAction, useState } from "react";
import { User } from '../types/User'
import { AppState } from '../store/configureStore'
import { ThunkDispatch } from 'redux-thunk'
import { AppActions } from '../types/actions'
import { bindActionCreators } from 'redux'
import { addUser } from '../actions/user'
import { connect } from 'react-redux'

interface CartUserInfoProps {
  setIndexComponent: Dispatch<SetStateAction<number>>
}

type Props = LinkStateProps & LinkDispatch & CartUserInfoProps

const CartUserInfo = ({ addUser, user, setIndexComponent}: Props): JSX.Element => {
  const initialUserValue: User = {
    userName: '',
    email: '',
    mobile: ''
  }
  const [newUser, setNewUser] = useState<User>(initialUserValue)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setNewUser({ ...newUser, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault()
    if (newUser.mobile === '' || newUser.userName === '' || newUser.email === '') return
    addUser(newUser)
    setIndexComponent(1)
  }

  return (
    <form className="mt-4" onSubmit={handleSubmit}>
      <label htmlFor="userName" className="font-semibold inline-block my-2 text-sm uppercase">
        Name:
      </label>
      <input
        type="text"
        id="userName"
        name="userName"
        placeholder="Enter your name"
        className="p-2 text-sm w-full"
        value={newUser.userName}
        onChange={handleChange}
        required={true}
      />
      <label htmlFor="email" className="font-semibold inline-block my-2 text-sm uppercase">
        Email:
      </label>
      <input
        type="text"
        id="email"
        name="email"
        placeholder="Enter your email"
        value={newUser.email}
        className="p-2 text-sm w-full"
        onChange={handleChange}
        required={true}
      />
      <label htmlFor="mobile" className="font-semibold inline-block my-2 text-sm uppercase">
        Mobile
      </label>
      <input
        type="text"
        id="mobile"
        name="mobile"
        placeholder="Enter your phone"
        className="p-2 text-sm w-full"
        value={newUser.mobile}
        onChange={handleChange}
        required={true}
      />
      <div className="border-t mt-8">
        <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
          Save User
        </button>
      </div>
    </form>
  )
}

interface LinkStateProps {
  user: User
}

const mapStateToProps = (state: AppState): LinkStateProps => ({
  user: state.user
})

interface LinkDispatch {
  addUser: (user: User) => void
}

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AppActions>): LinkDispatch => ({
  addUser: bindActionCreators(addUser, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(CartUserInfo)
