import { combineReducers } from 'redux'
import isLoading from './isLoading'
import giftee from './giftee'
import users from './users'
import wishList from './wishList'
import gifts from './gifts'

// import otherReducer from './other-reducer'

export default combineReducers({
  isLoading,
  giftee,
  users,
  wishList,
  gifts
})
