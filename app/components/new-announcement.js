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
      var parsedDate = new Date(this.get('date'));
      parsedDate.setTime(parsedDate.getTime() + parsedDate.getTimezoneOffset()*60*1000);
      var params = {
        title: this.get('title'),
        type: this.get('type'),
        message: this.get('message'),
        date: parsedDate,
      };
      this.set('addNewAnnouncement', false);
      this.sendAction('saveAnnouncement', params);
    }
  }
});
