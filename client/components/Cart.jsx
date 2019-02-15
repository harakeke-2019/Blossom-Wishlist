import React from 'react'
import {connect} from 'react-redux'

class Gifts extends React.Component {

  render () {
    return (
      <div>
        CART: <br/>
        {/* {this.props.gifts[0]} */}
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
