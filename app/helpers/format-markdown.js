// This is to make JSHint happy
/*global Showdown:false*/

import Ember from "ember";
// import Handlebars from "handlebars";

export default Ember.Handlebars.makeBoundHelper(function(markdown) {
  var showdown = new Showdown.converter(),
      html = showdown.makeHtml(markdown);

  // Interestingly, the tutorial suggested `Handlebars.SafeString(html)`, not
  // the subclass of Ember. Someone in the comments suggested resolving the
  // issue by manually installing Handlebars with bower.

  // This may be dangerous? Can showdown make dangerous html?
  return new Ember.Handlebars.SafeString(html);
});