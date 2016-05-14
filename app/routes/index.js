import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    var isLoggedIn = this.controllerFor('application').get('isLoggedIn');
    if(isLoggedIn) {
      return this.transitionTo('dashboard');
    }
  }
});
