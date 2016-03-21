/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'snapdash',
    environment: environment,
    baseURL: '/',
    locationType: 'none',
    apiHostName: 'http://localhost:3000',
    EmberENV: { FEATURES: {} },
    APP: {},
    torii: {
      sessionServiceName: 'session',
      providers: {
        'facebook-token': { apiKey: '726528350693125' }
      }
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.keenProjectId = '56db25aa90e4bd3adbdeaef5';
    ENV.keenReadKey = '4d4040800430dd33fc146334e0c1bf0ddd1216f71412f09f8e282ebe738d9f064b07da535d1cef72c5d9bf2db5285dd47cb346815a75c28fcf63c88d7925f9572290bcfc5731c724cf839cb0aa1c2fb3b70ee47332e2d4b804e4fcadaa7d067f';
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;
    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.apiHostName = 'https://damp-sea-6022.herokuapp.com'
    ENV.APP.LOG_ACTIVE_GENERATION = true;
    ENV.APP.LOG_TRANSITIONS = true;
    ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.keenProjectId = '56db1aa2d2eaaa1bfc96deac';
    ENV.keenReadKey = '8d55ee908fff7533478117ca50fe9d3328ee40c9a2aacbaf7a93597bb2f90acdc789b13c9135d95d07a9ec11cb27aa482d082078717e19976cddb67f95051335e5628f5a0240ae6008e5a8440fd438216ee488864b75648674e24f4ccb17cbe6';
  }

  return ENV;
};