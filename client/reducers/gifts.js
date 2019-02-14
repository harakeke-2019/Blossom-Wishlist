const initialGiftState = ['placeholder for Cart data']

const gifts = (state = initialGiftState, action) => {
  switch (action.type) {
    case 'RECEIVING_GIFTS':
      return action.gifts
    default:
      return state
  }
}



export default gifts
