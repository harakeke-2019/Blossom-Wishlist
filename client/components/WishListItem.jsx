import React from 'react'
import {connect} from 'react-redux'
import {addToCart} from '../actions'

class WishListItem extends React.Component {
  
  addToCart = () => {
    this.props.dispatch(addToCart(this.props.wish))
  }

  render () {
    return (
      <div>
        {this.props.wish.item}
        <a href ='#' onClick = {this.addToCart}>Add To Cart</a>        
      </div>
    )
  }
}

export default connect()(WishListItem)
