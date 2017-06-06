(function () {
  angular
      .module('app')
      .component('inputComponent', {
        bindings: {item: '='},
        templateUrl: 'input/index.html'
      })
})();