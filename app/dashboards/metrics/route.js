import Ember from 'ember';

const {
  Route,
  inject: { service }
} = Ember;

export default Route.extend({

  // services
  ajax: service(),

  model() {
    return this.get('ajax').getServer('metrics');
  }

});