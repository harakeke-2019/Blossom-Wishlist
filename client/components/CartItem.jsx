import React from 'react'

export default class CartItem extends React.Component {
  render () {
    return (
      <div>
        {this.props.gift.item}
      </div>
    )
  }
}
