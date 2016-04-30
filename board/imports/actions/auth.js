// TODO: REFACTOR Login
function doLogin(user) {
  return {
    type: 'LOGIN',
    user,
  };
}

// TODO: REFACTOR Logout
function doLogout() {
  return {
    type: 'LOGOUT',
  };
}

function approve(user) {
  return function() {
    Meteor.call('approve.user', user);
  };
}

export {doLogin, doLogout, approve};
