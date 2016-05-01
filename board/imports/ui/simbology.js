const symbols = {
  mess: {
    icon: 'trash outline',
    name: 'Bagunça',
  },
  coffee: {
    icon: 'coffee',
    name: 'Café',
  },
  bread: {
    icon: 'food',
    name: 'Pão',
  },
  'coffee/bread': {
    icon: 'coffee',
    name: 'Pão/Café',
  },
  joke: {
    icon: 'frown',
    name: 'Piada',
  },
  food: {
    icon: 'food',
    name: 'Pão',
  },
  balance: {
    icon: 'money',
    name: 'Créditos',
  },
  used: {
    icon: 'money',
    name: 'gasto',
  },
  total: {
    icon: 'trop',
    name: 'TOTAL',
  }
};

function iconFor(key) {
  if (symbols[key]) {
    return symbols[key].icon;
  } else {
    return 'bug';
  }
}

function nameFor(key) {
  if (symbols[key]) {
    return symbols[key].name;
  } else {
    return 'Oh no!';
  }
}

function imageFor(key) {
  return `http://difrbch1wo7lp.cloudfront.net/images/avatars/player_${key}.svg`;
}

export {iconFor, imageFor, nameFor};
