import Ember from 'ember';

export default Ember.Route.extend({

    afterModel: function(resolvedModel) {
        var controller = this.controllerFor('create-activity-detail');
        controller.set('activity', this.store.createRecord('activity', {
            "name": "Donald Trump and 21st Century Politics",
            "lessonPlan": resolvedModel,
            "content": '<p style="text-align: left;"><span style="font-size: 30px;">Trump&apos;s use of Media</span></p><p style="text-align: left;"><span style="font-size: 30px;"><span class="fr-video fr-dvb fr-draggable" contenteditable="false" draggable="true"><iframe width="640" height="360" src="//www.youtube.com/embed/-GBnxfTkICs" frameborder="0" allowfullscreen=""></iframe></span></span><br></p><p style="text-align: left;"><span style="font-size: 30px;">Stance on Immigration&nbsp;</span></p><p style="text-align: left;"><a href="http://www.politico.eu/article/donald-trump-kisses-vladimir-putin-on-wall-of-lithuanian-restaurant-berlin-east-side-gallery/">Read Article</a></p><p style="text-align: left;">Discuss economic impact of lower immigration</p><p style="text-align: left;"><br></p><p style="text-align: left;"><span style="font-size: 30px;">Trump&apos;s Views on Women</span></p><p style="text-align: left;">Discuss the Following Image</p><p style="text-align: left;"><img class="fr-dib fr-draggable" src="http://cdn1.theodysseyonline.com/files/2015/08/08/635746660254877558482317236_donald%2520trump%2520and%2520his%2520women.imgopt1000x70.jpg" style="width: 501px; height: 312.29px;"></p><h1 style="text-align: center"><br></h1>'
        }));
    },
});
