(function () {
  angular
      .module('app')
      .directive('ngBindModel', [
        '$compile',
        function ($compile) {
          return {
            restrict:"AC",

            link: function (scope, el, attr, tr) {
              el[0].removeAttribute('ng-bind-model');
              var stringModel = attr.ngBindModel;
              var tagName = el[0].nodeName.toLowerCase();
              var tagType = el[0].type ? el[0].type.toLowerCase() : "unknown";
              var index = attr.index ? attr.index : "i";
              var alias = attr.alias ? attr.alias : "item";
              var scopeModel = scope.$eval(stringModel);

              if (scopeModel !== undefined) {

                if (angular.isArray(scopeModel)) {
                  el[0].setAttribute('ng-repeat', "(" + index + "," + alias + ") in " + stringModel);

                } else {
                  if (tagName === "input" || tagName === "select" || tagName === "textarea") {

                    if (tagType === "checkbox" || tagType === "radio") {
                      el[0].setAttribute('ng-checked', scopeModel);
                    } else {
                      el[0].setAttribute('ng-model', scopeModel);
                    }
                  } else {
                    el[0].setAttribute('ng-bind-template', scopeModel);
                  }
                }
              } else {
                if (tagName === "input" || tagName === "select" || tagName === "textarea") {
                  el[0].setAttribute('value', stringModel);
                } else {
                  el[0].setAttribute('ng-bind-template', stringModel);
                }
              }
              $compile(el[0])(scope);
            }
          }
        }
      ]);
})();