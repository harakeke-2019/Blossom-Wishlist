const initialWishGiftState = []

const users = (state = initialWishGiftState, action) => {
  switch (action.type) {
    case 'RECEIVING_WISHLIST':
      return action.wishList
    default:
      return state
  }
}

export default users
