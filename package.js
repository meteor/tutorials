Package.describe({
  summary: "Tutorial content, included in meteor.com via package",
  version: "0.0.1",
  name: "tutorials"
});

Package.onUse(function (api) {
  api.use('templating');
  api.use('markdown');

  api.addFiles([
    'steps/angular/step01.html',
    'steps/angular/step02.html',
    'steps/angular/step03.html',
    'steps/angular/step04.html',
    'steps/angular/step05.html',
    'steps/angular/step06.html',
    'steps/angular/step07.html',
    'steps/angular/step08.html',
    'steps/angular/step09.html',
    'steps/angular/step10.html',
    'steps/angular/step11.html',
    'steps/angular/step12.html',
    'steps/blaze/step01.html',
    'steps/blaze/step02.html',
    'steps/blaze/step03.html',
    'steps/blaze/step04.html',
    'steps/blaze/step05.html',
    'steps/blaze/step06.html',
    'steps/blaze/step07.html',
    'steps/blaze/step08.html',
    'steps/blaze/step09.html',
    'steps/blaze/step10.html',
    'steps/blaze/step11.html',
    'steps/blaze/step12.html',
    'steps/step00.html',

    'routes/angularTut.js',
    'routes/blazeTut.js',
    'routes/tutorial-pages.js'
  ]);

  // Also, exports all of the templates from the steps/ directory
  api.export('TUTORIAL_PAGES');
});
