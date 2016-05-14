import Ember from 'ember';

export default Ember.Controller.extend({
  application: Ember.inject.controller(),

  actions: {
    login: function() {
      this.set('application.isLoggedIn', true);
      this.transitionToRoute('dashboard');
    }
  }
});
