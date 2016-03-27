import Ember from 'ember';

export default Ember.Component.extend({
  isImageShowing: false,
  actions: {
    imageShow: function() {
      this.set('isImageShowing', true);
    },
    imageHide: function() {
      this.set('isImageShowing', false);
    },
    delete(rental) {
      if (confirm('Woah bruchacho, easy there. You sure?')) {
        this.sendAction('destroyRental', rental);
      }
    }
  }
});
