import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(rental) {
      if (confirm('Woah bruchacho, easy there. You sure?')) {
        this.sendAction('destroyRental', rental);
      }
    }
  }
});
