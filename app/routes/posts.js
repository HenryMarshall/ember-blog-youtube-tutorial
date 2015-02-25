import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    // This.store goes through ember-data
    return this.store.find('post');
  }
});