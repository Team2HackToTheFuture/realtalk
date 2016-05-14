import Ember from 'ember';
import LessonPlan from 'realtalk/models/lesson-plan';

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
