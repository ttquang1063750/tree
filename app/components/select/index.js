(function () {
  angular
      .module('app')
      .component('selectComponent', {
        bindings: {item: '='},
        templateUrl: 'select/index.html'
      })
})();