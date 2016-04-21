import Players from '/imports/api/collections/players.js';
import moment from 'moment';

//TODO: NOTE last update
const initialPlayers = [
  {name: 'barbara', legacy_points: 2-2},
  {name: 'felipe', legacy_points: 10+17-1+2},
  {name: 'fernando', legacy_points: 13},
  {name: 'fabs', legacy_points: 16+1-1},
  {name: 'jander', legacy_points: 12+6-1},
  {name: 'acarajé', legacy_points: 17+2-1},
  {name: 'thamila', legacy_points: 9-2},
  {name: 'william', legacy_points: 18+4-1},
  {name: 'lenise', legacy_points: 2+1-1},
  {name: 'edivaldo', legacy_points: 6+1-1},
  {name: 'dai', legacy_points: 1},
];

const seedPlayers = function(){
  if(Players.find().fetch() == 0){
    for(let i in initialPlayers){
      Transactions.insert({owner: "O UNIVERSO", type: 'coffee/bread', created_at: moment(), player: initialPlayers[i].name, points: initialPlayers[i].legacy_points });
      Players.insert(Object.assign(initialPlayers[i],{jokes: 0, coffee: 0, bread:0}));
    }
  }
}

//TODO: V3 Trigger without restart
export { seedPlayers };
