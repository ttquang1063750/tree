(function () {
  angular
      .module('app')
      .directive('stackedComponent', [function () {
        return {
          scope: {
            item:"="
          },
          replace: true,
          templateUrl: 'stacked/index.html'
        };
      }]);
})();