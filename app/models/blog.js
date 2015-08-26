import DS from 'ember-data';

export default DS.Model.extend({
	img: DS.attri('string'),
	title: DS.attri('string'),
	author: DS.attri('string'),
	date: DS.attri('string'),
	description: {"intro": DS.attri('string'),
	               "body": DS.attri('string')}
  
});
