import { Players } from '/imports/api/collections/players.js';

const initialPlayers = [
  {name: 'barbara', points: 1+1, jokes: 0},
  {name: 'felipe', points: 10, jokes: 0},
  {name: 'fernando', points: 6+5+2, jokes: 0},
  {name: 'fabs', points: 11+1+4, jokes: 0},
  {name: 'jander', points: 11+1, jokes: 0},
  {name: 'acarajé', points: 11+3+3, jokes: 0},
  {name: 'thamila', points: 7+2, jokes: 0},
  {name: 'william', points: 14+4, jokes: 0},
  {name: 'lenise', points: 2, jokes: 0},
  {name: 'edivaldo', points: 4+2, jokes: 0},
];

const seedPlayers = function(){
  if(Players.find().fetch() == 0){
    for(let i in initialPlayers){
      Players.insert(initialPlayers[i]);
    }
  }
}

export { seedPlayers };