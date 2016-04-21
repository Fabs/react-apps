//TODO: REFACTOR Login
const doLogin = (user) => {
  return {
    type: 'LOGIN',
    user
  }
}

//TODO: REFACTOR Logout
const doLogout = () => {
  return {
    type: 'LOGOUT'
  }
}

const approve = (user) => {
  return function(dispatch){
    Meteor.call('approve.user', user);
  }
}

export { doLogin, doLogout, approve };
