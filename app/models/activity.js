import Model from 'ember-data/model';

export default Model.extend({
    lessonPlan: DS.belongsTo('lesson-plan'),
    name: DS.attr('string'),
    content: DS.attr('string'),
    type: DS.attr('string')
});
