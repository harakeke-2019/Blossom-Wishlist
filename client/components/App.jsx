import React from 'react'
import Users from './Users'
import Cart from './Cart'
import WishList from './WishList'
import AddGift from './AddGift'
import {connect} from 'react-redux'

const App = (props) => {
  return (
    <body className= "background">
      <header className= "navbar">BLOSSOMS AWESOME CHRISTMAS WISHLIST APP</header>
      <div className="row">
        <div className="column left" ><h2>USERS</h2>
          <p><Users /></p>
        </div>
        <div className="column right"><h2>WISH LIST </h2>
          <p>{props.giftee !== 0 && <WishList />}</p>
          <p><AddGift /></p>
        </div>
        <div className="column middle"><h2>CART</h2>
          <p><Cart /></p>
        </div>
      </div>
    </body>

  )
}

function mapStateToProps (state) {
  return {
    giftee: state.giftee
  }
}

export default connect(mapStateToProps)(App)
