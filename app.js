angular
    .module('app', ['dndLists'])
    .config([
      '$rootScopeProvider',
      function ($rootScopeProvider) {
        $rootScopeProvider.digestTtl(1000);
      }])
    .controller("TreeController", function ($scope) {
      $scope.models = {
        model: "tree",
        type:"tree-component",
        children: nodes,
        classList:["node"],
        styleList:["border-color:red"]
      };

      $scope.templates = {
        input:{
          model: "",
          type:"input-component",
          classList:["s"],
          styleList:["border-color:red"]
        },
        select: {
          type: 'select',
          model: "1",
          component:"select-component",
          classList:["s"],
          styleList:["border-color:red"]
        },
        tree:{
          model: "tree",
          type:"tree-component",
          children:[],
          classList:["node", "btn"],
          styleList:["border-color:red", "background:green"]
        }
      };

      $scope.$watch('models.children', function (model) {
        $scope.modelAsJson = angular.toJson(model, true);
      }, true);



    })
    .component("treeComponent", {
      bindings: {item: '='},
      templateUrl: 'temp/tree.html'
    })
    .component("inputComponent", {
      bindings: {item: '='},
      templateUrl: 'temp/input.html'
    })
    .component("selectComponent", {
      bindings: {item: '='},
      templateUrl: 'temp/select.html'
    })
    .directive("customStyle", [function(){
      return {
        restrict:"A",
        scope:{
          styleList:"<",
          classList:"<"
        },
        link:function(scope, el, attr){
          if(scope.styleList) attr.$set("style", scope.styleList.join(";"));
          if(scope.classList) attr.$set("class", scope.classList.join(" "));
        }
      }
    }])
    .directive('componentGenerator', function($compile) {
      return {
        scope: {
          item: '='
        },
        link: function(scope, element) {
          if(scope.item){
            var generatedTemplate = '<' + scope.item.type + ' item="item"></' + scope.item.type + '>';
            element.append($compile(generatedTemplate)(scope));
          }
        }
      };
    });