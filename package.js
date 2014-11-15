Package.describe({
  name: 'pinboarder',
  summary: 'pinboard thing for meteor',
  version: '0.0.1',
  git: 'https://github.com/michaelcolenso/pinboarder.git'
});

Package.onUse(function(api) {
  api.addFiles('pinboarder.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('pinboarder');
  api.addFiles('pinboarder-tests.js');
});
