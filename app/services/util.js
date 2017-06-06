/**
 * Created by GUMI-QUANG on 6/24/16.
 */
(function () {
  angular
      .module('app')
      .factory('Util',
          [function () {

              var service = {};

              service.arrayStyleToObject = function (arr) {
                console.log(arr);
                  var o = {};
                  _.each(arr, function(a){
                    o[a.name] = a.value;
                  });

                  return o;
              };


              return service;
            }
          ]
      );
})();