Package.describe({
  name: 'katocolon:pinboarder',
  summary: ' /* Fill me in! */ ',
  version: '1.0.0',
  git: ' /* Fill me in! */ '
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles('katocolon:pinboarder.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('katocolon:pinboarder');
  api.addFiles('katocolon:pinboarder-tests.js');
});
