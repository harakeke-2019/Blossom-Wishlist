const initialLoadingState = true

const isLoading = (state = initialLoadingState, action) => {
  switch (action.type) {
    case 'REQUESTING_USERS':
      return true
    case 'RECEIVING_USERS':
      return false
    case 'REQUESTING_WISHLIST':
      return true
    case 'RECEIVING_WISHLIST':
      return false
    default:
      return state
  }
}

export default isLoading
