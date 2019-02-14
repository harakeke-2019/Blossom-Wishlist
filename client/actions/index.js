// getUsers action
import request from 'superagent'
const apiUrl = 'http://localhost:3000/api'

export const getUsers = () => {
  return function (dispatch) {
    dispatch(requestUsers())
    request
      .get(`${apiUrl}/users`)
      .then(res => {
        const users = res.body
        dispatch(receivedUser(users))
      })
  }
}

export const getWishList = (id) => {
  return function (dispatch) {
    dispatch(requestWishList())
    request
      .get(`${apiUrl}/wishList`)
      .then(res => {
        const wishList = res.body
        dispatch(receivedWishList(wishList))
      })
  }
}

export default function setGiftee (id) {
  return {
    type: 'SET_GIFTEE',
    id
  }
}
function requestUsers () {
  return {
    type: 'REQUESTING_USERS'
  }
}

function receivedUser (users) {
  return {
    type: 'RECEIVING_USERS',
    users
  }
}

function requestWishList () {
  return {
    type: 'REQUESTING_WISHLIST',
    wishList
  }
}
function receivedWishList (wishList) {
  return {
    type: 'RECEIVING_WISHLIST',
    wishList
  }
}
