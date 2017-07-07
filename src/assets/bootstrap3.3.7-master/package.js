Package.describe({
  name: 'jswanson:bootstrap3.3.7',
  version: '1.0.1',
  summary: 'The most popular front-end framework for developing responsive, mobile first projects on the web.',
  git: 'https://github.com/jasonswanson/bootstrap3.3.7.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.0');
  api.use('jquery', 'client');

  var assets = [
    'dist/fonts/glyphicons-halflings-regular.eot',
    'dist/fonts/glyphicons-halflings-regular.svg',
    'dist/fonts/glyphicons-halflings-regular.ttf',
    'dist/fonts/glyphicons-halflings-regular.woff',
    'dist/fonts/glyphicons-halflings-regular.woff2'
  ];

  if (api.addAssets) {
    api.addAssets(assets, 'client');
  } else {
    api.addFiles(assets, 'client', { isAsset: true });
  }
  
  api.addFiles([
    'dist/css/bootstrap.min.css',
    'dist/js/bootstrap.min.js'
  ], 'client');

});
