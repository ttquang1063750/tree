(function () {
  angular
      .module('app')
      .directive('inputComponent', [function () {
        return {
          scope: {
            item:"="
          },
          replace: true,
          template: '<input type="text" ng-model="item.model">'
        };
      }]);
})();