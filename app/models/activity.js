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
           "content": '<h1 style="text-align: center">How has law enforcement impacted minority communities?</h1><h3 class="text-light" style="text-align: left;"><span style="font-family: Verdana,Geneva,sans-serif;">Topics to Discuss</span></h3><ol><li>History of poverty and discrimination in St. Louis</li><li>Hiring practices of Law Enforcement organizations</li><li>Drug, Crime and Violence</li><li>Cycle of Poverty</li></ol><h3 class="text-light" style="text-align: left;"><span style="font-family: Verdana,Geneva,sans-serif;">Watch the Following Video</span>:</h3><p><span class="fr-video fr-dvb fr-draggable" contenteditable="false" draggable="true"><iframe width="640" height="360" src="//www.youtube.com/embed/Zfwjcz8irmU" frameborder="0" allowfullscreen=""></iframe></span></p><p><br></p><p><span style="font-size: 24px;">Discuss Similarities and Differences between these two images:</span></p><p><img class="fr-dib fr-draggable" src="http://s.newsweek.com/sites/www.newsweek.com/files/2014/11/26/rtr4fmcg.jpg" style="width: 413px; height: 275.333px;"><img class="fr-dib fr-draggable" src="http://farm2.static.flickr.com/1178/777893979_b5c55e5455.jpg" style="width: 411px; height: 308.25px;"></p><p><br></p>',       "lessonPlan": 1
       },
      {    "id": 2,
           "name": "Read 'History of Poverty in St. Louis' with group",
           "content": "<p>Testing</p>",
           "lessonPlan": 1
       }
   ]
});

export default Activity;