angular
    .module('app', [
      'colorpicker.module',
      'dndLists',
      'templates'
    ])
    .config([
      '$rootScopeProvider',
      function ($rootScopeProvider) {
        $rootScopeProvider.digestTtl(1000);
      }]);