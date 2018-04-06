angular
    .module('app', [
      'colorpicker.module',
      'ui.bootstrap.contextMenu',
      'dndLists',
      'templates'
    ])
    .config([
      '$rootScopeProvider',
      function ($rootScopeProvider) {
        $rootScopeProvider.digestTtl(1000);
      }])
      .factory('appService', function () {
        return {
          isShow: true
        }
      });