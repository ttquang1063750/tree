/**
 * Created by ThanhQuangNgocTuong on 12/6/16.
 */
(function(){
  angular
      .module("app")
      .filter('toObject', [function(){
        return function(data){
          var newData = {};
          if(data){
            angular.forEach(data, function (a) {
              newData[a.name] = a.value;
            });
          }
          return newData;
        }
      }])
})();