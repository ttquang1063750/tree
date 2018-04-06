(function () {
  angular
      .module('app')
      .directive('paragraphComponent', [function () {
        return {
          scope: {
            item:"="
          },
          replace: true,
          template: '<p>{{item.model}}</p>'
        };
      }]);
})();