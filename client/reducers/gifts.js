const initialGiftState = []

const gifts = (state = initialGiftState, action) => {
  switch (action.type) {
    case 'RECEIVING_GIFTS':
      return action.gifts
    case 'ADD_TO_CART':
      return [...state, action.wish]
    default:
      return state
  }
}

export default gifts
