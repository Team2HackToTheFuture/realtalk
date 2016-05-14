import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    searchTerm: {
      refreshModel: true
    }
  },

  model: function(params) {
    return   this.store.findAll('lesson-plan').then(function(lessons) {
        return lessons.filter(function(lesson) {
          return lesson.get('title').includes(params.searchTerm);
        });
      });
  }
});
