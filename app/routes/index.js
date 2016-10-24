import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      rentals: this.store.findAll('rental'),
      latestAnnouncement: this.store.findAll('announcement').then(function(announcements) {
        return announcements.sortBy('date').reverse().objectAt([0]);
      })
    });
  },
  setupController(controller, models){
    controller.set('rentals', models.rentals);
    controller.set('latestAnnouncement', models.latestAnnouncement);
  },

  actions: {
    saveRental3(params) {
      var newRental = this.store.createRecord('rental', params);
      newRental.save();
      this.transitionTo('index');
    },

    destroyRental(rental) {
      rental.destroyRecord();
      this.transitionTo('index');
    }
  }
});
