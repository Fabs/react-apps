import {seedPlayers} from '../imports/startup/seedPlayers.js';
import {seedPrivileges} from '../imports/startup/seedPrivileges.js';
import moment from 'moment-timezone';

Meteor.startup(() => {
  moment.tz.setDefault('America/Sao_Paulo');
  seedPlayers();
  seedPrivileges();
});

console.log('SERVER: v0.0.3');

// TODO: Tests Meteor
