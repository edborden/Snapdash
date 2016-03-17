import Ember from 'ember';

const {
  Component
} = Ember;

export default Component.extend({

  tagName: 'iframe',
  attributeBindings: [ 'scrolling', 'frameborder', 'width', 'src', 'height' ],
  scrolling: 'no',
  frameborder: 'no',
  width: '100%',
  src: null,
  height: '300px'

});