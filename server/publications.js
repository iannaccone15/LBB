/*Meteor.publish('posts', function(options) { 
  check(options, {
    sort: Object,
    limit: Number
  });
  return Posts.find({}, options);
});*/

//more secure option
Meteor.publish('posts', function(sort, limit) {
  return Posts.find({}, {sort: sort, limit: limit});
});

Meteor.publish('singlePost', function(id) {
  check(id, String)
  return Posts.find(id);
});

Accounts.config({
  forbidClientAccountCreation : true
});