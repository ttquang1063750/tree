angular
    .module('app')
    .controller("TreeController", ['$scope', function ($scope) {
      $scope.selected = {};

      $scope.templates = {
        input: {
          model: "",
          type: "input-component",
          properties: {
            wrapper:{
              classes: [],
              styles: [
                { name: "flex", value: "0 1 100%"}
              ]
            },
            element:{
              classes: [],
              styles: []
            }
          }
        },
        select: {
          type: "select-component",
          model: "1",
          properties: {
            wrapper:{
              classes: [],
              styles: [
                { name: "flex", value: "0 1 100%"}
              ]
            },
            element:{
              classes: [],
              styles: []
            }
          }
        },
        stacked: {
          model: "stacked",
          type: "stacked-component",
          children: [],
          properties: {
            container:{
              classes: ["flex_column"],
              styles:[
                { name: "flex", value: "0 1 100%"},
                { name: "border", value: "1px dotted #000"},
                { name: "padding", value: "6px"}
              ]
            }
          }
        }
      };


      $scope.models = angular.copy($scope.templates.stacked);
    }]);