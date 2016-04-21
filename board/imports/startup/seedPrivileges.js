const seedPrivileges = function(){
  const fabs_id = '10154056074557071';
  const query = {'services.facebook.id': fabs_id, 'profile.status': {$ne: 'admin'}};

  console.info('ADMIN', Meteor.users.find({'services.facebook.id': fabs_id}).count());
  Meteor.users.update(query, {$set: {'profile.status': 'admin'}});
};

export { seedPrivileges };