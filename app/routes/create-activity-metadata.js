import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
      return this.store.createRecord('lesson-plan', {
          id: 999,
          title: "Right vs Left: Modern Politics",
          groupSize: 20,
          subject: "Politics",
          gradeLevel: '8th'
      });
  },
});
