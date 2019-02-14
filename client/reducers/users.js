const initialUsersState = []

const users = (state = initialUsersState, action) => {
  switch (action.type) {
    case 'RECEIVING_USERS':
      return action.users
    default:
      return state
  }
}

export default users
