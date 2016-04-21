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

const approve = (user) => {
  return {
    type: 'APPROVE_MODERATION',
    user: user,
  }
}

export { doLogin, doLogout, approve };
