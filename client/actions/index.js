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
      .get(`${apiUrl}/wishList/${id}`)
      .then(res => {
        const wishList = res.body
        dispatch(receivedWishList(wishList))
      })
  }
}

export const addToCart = (wish) => {
  return {
    type: 'ADD_TO_CART',
    wish
  }
}

export const setGiftee = (giftee) => {
  return {
    type: 'SET_GIFTEE',
    giftee
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
    type: 'REQUESTING_WISHLIST'
  }
}

function receivedWishList (wishList) {
  return {
    type: 'RECEIVING_WISHLIST',
    wishList
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

// GIFT ACTIONS SECTION YO!!
export const getCart = () => {
  return function (dispatch) {
    dispatch(requestCart())
    request
      .get(`${apiUrl}/cart`)
      .then(res => {
        const cart = res.body
        dispatch(updateCart(cart))
      })
  }
}

export const checkOutGifts = (gifts) => {
  return function (dispatch) {
    request.post('http://localhost:3000/api/updateGifts')
      .send(gifts)
      .then(() => {
        dispatch(clearCart())
      })
      .catch(err => {
        console.error(err)
      })
  }
}

function clearCart () {
  return {
    type: 'CLEAR_CART'
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

export function requestCart () {
  return {
    type: 'REQUEST_CART'
  }
}

export function updateCart (cart) {
  return {
    type: 'RECEIVING_CART',
    cart
  }
}
