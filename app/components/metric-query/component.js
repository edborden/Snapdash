import Ember from 'ember';
import computed from 'ember-computed-decorators';

const {
  Component,
  inject: { service }
} = Ember;

export default Component.extend({

  // services
  keen: service(),

  // attributes
  queryType: 'count_unique',
  eventCollection: null,
  filterProperty: null,
  filterValue: null,
  timeframe: 'this_7_days',
  targetProperty: null,
  interval: null,
  chartType: 'metric',

  // events
  didInsertElement() {
    Keen.ready(() => {
      let query = this.get('query');
      let chartOptions = this.get('chartOptions');
      this.get('keen').get('client').draw(query, this.element, chartOptions);
    });
  },

  @computed
  chartOptions() {
    let { chartType } = this;
    return { chartType, colors: ['#852667'] };
  },

  @computed
  query() {
    return new Keen.Query(this.queryType, this.get('queryOptions'));
  },

  @computed
  queryOptions() {
    let { eventCollection, timeframe, interval, targetProperty } = this;
    let queryOptions = {
      eventCollection,
      timeframe,
      interval,
      targetProperty
    };

    if (this.filterProperty) {
      // jscs:disable requireCamelCaseOrUpperCaseIdentifiers
      queryOptions.filters = [ {
        operator: 'eq',
        property_name: this.filterProperty,
        property_value: this.filterValue
      } ];
    }

    return queryOptions;
  }

});