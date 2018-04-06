(function () {
  angular
      .module('app')
      .directive('root', ['$compile', function ($compile) {
        return {
          scope: {
            item:"="
          },
          link: function (scope, element) {
            var triggerRelink = function() {
              var html = $compile('<tree item="item"></tree>')(scope);
              element.html(html);
            };

            triggerRelink();
            scope.$on('$re-compile', triggerRelink);
          }
        };
      }])
      .directive('tree', ['$compile', 'appService', function ($compile, appService) {
        return {
          scope: {
            item:"="
          },
          link: function (scope, element) {
            var triggerRelink = function() {
              var directive = '<' + scope.item.type + '-component item="item"/>';
              var html = $compile(directive)(scope);
              if(appService.isShow){
                element.html(html);
              }else{
                element.replaceWith(html);
              }
            };

            triggerRelink();
            scope.$on('$re-compile', triggerRelink);
          }
        };
      }]);
})();