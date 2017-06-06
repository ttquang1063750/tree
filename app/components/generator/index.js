(function () {
  angular
      .module('app')
      .directive('generator', ['$compile', function($compile) {
        return {
          scope: {
            item: '<',
            selected:"="
          },
          link: function(scope, element) {
            if(scope.item){
              var generatedTemplate = '<' + scope.item.type + ' item="item" selected="selected" ng-class="item.properties.component.classes" ng-style="item.properties.component.styles | toObject"></' + scope.item.type + '>';
              element.append($compile(generatedTemplate)(scope));
            }
          }
        };
      }]);
})();