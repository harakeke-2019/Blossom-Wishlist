import React from 'react'
import {connect} from 'react-redux'
// import {getGifts} from '../actions'
// import {requestGifts} from '../actions'
// import {receivedGifts} from '../actions'

class Gifts extends React.Component {

  render () {
    return (
      <div>
        CART: <br/>
        {this.props.gifts[0]}
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    gifts: state.gifts,
    id: state.id
  }
}

export default connect(mapStateToProps)(Gifts)
