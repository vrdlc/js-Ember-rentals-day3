import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    destroyCity(city) {
      if(confirm('Hey Godzilla, slow down.')) {
        this.sendAction('destroyCity', city);
      }
    }
  }
});
