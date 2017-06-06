/**
 * Created by quangtang on 5/30/17.
 */
(function () {
  angular
      .module("app")
      .directive("addingStyle", [function () {
        return {
          restrict:"E",
          scope: {
            styles: '=',
            header:'@'
          },
          link: function($scope, $element, $attr) {

            $scope.remove = function (index) {
              $scope.styles.splice(index, 1);
            };

            $scope.addNew = function (index) {
              if(is.not.undefined(index)){
                $scope.styles.splice(index + 1, 0, {
                  name: "",
                  value: ""
                });
              }else{
                $scope.styles.push({
                  name: "",
                  value: ""
                });
              }
            };

            //Apply color picker to input if style name equal to color or background
            $scope.checkColor  = function (styleName) {
              var pattern = /\bcolor\b|\bbackground\b/;
              return pattern.test(styleName);
            };


            $scope.checkBackgroundImage = function (style, i) {
              var isBackgroundImage = style.name.indexOf("image") >= 0;
              if(isBackgroundImage){
                if(is.empty(style.value) || is.string(style.value)) {
                  style.value = {
                    attributes: {
                      image: {
                        url: ""
                      }
                    }
                  };
                }
              }else{
                if(is.object( style.name)){
                  style.value = "";
                }
              }

              return isBackgroundImage;
            };

          },
          templateUrl: 'properties/adding-style/index.html'
        }
      }]);
})();