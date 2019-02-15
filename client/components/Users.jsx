import React from 'react'
import {connect} from 'react-redux'
import {getUsers} from '../actions'
import User from './User'

class Users extends React.Component {
  componentDidMount () {
    this.props.dispatch(getUsers())
  }

  render () {
    return (
      <div>
        {this.props.users && this.props.users.map(user => {
          return <User user={user} key={user.name}/>
        })}
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps)(Users)
