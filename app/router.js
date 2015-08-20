import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('home', {path: '/'}, function(){
      this.resource('learn');
      this.resource('leaderboard');
	});
  this.resource('myProfile');
  this.resource('messages');
  this.resource('tracks');
  this.resource('library', function(){
	    this.resource('display');
	});
  //Route for all blog templates
  this.route('blog');
  this.resource('settings');
  this.resource('support', function(){
      this.resource('contact');
      this.resource('documentation');
	});
  this.resource('post', function(){
    this.resource('comments');
  });
});

export default Router;
