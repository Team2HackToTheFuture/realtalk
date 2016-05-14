import Ember from 'ember';

export default Ember.Controller.extend({
  application: Ember.inject.controller(),

  actions: {
    save_hw_data: function() {
      console.log('saving activities!');
    }
  }
});
