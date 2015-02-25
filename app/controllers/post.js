import Ember from "ember";

var PostController = {
  isEditing: false,
  actions: {
    edit: function() {
      this.set('isEditing', true);
    },

    doneEditing: function() {
      this.set('isEditing', false);
      // We should save here if we were actually persisting data.
    }
  }
};

export default Ember.ObjectController.extend(PostController);