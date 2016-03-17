/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    babel: {
      includePolyfill: true,
      optional: ['es7.decorators']
    },
    'ember-cli-qunit': {
      useLintTree: false
    },
    inlineContent: {
      favicon: { content: "<link rel='icon' href='/images/favicon.ico'>" }
    }
  });

  var pickFiles = require('broccoli-static-compiler');
  var mergeTrees = require('broccoli-merge-trees');

  // Keen.io
  app.import('bower_components/keen-js/dist/keen.min.js');

  // Font-Awesome
  var fontAwesomeFonts = pickFiles('bower_components/components-font-awesome/fonts', {
      srcDir: '/',
    destDir: '/fonts'
  });

  return mergeTrees([app.toTree(), fontAwesomeFonts]);
};