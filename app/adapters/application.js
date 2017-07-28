import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: "https://barkwire-api.herokuapp.com"
});
