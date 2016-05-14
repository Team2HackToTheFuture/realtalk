import Ember from 'ember';

export default Ember.Component.extend({

  froalaEditor: {
    params: {
      height: '400px',
    }
  },

  actions: {
  // For more events refer: 'https://www.froala.com/wysiwyg-editor/docs/events'
    contentChanged: function(event, editor) {
      var html = editor.$oel.froalaEditor('html.get');
      this.set('model.content', html);
    }
  }
});