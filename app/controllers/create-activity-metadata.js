import Ember from 'ember';

export default Ember.Controller.extend({
  application: Ember.inject.controller(),

  actions: {
    saveMetadata: function() {
      this.transitionToRoute('create-activity-homework-activities', this.get("model.id"));
    }
  }
});
