import Model from 'ember-data/model';

export default Model.extend({
    title:  DS.attr('string'),
    gradeLevel: DS.attr('string'),
    groupSize: DS.attr('number'),
    subject: DS.attr('string'),
    materials: DS.attr('string'),
    activities: DS.hasMany('activity')
});

