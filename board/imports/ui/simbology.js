const symbols = {
  mess: {
    icon: 'trash outline',
    title: 'Bagunça',
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
};

function iconFor(key) {
  return symbols[key].icon;
}

function imageFor(key) {
  return `https://robohash.org/${key}`;
}

function nameFor(key) {
  return symbols[key].name;
}

export {iconFor, imageFor, nameFor};
