import Ember from 'ember';
import computed from 'ember-computed-decorators';
import { alias } from 'ember-computed-decorators';

const {
  Component,
  inject: { service }
} = Ember;

export default Component.extend({

  // services
  keen: service(),

  // attributes
  labels: null,
  query: null,

  // computed
  @alias('keen.client') client,

  @computed
  labelsSplit() {
    return this.get('labels').split(',');
  },

  // events
  didInsertElement() {
    Keen.ready(() => {
      let keen = this.get('keen');
      let query = keen.get(this.query);
      keen.get('client').draw(query, this.element, {
        library: 'google',
        chartType: 'barchart',
        height: 340,
        title: null,
        colors: ['#79CDCD'],
        labels: this.get('labelsSplit'),
        chartOptions: {
          chartArea: { height: '85%', left: '20%', top: '5%' },
          legend: { position: 'none' }
        }
      });
    });
  }

});