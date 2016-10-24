import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnnouncement: false,
  type: 'weather',
  actions: {
    selectType(value) {
      this.set('type', value);
    },
    announcementFormShow() {
      this.set('addNewAnnouncement', true);
    },

    saveAnnouncement() {
      var params = {
        title: this.get('title'),
        type: this.get('type'),
        message: this.get('message'),
        date: this.get('date'),
      };
      this.set('addNewAnnouncement', false);
      this.sendAction('saveAnnouncement', params);
    }
  }
});
