import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    var store = this.store;
    store.findAll('lesson-plan').then(function(lessons) {
      store.findAll('activity').then(function(activities) {
        lessons.objectAt(0).set('activities', activities);
      });
    });
    var isLoggedIn = this.controllerFor('application').get('isLoggedIn');
    if(isLoggedIn) {
      return this.transitionTo('dashboard');
    }
  }
});
