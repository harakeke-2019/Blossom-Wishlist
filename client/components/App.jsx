import React from 'react'
import Users from './Users'
import Cart from './Cart'
import WishList from './WishList'
import AddGift from './AddGift'
import { connect } from 'react-redux'

const App = (props) => {
  return (
    <div>
      <Users />
      <Cart />
      {props.id && <WishList />}
      <AddGift />

    </div>
  )
}

function mapStateToProps (state) {
  return {
    id: state.giftee
  }
}

export default connect(mapStateToProps)(App)
