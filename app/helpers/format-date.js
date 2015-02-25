// This is to make JSHint happy. It is read despite being a comment.
/*global moment:false*/

import Ember from "ember";

export default Ember.Handlebars.makeBoundHelper(function(date) {
  return moment(date).fromNow();
});