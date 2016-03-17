import Ember from 'ember';
import computed from 'ember-computed-decorators';

const {
  Component
} = Ember;

export default Component.extend({

  size: 12,
  label: null,
  classNameBindings: [ 'computedSize' ],

  @computed
  computedSize() {
    return `col-md-${this.get('size')}`;
  }

});