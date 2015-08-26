import Ember from 'ember';

export default Ember.Route.extend({
    renderTemplate: 'blog',
	model: function() {
		return this.store.find('posts');
	},

});
	
