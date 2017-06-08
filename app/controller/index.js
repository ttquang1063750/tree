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


      var input = {
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
      };


      var select = {
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
      };


      var paragraph = {
        type: "paragraph-component",
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
      };


      var table= {
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
            styles:[]
          },
          column_header:{
            styles:[]
          },
          row_body:{
            styles:[]
          },
          column_body:{
            styles:[]
          },
          element:{
            classes: ["table", "table-bordered"],
            styles: [
              { name: "flex", value: "0 1 100%"}
            ]
          }
        }
      };

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

    }]);