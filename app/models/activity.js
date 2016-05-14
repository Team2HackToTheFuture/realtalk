import Model from 'ember-data/model';
import { belongsTo } from 'ember-data/relationships';
import attr from 'ember-data/attr';

var Activity =  Model.extend({
    lessonPlan: belongsTo('lesson-plan'),
    name: attr('string'),
    content: attr('string'),
    type: attr('string')
});


Activity.reopenClass({
   FIXTURES: [
       {    "id": 1,
           "name": "Discuss law enforcement culture in minority communities",
           "content": "<p>Testing</p>",
           "lessonPlan": 1
       },
      {    "id": 2,
           "name": "Read 'History of Poverty in St. Louis' with group",
           "content": "<p>Testing</p>",
           "lessonPlan": 1
       }
   ]
});

export default Activity;