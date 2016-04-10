const auth = (state = {}, action) => {
  switch(action.type) {
    case 'LOGIN':
      return {user: action.user, online: true}
    case 'LOGOUT':
      return {lastUser: state.user, online: false}
    default:
      return state;
  }
}

export { auth };