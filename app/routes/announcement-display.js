import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      announcementTypes: this.store.findAll('announcementType'),
      announcements: this.store.findAll('announcement')
    });
  },
  setupController(controller, models){
    controller.set('announcementTypes', models.announcementTypes);
    controller.set('announcements', models.announcements);
  },

  actions: {
    delete(announcement) {
      if (confirm('Are you shure you want to delete this announcement?')) {
        announcement.destroyRecord();
        this.transitionTo('announcement-display');
      }
    },

    saveAnnouncement(params) {
      var newAnnouncement = this.store.createRecord('announcement', params);
      newAnnouncement.save();
      this.transitionTo('announcement-display');
    }
  }

});
