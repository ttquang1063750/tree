(function () {
  angular
      .module('app')
      .component('tableComponent', {
        bindings: {item: '=', selected:'='},
        templateUrl: 'table/index.html'
      })
})();