import Ember from 'ember';

export default Ember.Route.extend({
//This model was used originally, but when working with mupltiple model hooks it needed to be replaced with the Ember.RSVP.hash:
// model() {
//   return rentals;
// },
  model() {
    return Ember.RSVP.hash({
      rentals: this.store.findAll('rental'),
      announcements: this.store.findAll('announcement'),
      cities: this.store.findAll('city')
    });
  },
  actions: {
    saveCity(params) {
      var newCity = this.store.createRecord('city', params);
      newCity.save();
      this.transitionTo('index');
    },
    save3(params) {
      var newRental = this.store.createRecord('rental', params);
      newRental.save();
      this.transitionTo('index');
    },
    activateAnnouncement(announcement, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          announcement.set(key,params[key]);
        }
      });
      announcement.save();
      this.transitionTo('index');
    },
    deactivateAnnouncement(announcement, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          announcement.set(key,params[key]);
        }
      });
      announcement.save();
      this.transitionTo('index');
    },
    destroyAnnouncement(announcement) {
      announcement.destroyRecord();
      this.transitionTo('index');
    },
    saveAnnouncement(params) {
      var newAnnouncement = this.store.createRecord('announcement', params);
      newAnnouncement.save();
      this.transitionTo('index');
    },
  }
});
