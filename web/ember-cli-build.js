/* eslint-env node */
const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    storeConfigInMeta: false,
    SRI: {
      enabled: false
    },
    fingerprint: {
      enabled: false
    },
    outputPaths: {
      app: {
        css: {
          'app': '/assets/avenger-web.css'
        },
        js: '/assets/avenger-web.js'

      },
    }
  });

  return app.toTree();
};
