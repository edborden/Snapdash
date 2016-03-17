import Ember from 'ember';

const {
  Component
} = Ember;

export default Component.extend({

  metric: null,

  didInsertElement() {
    Keen.ready( () => {
      let chart = new Keen.Dataviz();
      chart.el(this.get('element'));
      chart.prepare();
      chart.data({ result: this.get('metric') });
      chart.render();
    });
  }
    
});