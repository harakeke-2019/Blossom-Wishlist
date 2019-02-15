const initialGifteeState = 0

const giftee = (state = initialGifteeState, action) => {
  switch (action.type) {
    case 'SET_GIFTEE':
      return action.giftee
    default:
      return state
  }
}
// some change
export default giftee
