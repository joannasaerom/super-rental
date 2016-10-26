import Ember from 'ember';

export default Ember.Component.extend({
  addNewRental: false,
  actions: {
    rentalFormShow() {
      this.set('addNewRental', true);
    },

    saveRental1() {
      var params = {
        owner: this.get('owner'),
        city: this.get('city'),
        type: this.get('type'),
        image: this.get('image'),
        bedrooms: this.get('bedrooms'),
        price: this.get('price'),
        description: this.get('description'),
      };
      this.set('addNewRental', false);
      this.sendAction('saveRental2', params);
      var controller = this;
      controller.set('owner', '');
      controller.set('city', '');
      controller.set('type', '');
      controller.set('image', '');
      controller.set('bedrooms', '');
      controll.set('price', '');
      controll.set('description', '');
    }
  }
});
