import Ember from 'ember';

export default Ember.Controller.extend({
  application: Ember.inject.controller(),

  actions: {
    saveMetadata: function() {
      this.transitionToRoute('create-activity-homework-activities');
    }
  }

  // title:  "",
  // gradeLevel: "",
  // groupSize: 0,
  // subject: "",
  // materials: "",
  // activities: []
});
