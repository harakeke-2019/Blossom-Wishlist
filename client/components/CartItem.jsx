import React from 'react'

export default class WishListItem extends React.Component {
  render () {
    return (
      <div>
        {this.props.gift.item}
      </div>
    )
  }
}
