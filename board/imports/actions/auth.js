const doLogin = (user) => {
  return {
    type: 'LOGIN',
    user
  }
}

const doLogout = () => {
  return {
    type: 'LOGOUT'
  }
}
export { doLogin, doLogout };
