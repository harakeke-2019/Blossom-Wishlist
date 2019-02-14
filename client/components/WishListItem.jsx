import React from 'react'
import {connect} from 'react-redux'

class WishListItem extends React.Component {
  
  addToCart = () => {
    this.props.dispatch(getGiftID(this.props.id, this.props.item))
  }

  render () {
    return (
      <div>
        {this.props.wishList.item}
        <a href ='#' onClick = {this.addToCart}>Add To Cart</a>
      </div>
    )
  }
}

export default connect()(WishListItem)
