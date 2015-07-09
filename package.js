Package.describe({
  summary: "Tutorial content, included in meteor.com via package",
  version: "0.0.1",
  name: "tutorials"
});

Package.onUse(function (api) {
  api.use('templating');
  api.use([
    'simple:markdown-templating@1.2.7'
  ]);

  api.addFiles([
    'steps/angular/step01.md',
    'steps/angular/step02.md',
    'steps/angular/step03.md',
    'steps/angular/step04.md',
    'steps/angular/step05.md',
    'steps/angular/step06.md',
    'steps/angular/step07.md',
    'steps/angular/step08.md',
    'steps/angular/step09.md',
    'steps/angular/step10.md',
    'steps/angular/step11.md',
    'steps/angular/step12.md',
    'steps/blaze/step01.md',
    'steps/blaze/step02.md',
    'steps/blaze/step03.md',
    'steps/blaze/step04.md',
    'steps/blaze/step05.md',
    'steps/blaze/step06.md',
    'steps/blaze/step07.md',
    'steps/blaze/step08.md',
    'steps/blaze/step09.md',
    'steps/blaze/step10.md',
    'steps/blaze/step11.md',
    'steps/blaze/step12.md',
    'steps/step00.html'
  ], 'client');

  api.addFiles([
    'routes/angularTut.js',
    'routes/blazeTut.js',
    'routes/tutorial-pages.js'
  ]);

  // Also, exports all of the templates from the steps/ directory
  api.export('TUTORIAL_PAGES');
});
