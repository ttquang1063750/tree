angular
    .module('app')
    .controller("TreeController", ['$scope', function ($scope) {

      var stacked = {
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
      };

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
        stacked: angular.copy(stacked),
        table: {
          model: "table",
          type: "table-component",
          children: [
            {
              children:[angular.copy(stacked), angular.copy(stacked)]
            },
            {
              children:[angular.copy(stacked), angular.copy(stacked)]
            }
          ],
          properties: {
            wrapper:{
              classes: [],
              styles:[]
            },
            row_header:{
              classes: [],
              styles:[]
            },
            column_header:{
              classes: [],
              styles:[]
            },
            row_body:{
              classes: [],
              styles:[]
            },
            column_body:{
              classes: [],
              styles:[]
            },
            element:{
              classes: ["table", "table-bordered"],
              styles: [
                { name: "flex", value: "0 1 100%"}
              ]
            }
          }
        }
      };

      $scope.selected = {};
      $scope.models = angular.copy(stacked);
    }]);