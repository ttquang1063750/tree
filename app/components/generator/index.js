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
              var generatedTemplate = '<' + scope.item.type + ' item="item" selected="selected" class="stacked"></' + scope.item.type + '>';
              element.addClass("stacked");
              element.append($compile(generatedTemplate)(scope));
            }
          }
        };
      }]);
})();