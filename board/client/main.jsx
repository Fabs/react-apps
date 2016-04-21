import { Meteor } from 'meteor/meteor';
import '/imports/startup/accounts-config.js';
import moment from 'moment';
import { run } from '/imports/startup/app.js'

//TODO: BUG in timezone
//TODO: Tests React
Meteor.startup(() =>{
  moment.locale('pt-br');
  run();
})
