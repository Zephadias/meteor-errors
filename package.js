Package.describe({
  name: 'zephadias:errors',
  summary: 'A pattern to display application errors to the user',
  version: '1.0.1',
  git: 'https://github.com/Zephadias/meteor-errors'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use(['minimongo', 'mongo-livedata', 'templating'], 'client');
  api.addFiles(['errors.js', 'errors_list.html', 'errors_list.js'], 'client');

  if (api.export)
    api.export('Errors');

});

Package.onTest(function(api) {
  api.use('zephadias:errors', 'client');
  api.use(['tinytest', 'test-helpers'], 'client');
  api.addFiles('errors_tests.js', 'client');
});
