import Ember from 'ember';

export default Ember.Component.extend({
  fullLocation: Ember.computed('city.name', 'city.country', function() {
    return this.get('city.name') + ', ' + this.get('city.country');
  }),

  sortBy: ['cost:desc'],
  sortedRentals: Ember.computed.sort('city.rentals', 'sortBy'),

  actions: {
    destroyCity(city) {
      if(confirm('Hey Godzilla, slow down.')) {
        this.sendAction('destroyCity', city);
      }
    }
  }
});
