import React from 'react'
import {connect} from 'react-redux'
import setGiftee from '../actions'

class User extends React.Component {
  
  handleClick =() =>{
    this.props.dispatch(setGiftee(this.props.user.id))
  }
  render () {
    return (
      <div>
        <a href='#'onClick = {this.handleClick}>{this.props.user.name}</a>
      </div>
    )
  }
}

export default connect()(User)
