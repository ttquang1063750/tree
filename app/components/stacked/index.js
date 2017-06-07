(function () {
  angular
      .module('app')
      .component('stackedComponent', {
        bindings: {item: '=', selected:"="},
        templateUrl: 'stacked/index.html',
        controller: function () {
          var ctrl = this;


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

          var pasteHtml = '<div class="text-success" style="cursor: pointer;margin-left: 5px;">' +
              '<h4><i class="fa fa fa-clipboard" aria-hidden="true"></i> Paste</h4></div>';
          var pasteItem = {
            html: pasteHtml,
            enabled: function () {
              return true
            },
            click: function () {
              _.each(componentModifying.saveDB, function (valueArr) {
                valueArr = angular.copy(valueArr);
                if (componentModifying.value.type === "stacked") {
                  componentModifying.value.children[0].children.push(valueArr);
                } else {
                  componentModifying.list.push(valueArr);
                }
              });
            }
          };


          var deleteHtml = '<div class="text-danger" style="cursor: pointer;margin-left: 5px;">' +
              '<h4><i class="fa fa-minus-square" aria-hidden="true"></i> Delete</h4></div>';
          var deleteItem = {
            html: deleteHtml,
            enabled: function () {
              return true
            },
            click: function () {
              componentModifying.list.splice(componentModifying.index, 1);
            }
          };


          /*===============================================
           *  Right click options
           * =============================================*/
          $scope.menuOptions = function (listFromUI, indexFromUI, valueFromUI) {

            // Keep scope list
            componentModifying.list = listFromUI;

            // Index of item in scope
            componentModifying.index = indexFromUI;

            // Current item in scope
            componentModifying.value = valueFromUI;

            return [
              copyItem,
              componentModifying.saveDB.length > 0 ? pasteItem : pasteDisableItem,
              null,
              deleteItem
            ]
          };
        }
      })
})();