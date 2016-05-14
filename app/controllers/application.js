import Ember from 'ember';

export default Ember.Controller.extend({
  isLoggedIn: false,

  removeBackground: function() {
   if(this.get('isLoggedIn')) {
     $('body').css('background-image', 'none');
     $('body').css('background-color', 'white');
     $('#title').css('text-shadow', 'none');
     $('#title').css('color', 'grey');
     $('#title').css('padding-top', '0px');
   }
 }.observes('isLoggedIn')
});
