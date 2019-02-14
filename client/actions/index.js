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

export const setGiftee = (id) => {
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

export const addToWishlist = (newGift) => {
  return {
    type: 'SAVE_GIFT',
    newGift
  }
}

export function saveGift (newGift) {
  return function (dispatch) {
    // we're optimistic ;)
    dispatch(requestGift())
    dispatch(addToWishlist(newGift))
    request.post('http://localhost:3000/api/addWish')
      .send(newGift)
      .then(() => {
        dispatch(receiveGift())
      })
      .catch(err => {
        dispatch(receiveGift())
        dispatch(removeFromWishlist(newGift.id))
        console.error(err)
      })
  }
}

function requestGift () {
  return {
    type: 'REQUESTING_GIFT'
  }
}

function receiveGift () {
  return {
    type: 'RECEIVING_GIFT'
  }
}

export const removeFromWishlist = id => {
  return {
    type: 'REMOVE_FROM_WISHLIST',
    id
  }
}
