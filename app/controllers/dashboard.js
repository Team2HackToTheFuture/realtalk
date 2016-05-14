import Ember from 'ember';

export default Ember.Controller.extend({
  application: Ember.inject.controller(),

  actions: {
    create: function() {
      this.transitionToRoute('create-activity-metadata');
    }
  }
});
