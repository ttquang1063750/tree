(function () {
  angular
      .module('app')
      .directive('tableComponent', [function () {
        return {
          scope: {
            item:"="
          },
          replace: true,
          templateUrl: 'table/index.html'
        };
      }]);
})();