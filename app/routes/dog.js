import Ember from 'ember';

export default Ember.Route.extend({
  model(parameters){
    return this.store.findRecord("dog", parameters.dog_id);
  }
});
