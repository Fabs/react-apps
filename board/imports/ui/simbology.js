const iconFor = function(key){
  //TODO: REFACTOR hash keys
  return {'mess': 'trash outline', 'coffee': 'coffee', 'bread': 'food',
    'coffee/bread': 'coffee', 'joke': 'frown', 'food': 'food',
    'balance': 'money', 'used': 'money'}[key]
}

const imageFor = function(key){
  return "https://robohash.org/" + key;
}

const nameFor = function(key){
  return {
    'coffee': 'Café',
    'joke': 'Piada',
    'mess': 'Bagunça',
    'bread': 'Pão',
    'coffee/bread': 'Pão/Café',
  }[key]
}
export { iconFor, imageFor, nameFor };
