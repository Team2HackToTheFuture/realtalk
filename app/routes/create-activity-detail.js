import Ember from 'ember';

export default Ember.Route.extend({

    afterModel: function(resolvedModel) {
        var controller = this.controllerFor('create-activity-detail');
        controller.set('activity', this.store.createRecord('activity', {
            "name": "Donald Trump and 21st Century Politics",
            "lessonPlan": resolvedModel
        }));
    },
});
