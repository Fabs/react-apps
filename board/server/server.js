import {seedPlayers} from '../imports/startup/seedPlayers.js';
import {seedPrivileges} from '../imports/startup/seedPrivileges.js';
import moment from 'moment-timezone';
//import StubCollections from 'meteor/hwillson:stub-collections';
import {StubCollections} from 'meteor/hwillson:stub-collections';

console.log('AHA', StubCollections);

Meteor.startup(() => {
  moment.tz.setDefault('America/Sao_Paulo');
  seedPlayers();
  seedPrivileges();
});

console.log('SERVER: v0.0.3');

// TODO: Tests Meteor
