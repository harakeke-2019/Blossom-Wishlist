// import addgift
import React from 'react'
import { connect } from 'react-redux'
import { getWishList } from '../actions'
import WishListItem from './WishListItem'

class WishList extends React.Component {
  componentDidMount () {
    this.props.dispatch(getWishList(this.props.id))
  }

  render () {
    return (
      <div>
        Hello Users
        {this.props.wishList.map(wishList => {
          return <WishListItem wishList={wishList} key={wishList.item} />
        })}
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    wishList: state.wishList,
    id: state.giftee
  }
}

export default connect(mapStateToProps)(WishList)
