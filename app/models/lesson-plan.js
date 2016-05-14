import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

var LessonPlan =  Model.extend({
    title:  attr('string'),
    gradeLevel: attr('string'),
    groupSize: attr('number'),
    subject: attr('string'),
    materials: attr('string'),
    activities: hasMany('activity'),
    rating: attr('number'),

    ratingStars: function() {
        var ratingStars = '';
        for(var x=0; x <this.get('rating'); x++) {
            ratingStars += '<span class="glyphicon glyphicon-star"></span>';
        }
        return ratingStars;
    }.property('rating')
});


LessonPlan.reopenClass({
   FIXTURES: [{
       id: 1,
       title: "Ferguson Violence",
       subject: "Social Studies",
       groupSize: 10,
       rating: 5,
       materials: "5 Markers"
    },
   {
        id: 2,
        title: "Chance the Rapper's Impact on Modern Hip-Hop",
        subject: "Music",
        groupSize: 30,
        rating: 4,
        materials: "1 iPod"
    }
   ]
});

export default LessonPlan;
