import React from 'react'
import { connect } from 'react-redux'
import CartItem from './CartItem'

class Gifts extends React.Component {
  render () {
    return (
      <div>
        {this.props.gifts.map((gift) => {
          return <CartItem key = {gift.name} gift = {gift}/>
        })}
        <a href ="#">Check Out</a>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    gifts: state.gifts,
    giftee: state.giftee
  }
}

export default connect(mapStateToProps)(Gifts)
