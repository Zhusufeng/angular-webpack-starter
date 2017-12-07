angular.module('dashboard', []).config(function($sceProvider) {
  $sceProvider.enabled(false);
});

/* Require entry pts */
require('./directives');
require('./services');
require('./controllers');
