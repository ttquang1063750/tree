(function () {
  angular
      .module('app')
      .directive('selectComponent', [function () {
        return {
          scope: {
            item:"="
          },
          replace: true,
          templateUrl: 'select/index.html'
        };
      }]);
})();