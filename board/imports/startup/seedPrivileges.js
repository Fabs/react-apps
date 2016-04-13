import Users from '/imports/api/collections/users.js';

const seedPrivileges = function(){
  const fabs_id = '10154056074557071';
  const query = {'services.facebook.id': fabs_id, status: {$ne: 'admin'}};

  console.log('ADMIN', Meteor.users.find().count());
  Meteor.users.update(query, {$set: {status: 'admin'}});
};

export { seedPrivileges };