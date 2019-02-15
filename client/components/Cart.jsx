import React from 'react'
import { connect } from 'react-redux'
import CartItem from './CartItem'
import {checkOutGifts} from '../actions'

class Gifts extends React.Component {

  checkOut = () => {
    this.props.dispatch(checkOutGifts(this.props.gifts))
  }

  render () {
    return (
      <div>
        {this.props.gifts.map((gift) => {
          return <CartItem key = {gift.name} gift = {gift}/>
        })}
        <a href ="#" onClick={this.checkOut}>Check Out</a>
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
