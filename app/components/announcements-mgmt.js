import Ember from 'ember';

export default Ember.Component.extend({
  manageAnnouncements: false,
  actions: {
    announcementManagementShow() {
      this.set('manageAnnouncements', true);
    },
    announcementManagementHide() {
      this.set('manageAnnouncements', false);
    },
    deactivateAnnouncement(announcement) {
      var params = {
        title: this.get('title'),
        message: this.get('message'),
        current: false
      };
      this.sendAction('deactivateAnnouncement', announcement, params);
    },
    activateAnnouncement(announcement) {
      var params = {
        title: this.get('title'),
        message: this.get('message'),
        current: true
      };
      this.sendAction('activateAnnouncement', announcement, params);
    },
    delete(announcement) {
      if (confirm("Damn. You sure, dawg???")) {
        this.sendAction('destroyAnnouncement', announcement);
      }
    },
    saveAnnouncement(params) {
      this.sendAction('saveAnnouncement', params);
    }
  }
});
