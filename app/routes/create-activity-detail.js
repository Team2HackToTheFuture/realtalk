import Ember from 'ember';

export default Ember.Route.extend({

    model: function() {
        return this.store.createRecord('activity', {
            "name": "Donald Trump and 21st Century Politics"
        });
    },
});
