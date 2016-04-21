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

const moderatables = (state = [], action) => {
  switch(action.type) {
    case 'FLUSH_MODERATION':
      return action.users;
    default:
      return state;
  }
}

export { auth, moderatables };
