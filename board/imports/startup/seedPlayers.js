import Players from '/imports/api/collections/players.js';
import moment from 'moment';

const initialPlayers = [
  {name: 'barbara', legacy_points: 2-1},
  {name: 'felipe', legacy_points: 10+17},
  {name: 'fernando', legacy_points: 13-1},
  {name: 'fabs', legacy_points: 16+1},
  {name: 'jander', legacy_points: 12+6},
  {name: 'acarajé', legacy_points: 17+2},
  {name: 'thamila', legacy_points: 9-1},
  {name: 'william', legacy_points: 18+4},
  {name: 'lenise', legacy_points: 2+1},
  {name: 'edivaldo', legacy_points: 6+1},
];

const seedPlayers = function(){
  if(Players.find().fetch() == 0){
    for(let i in initialPlayers){
      Transactions.insert({owner: "O UNIVERSO", type: 'coffee/bread', created_at: moment(), player: initialPlayers[i].name, points: initialPlayers[i].legacy_points });
      Players.insert(Object.assign(initialPlayers[i],{jokes: 0, coffee: 0, bread:0}));
    }
  }

  //Meteor.call('player.add_points', 'jander', 'coffee', 3)
  //Meteor.call('player.add_points', 'jander', 'joke', 2)
  //Meteor.call('player.add_points', 'acarajé', 'coffee', 2)
  //Meteor.call('player.add_points', 'will', 'coffee', 1)
  //Meteor.call('player.add_points', 'will', 'joke', 1)
}

export { seedPlayers };
