import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('dashboards', function() {
    this.route('metrics');
    this.route('operations');
    this.route('ten');
  });
});

export default Router;