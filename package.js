Package.describe({
  summary: 'Tutorial content, included in meteor.com via package',
  version: '0.0.1',
  name: 'tutorials'
});

Package.onUse(function (api) {
  api.use([
    'simple:markdown-templating@2.0.3',
    'templating',
    'underscore',
    'jsx',
    'simple:highlight.js@1.0.9',
    'reactive-var',
    'less',
    'ecmascript',
    'mdg:tutorial-step-diff-compiler@0.4.2',
    'mdg:tutorial-diff-box@0.4.2',
    'mdg:tutorial-registry@0.4.2'
  ]);

  api.addFiles([
    'content/angular/metadata.js',
    'content/blaze/metadata.js',
    'content/react/metadata.js',
  ]);

  api.addFiles([
    'content/angular/step02.md',
    'content/angular/step03.md',
    'content/angular/step04.md',
    'content/angular/step05.md',
    'content/angular/step06.md',
    'content/angular/step07.md',
    'content/angular/step08.md',
    'content/angular/step09.md',
    'content/angular/step10.md',
    'content/angular/step11.md',
    'content/angular/step12.md',

    'content/blaze/step02.md',
    'content/blaze/step03.md',
    'content/blaze/step04.md',
    'content/blaze/step05.md',
    'content/blaze/step07.md',
    'content/blaze/step08.md',
    'content/blaze/step09.md',
    'content/blaze/step10.md',
    'content/blaze/step12.md',

    'content/react/step02.md',
    'content/react/step03.md',
    'content/react/step04.md',
    'content/react/step05.md',
    'content/react/step07.md',
    'content/react/step08.md',
    'content/react/step09.md',
    'content/react/step10.md',
    'content/react/step11.md',
    'content/step00.html',

    'content/shared/explanations.md',
    'content/shared/adding-css.md',
    'content/shared/adding-css.js',
    'content/shared/nextSteps.md',
    'content/shared/step01.md',
    'content/shared/step06.md',
    'content/shared/step11.md',

    'generated/react.multi.patch',
    'generated/blaze.multi.patch',
    'generated/angular.multi.patch'
  ], 'client');

  // Also, exports all of the templates from the content/ directory
  api.export('TUTORIAL_PAGES');

  api.export('REACT_TUT');
  api.export('ANGULAR_TUT');
  api.export('BLAZE_TUT');
});
