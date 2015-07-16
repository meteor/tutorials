Package.describe({
  summary: 'Tutorial content, included in meteor.com via package',
  version: '0.0.1',
  name: 'tutorials'
});

Package.registerBuildPlugin({
  name: 'build-plugin',
  sources: ['build-plugin/patch-plugin.jsx'],
  use: [
    'jsx@0.1.1',
    'underscore@1.0.3'
  ]
})

Package.onUse(function (api) {
  api.versionsFrom('1.1.0.2');
  api.use([
    'simple:markdown-templating@1.2.7',
    'templating',
    'underscore',
    'jsx@0.1.1',
    'simple:highlight.js@1.0.9',
    'reactive-var',
    'less'
  ]);

  api.addFiles([
    'generated/blaze-commits.js',
    'generated/angular-commits.js',
    'generated/react-commits.js',
    'routes/angularTut.js',
    'routes/blazeTut.js',
    'routes/reactTut.js',
    'routes/tutorial-pages.js'
  ]);

  api.addFiles([
    'content/angular/step01.md',
    'content/angular/step02.md',
    'content/angular/step03.md',
    'content/angular/step04.md',
    'content/angular/step05.md',
    'content/angular/step07.md',
    'content/angular/step08.md',
    'content/angular/step09.md',
    'content/angular/step10.md',
    'content/angular/step11.md',
    'content/angular/step12.md',
    'content/blaze/step01.md',
    'content/blaze/step02.md',
    'content/blaze/step03.md',
    'content/blaze/step04.md',
    'content/blaze/step05.md',
    'content/blaze/step08.md',
    'content/blaze/step09.md',
    'content/blaze/step10.md',
    'content/blaze/step11.md',
    'content/blaze/step12.md',
    'content/react/step01.md',
    'content/react/step02.md',
    'content/react/step03.md',
    'content/react/step04.md',
    'content/react/step05.md',
    'content/react/step08.md',
    'content/react/step09.md',
    'content/react/step10.md',
    'content/react/step11.md',
    'content/react/step12.md',
    'content/step00.html',

    'content/shared/explanations.md',
    'content/shared/adding-css.md',
    'content/shared/step06.md',
    'content/shared/step07.md',

    'components/code-box.html',
    'components/code-box.js',
    'components/git-patch-viewer/patch-viewer.html',
    'components/git-patch-viewer/patch-viewer.jsx',
    'components/git-patch-viewer/patch-viewer.less',

    'generated/react.multi.patch',
    'generated/blaze.multi.patch'
  ], 'client');

  // Also, exports all of the templates from the content/ directory
  api.export('TUTORIAL_PAGES');

  api.export('REACT_TUT');
  api.export('ANGULAR_TUT');
  api.export('BLAZE_TUT');

  // For easier debugging
  api.export('GitPatches');
});
