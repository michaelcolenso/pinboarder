Package.describe({
  name: 'katocolon:pinboarder',
  summary: 'pinboard thing for meteor',
  version: '0.0.0',
  git: 'https://github.com/michaelcolenso/pinboarder.git'
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
