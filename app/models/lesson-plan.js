import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

var LessonPlan =  Model.extend({
    title:  attr('string'),
    gradeLevel: attr('string'),
    groupSize: attr('number'),
    subject: attr('string'),
    materials: attr('string'),
    activities: hasMany('activity')
});


LessonPlan.reopenClass({
   FIXTURES: [
    {
      id: 1,
      title: "Ferguson Violence"
    },
   {
      id: 2,
      title: "Chance the Rapper's Impact on Modern Hip-Hop"
    }
   ]
});

export default LessonPlan;
