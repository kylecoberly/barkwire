import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('dogs');
  this.route('dog', {path: "dogs/:dog_id"});
});

export default Router;
