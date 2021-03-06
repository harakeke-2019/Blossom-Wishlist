import React from 'react'
import {connect} from 'react-redux'
// import setGiftee from '../actions'
import {saveGift} from '../actions'

class AddGift extends React.Component {
  constructor(props) {
  super(props)
  this.state = {
    item: '',
    url: ''
   }
  }

  resetForm = (evt) => {
    this.setState({
      item: '',
      url: ''
    })
  } 

  handleChange = (evt) => {
      this.setState({
          [evt.target.name]: evt.target.value
      })
  }

  handleSubmit =(evt) => {
    const newGift = {
      item: this.state.item, 
      url: this.state.url, 
      id: this.props.giftee.id
    }
    this.props.dispatch(saveGift(newGift))
    this.resetForm()
  }

  render () {
    return (
      <div>
        Add Wish
        <br/>
        <br/>
        <input type='text' name='item' placeholder='gift' value={this.state.item} onChange={this.handleChange}/>
        <br/>
        <br/>
        <input type='text' name='url' placeholder='url' value={this.state.url} onChange={this.handleChange}/>
        <br/>
        <button type='submit' onClick={this.handleSubmit}>Submit</button>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    giftee: state.giftee
  }
}

export default connect(mapStateToProps)(AddGift)