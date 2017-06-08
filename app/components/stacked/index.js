(function () {
  angular
      .module('app')
      .directive('stackedComponent', {
        templateUrl: 'stacked/index.html',
        controller: ['$scope', function ($scope) {

          var copyItem = {
            html: '<div class="text-info" style="cursor: pointer;margin-left: 5px;">' +
            '<h4><i class="fa fa-files-o" aria-hidden="true"></i> Copy</h4></div>',
            click: function () {

            }
          };


          var pasteDisableItem = {
            html: '<div style="cursor: no-drop;margin-left: 5px;color: #777777">' +
            '<h4><i class="fa fa fa-clipboard" aria-hidden="true"></i> Paste</h4></div>',
            click: function () {
              return false
            }
          };


          var pasteItem = {
            html: '<div class="text-success" style="cursor: pointer;margin-left: 5px;">' +
            '<h4><i class="fa fa fa-clipboard" aria-hidden="true"></i> Paste</h4></div>',
            click: function () {

            }
          };



          var deleteItem = {
            html: '<div class="text-danger" style="cursor: pointer;margin-left: 5px;">' +
            '<h4><i class="fa fa-minus-square" aria-hidden="true"></i> Delete</h4></div>',
            enabled: function () {
              return true
            },
            click: function () {

            }
          };


          /*===============================================
           *  Right click options
           * =============================================*/
          $scope.menuOptions = function () {

            return [
              copyItem,
              pasteItem,
              pasteDisableItem,
              deleteItem
            ]
          };
        }]
      })
})();