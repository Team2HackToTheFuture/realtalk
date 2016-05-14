import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.route('register');
  this.route('dashboard');
  this.route('search');
  this.route('lesson-detail');
  this.route('activity-detail');
});

export default Router;
