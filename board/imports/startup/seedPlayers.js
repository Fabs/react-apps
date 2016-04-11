import Players from '/imports/api/collections/players.js';
import moment from 'moment';

const initialPlayers = [
  {name: 'barbara', legacy_points: 1+1},
  {name: 'felipe', legacy_points: 10},
  {name: 'fernando', legacy_points: 6+5+2},
  {name: 'fabs', legacy_points: 11+1+4},
  {name: 'jander', legacy_points: 11+1},
  {name: 'acarajé', legacy_points: 11+3+3},
  {name: 'thamila', legacy_points: 7+2},
  {name: 'william', legacy_points: 14+4},
  {name: 'lenise', legacy_points: 2},
  {name: 'edivaldo', legacy_points: 4+2},
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
