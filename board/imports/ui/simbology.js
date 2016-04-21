const iconFor = function(string){
  //TODO: REFACTOR hash keys
  return {'mess': 'trash outline', 'coffee': 'coffee', 'bread': 'food', 'coffee/bread': 'coffee', 'joke': 'frown', 'food': 'food', 'balance': 'money'}[string]
}

const imageFor = function(string){
  return "https://robohash.org/" + string;
}

export { iconFor, imageFor };