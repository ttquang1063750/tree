/**
 * Created by quangtang on 5/30/17.
 */
(function () {
  angular
      .module("app")
      .directive("addingClass",
          [function () {
              return {
                restrict: "E",
                scope: {
                  classes: '=',
                  header:'@'
                },
                link: function ($scope, $element, $attr) {

                  $scope.flexbox = [
                    "flex_row",
                    "flex_row_reverse",
                    "flex_column",
                    "flex_column_reverse",
                    "flex_wrap",
                    "flex_wrap_reverse",
                    "flex_justify_content_end",
                    "flex_justify_content_center",
                    "flex_justify_content_space_around",
                    "flex_justify_content_space_between",
                    "flex_align_items_start",
                    "flex_align_items_end",
                    "flex_align_items_center",
                    "flex_align_items_baseline",
                    "flex_aligns_content_start",
                    "flex_aligns_content_end",
                    "flex_aligns_content_center",
                    "flex_aligns_content_space_between",
                    "flex_aligns_content_space_around",
                    "flex_align-self-start",
                    "flex_align-self-end",
                    "flex_align-self-center",
                    "flex_align-self-baseline",
                    "flex_align-self-stretch"
                  ];

                  $scope.remove = function (index) {
                    $scope.classes.splice(index, 1);
                  };

                  $scope.addNew = function (index) {
                    if(is.not.undefined(index)){
                      $scope.classes.splice(index + 1, 0, "flex_column");
                    }else{
                      $scope.classes.push("flex_column");
                    }
                  };

                },
                templateUrl: 'properties/adding-class/index.html'
              }
            }]);
})();