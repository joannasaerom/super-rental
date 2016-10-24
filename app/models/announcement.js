import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  message: DS.attr('string'),
  type: DS.attr('string'),
  date: DS.attr('date')
});
