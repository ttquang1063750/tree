angular
    .module('app')
    .controller("TreeController", ['$scope', '$rootScope', 'appService', function ($scope, $rootScope, appService) {

      var stacked = {
        model: "stacked",
        type: "stacked",
        children: []
      };


      var input = {
        model: "d",
        type: "input"
      };


      var select = {
        type: "select",
        model: "1"
      };


      var paragraph = {
        type: "paragraph",
        model: "1"
      };


      var table= {
        model: "table",
        type: "table",
        children: [
          {
            children:[angular.copy(stacked), angular.copy(stacked)]
          },
          {
            children:[angular.copy(stacked), angular.copy(stacked)]
          }
        ]
      };

      $scope.isShow = appService.isShow;
      $scope.templates = {
        input: angular.copy(input),
        select: angular.copy(select),
        paragraph: angular.copy(paragraph),
        stacked: angular.copy(stacked),
        table: angular.copy(table)
      };

      $scope.userList = [
        {name: "xxx", age:10},
        {name: "yyy", age:20},
        {name: "zzz", age:30},
        {name: "www", age:40}
      ];
      $scope.selected = {};
      $scope.models = node;

      $scope.show = function () {
        appService.isShow = $scope.isShow = !$scope.isShow;
        $rootScope.$broadcast('$re-compile');
      }

    }]);