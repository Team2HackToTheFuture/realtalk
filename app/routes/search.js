import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    searchTerm: {
      refreshModel: true
    }
  },

  model: function(params) {
    return   [
        {'title': 'blah'},
        {'title': 'black'}
      ].filter(function(lesson) {
        return lesson.title.includes(params.searchTerm);
      });
  }
});
