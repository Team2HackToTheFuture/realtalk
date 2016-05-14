import Model from 'ember-data/model';
import { belongsTo } from 'ember-data/relationships';
import attr from 'ember-data/attr';

export default Model.extend({
    lessonPlan: belongsTo('lesson-plan'),
    name: attr('string'),
    content: attr('string'),
    type: attr('string')
});
