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
  this.route('lesson-detail', { path: '/lesson-detail/:lesson_id' });
  this.route('activity-detail', { path: '/activity-detail/:activity_id' });
  this.route('create-activity-metadata');
  this.route('create-activity-lesson-activities');
  this.route('create-activity-homework-activities', { path: '/create-activity-homework-activities/:lesson_plan_id'});
  this.route('create-activity-detail');
});

export default Router;
