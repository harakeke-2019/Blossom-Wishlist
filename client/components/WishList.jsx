// import addgift
import React from 'react'
import { connect } from 'react-redux'
import WishListItem from './WishListItem'

class WishList extends React.Component {

  render () {
    return (
      <div>
        {`${this.props.giftee.name}'s Wishlist`}
        {this.props.wishList && this.props.wishList.map(wish => {
          return <WishListItem key={wish.item} wish={wish}/>
        })}
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    wishList: state.wishList,
    giftee: state.giftee
  }
}

export default connect(mapStateToProps)(WishList)
