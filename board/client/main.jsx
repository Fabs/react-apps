import { Meteor } from 'meteor/meteor';
import '/imports/startup/accounts-config.js';
import moment from 'moment';
import { run } from '/imports/startup/app.js'

Meteor.startup(() =>{
  moment.locale('pt-br');
  run();
})
