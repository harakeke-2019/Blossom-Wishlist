const initialWishGiftState = []

const users = (state = initialWishGiftState, action) => {
  switch (action.type) {
    case 'RECEIVING_WISHLIST':
      return action.wishList
    case 'SAVE_GIFT':
      return [...state, action.newGift]
    default:
      return state
  }
}

export default users
